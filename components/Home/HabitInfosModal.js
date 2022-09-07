import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, Alert } from "react-native";
import Modal from "react-native-modal";
import Colors from "../../constants/Colors";
import { MyText } from "../Global/MyText";
import ProgressBar from "./ProgressBar";
import isThisWeek from "date-fns/isThisWeek";
import parseISO from "date-fns/parseISO";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Calendar } from "react-native-calendars";
import HabitEditModal from "./HabitEditModal";
import getWeek from "date-fns/getWeek";

//TODO:::: komplettes modal ohne pixel size, damit es auf alle screensizes passt

//Modal mit Möglichkeit Sessions zu entfernen, CalendarView und Streak-Stats

const HabitInfosModal = (props) => {
  const [height, setHeight] = useState(0);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [batteries, setBatteries] = useState(0);
  const [currStreak, setCurrStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [streakActive, setStreakActive] = useState(false); //streakActive bedeutet, dass die currentStreak auch die longestStreak ist

  const [step, setStep] = useState(
    filterSessions?.length < 0 ? filterSessions?.length : 0
  );

  const markedObject = {};

  //returns this weeks sessions
  const filterSessions = () => {
    const filtered = props.habit?.value["Sessions"].filter((session) =>
      isThisWeek(parseISO(session), { weekStartsOn: 1 })
    );
    setStep(filtered?.length);
    return filtered;
  };

  //marks Days, where Sessions have been done
  const markDays = (sessions) => {
    let dates = [];
    let obj = {};
    sessions?.map((session) => dates.push(session.slice(0, 10)));
    const uniques = [...new Set(dates)]; //removes duplicates
    uniques.map(
      (date) =>
        (obj[date] = {
          selected: true,
          selectedColor: props.habit?.value["Color"],
        })
    );
    return obj;
  };

  useEffect(() => {
    // if (props.habitInfosVisible == true) {
    // erst wenn modal sichtbar
    console.log(":::::", props.habit);
    calculateStreaks();
    setBatteries(props.habit?.value["PerfectWeeks"].length);
    markDays(props.habit?.value["Sessions"]);
    filterSessions();
    // }
  }, [props.currentHabit]);

  useEffect(() => {
    console.log("HEIGHT:", height);
  }, [height]);

  const addSession = async (name) => {
    try {
      const habit = await AsyncStorage.getItem("Habit_" + name);
      const parsed = JSON.parse(habit);
      //final step
      if (parsed.Amount - 1 == step) {
        console.log("final session added ");
        const energy = await AsyncStorage.getItem("Energy");
        let newEnergy = parseInt(energy) + 1;
        parsed.PerfectWeeks.push(
          getWeek(new Date(), {
            weekStartsOn: 1,
          })
        );
        await AsyncStorage.setItem("Energy", newEnergy.toString());
        setBatteries(batteries + 1);
        setCurrStreak(currStreak + 1);
        if (streakActive || longestStreak == 0)
          setLongestStreak(longestStreak + 1);
      }

      parsed.Sessions.push(new Date());
      await AsyncStorage.mergeItem("Habit_" + name, JSON.stringify(parsed));
      props.getHabits();
      setStep(step + 1);
    } catch (e) {
      console.log(e);
    }
  };

  const removeSession = async (name) => {
    try {
      const habit = await AsyncStorage.getItem("Habit_" + name);
      const parsed = JSON.parse(habit);
      //final step
      if (parsed.Amount == step) {
        const energy = await AsyncStorage.getItem("Energy");
        let newEnergy = parseInt(energy) - 1;
        parsed.PerfectWeeks.pop();
        await AsyncStorage.setItem("Energy", newEnergy.toString());
        setBatteries(batteries - 1);
        setCurrStreak(currStreak - 1);
        if (streakActive) setLongestStreak(longestStreak - 1);
      }
      parsed.Sessions.pop();

      await AsyncStorage.mergeItem("Habit_" + name, JSON.stringify(parsed));
      props.getHabits();
      setStep(step - 1);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHabit = async (name) => {
    try {
      await AsyncStorage.removeItem("Habit_" + name);
      // Alert.alert("Habit " + name + " erfolgreich gelöscht");
      props.getHabits();
      props.setHabitInfosVisible(false);
    } catch (e) {
      console.log(e);
    }
  };

  const editHabit = () => {
    setEditModalVisible(true);
    props.setHabitInfosVisible(false);
  };

  //calculates current and longest Streak
  const calculateStreaks = () => {
    let perfectWeeks = props.habit?.value["PerfectWeeks"];
    let longestStreak = perfectWeeks?.length > 0 ? 1 : 0;
    let chunks = [];
    if (perfectWeeks?.length > 0) {
      let prev = 0;
      perfectWeeks?.forEach((current) => {
        // To decide whether or not to create a new chunk, we compare the current number with the previous number. If the difference isn't exactly 1, then they're not consecutive, so we need to start a new chunk.
        if (current - prev != 1) {
          console.log("pushing new chunk, prev:", prev, "current:", current),
            chunks.push([]);
        }
        // Now we can add our number to the current chunk!
        chunks[chunks.length - 1].push(current);
        // And now we're moving to the next number, so the current number will become the previous number:
        prev = current;
      });

      //sort chunks by length, max is at position 0
      chunks.sort((a, b) => b.length - a.length);
      longestStreak = chunks.length > 0 ? chunks[0].length : 0;

      if (
        // check if longestStreak  = currentStreak
        chunks[0][chunks[0].length - 1] ==
          perfectWeeks[perfectWeeks.length - 1] &&
        (chunks[0][chunks[0].length - 1] == getWeek(new Date()) ||
          chunks[0][chunks[0].length - 1] == getWeek(new Date()) - 1)
      ) {
        setStreakActive(true);
      }

      let currentStreak = 0;
      let i;

      const currentWeek = getWeek(new Date());
      const latestWeek = perfectWeeks[perfectWeeks?.length - 1];

      if (
        currentWeek == latestWeek ||
        currentWeek == latestWeek + 1 ||
        (currentWeek == 1 && latestWeek == 52)
      ) {
        currentStreak = 1;

        for (i = perfectWeeks?.length - 1; i >= 0; i--) {
          if (
            parseInt(perfectWeeks[i]) == parseInt(perfectWeeks[i - 1]) + 1 ||
            (parseInt(perfectWeeks[i]) == 1 &&
              parseInt(perfectWeeks[i - 1]) == 52) // nochmal checken, ob der Jahresübergang hier richtig klappt
          ) {
            currentStreak += 1;
          } else {
            break;
          }
        }
      }
      setLongestStreak(longestStreak);
      setCurrStreak(currentStreak);
    } else {
      setCurrStreak(0), setLongestStreak(0);
    }
  };

  return (
    <View>
      <HabitEditModal
        editModalVisible={editModalVisible}
        setEditModalVisible={setEditModalVisible}
        habit={props.habit}
        getHabits={props.getHabits}
        setInfoModalVisible={props.setHabitInfosVisible}
      />
      <Modal
        isVisible={props.habitInfosVisible}
        animationIn="slideInDown"
        backdropColor={"#132224"}
        backdropOpacity={0.6}
        animationOut="slideOutUp"
        onBackdropPress={() => props.setHabitInfosVisible(false)}
      >
        <View
          onLayout={(e) => {
            const newHeight = e.nativeEvent.layout.height;
            setHeight(newHeight);
          }}
          style={{
            justifyContent: "center",
            alignItems: "center",

            // height: "90%",
          }}
        >
          <View
            style={{
              // padding: 8,
              // flex: 1,
              backgroundColor: "white",
              borderRadius: 10,
              width: "100%",
              // height: "100%",
              justifyContent: "space-between",
            }}
          >
            <View style={{ marginHorizontal: "4%" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <MyText
                  content={props.habit?.value["Name"]}
                  semiBold
                  size={28}
                />
                <View style={{ flexDirection: "row", marginTop: "3%" }}>
                  <MaterialIcons
                    style={{ marginHorizontal: 10 }}
                    name="edit"
                    size={28}
                    color={Colors.primaryDark}
                    onPress={() => editHabit(props.habit?.value["Name"])}
                  />
                  <MaterialIcons
                    onPress={() =>
                      Alert.alert(
                        "Delete Habit",
                        "Bist du sicher? Alle Einträge gehen hiermit verloren ",
                        [
                          {
                            text: "Cancel",
                            onPress: () => {},
                            style: "cancel",
                          },
                          {
                            text: "OK",
                            onPress: () => {
                              deleteHabit(props.habit?.value["Name"]);
                            },
                          },
                        ]
                      )
                    }
                    name="delete"
                    size={28}
                    color={Colors.primaryDark}
                    // style={{ top: 10 }}
                  />
                </View>
              </View>

              <MyText
                content={props.habit?.value["Amount"] + "x pro Woche"}
                size={18}
              />
            </View>
            <View>
              <View
                style={{
                  marginTop: "5%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MaterialIcons
                  onPress={() => {
                    step > 0
                      ? removeSession(props.habit?.value["Name"])
                      : console.log("nix zum abziehen");
                  }}
                  name="do-not-disturb-on"
                  size={42}
                  color={Colors.primaryDark}
                  style={{ right: "24%" }}
                />
                <View
                  style={{
                    left: "6%",
                    height: 80,
                    width: "50%",
                    borderRadius: 12,
                    borderWidth: 7,
                    borderColor: Colors.primaryDark,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ProgressBar
                    color={props.habit?.value["Color"]}
                    steps={props.habit?.value["Amount"]}
                    step={step}
                    //step={step}
                    name={props.habit?.value["Icon"]}
                  />
                </View>
                <View
                  style={{
                    height: 40,
                    width: 20,
                    backgroundColor: Colors.primaryDark,
                    borderTopRightRadius: 4,
                    borderBottomRightRadius: 4,
                  }}
                />

                <MaterialIcons
                  onPress={() => addSession(props.habit?.value["Name"])}
                  name="add-circle"
                  size={42}
                  color={Colors.primaryDark}
                  style={{ left: "24%" }}
                />
              </View>
              <View>
                {markedObject.length == 0 ? (
                  <MyText content="Loading" />
                ) : (
                  <Calendar
                    // style={{ marginTop: "5%" }}
                    style={{ height: height * 0.55 }}
                    firstDay={1}
                    // hideArrows={true}
                    theme={{
                      arrowColor: Colors.primaryDark,
                      dayTextColor: Colors.primaryDark,
                      monthTextColor: Colors.primaryDark,
                      textSectionTitleColor: Colors.primaryDark,
                    }}
                    // markingType={"period"}
                    // markedDates={{
                    //   "2022-08-02": {
                    //     startingDay: true,
                    //     endingDay: true,
                    //     color: props.habit?.value["Color"],
                    //   },
                    //   "2022-08-05": {
                    //     startingDay: true,
                    //     endingDay: true,
                    //     color: props.habit?.value["Color"],
                    //   },
                    //   "2022-08-03": {
                    //     startingDay: true,
                    //     endingDay: true,
                    //     color: props.habit?.value["Color"],
                    //   },
                    //   "2022-08-16": {
                    //     startingDay: true,
                    //     endingDay: true,
                    //     color: props.habit?.value["Color"],
                    //   },
                    //   "2022-08-08": { startingDay: true, color: Colors.yellow },
                    //   "2022-08-09": { color: Colors.yellow },
                    //   "2022-08-10": { color: Colors.yellow },
                    //   "2022-08-11": { color: Colors.yellow },
                    //   "2022-08-12": { color: Colors.yellow },
                    //   "2022-08-13": { color: Colors.yellow },
                    //   "2022-08-14": { endingDay: true, color: Colors.yellow },
                    // }}

                    markedDates={markDays(props.habit?.value["Sessions"])}
                  />
                )}
              </View>
            </View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                // flex: 1.5,
              }}
            >
              <View
                style={{
                  marginTop: "5%",
                  borderBottomColor: "lightgrey",
                  borderBottomWidth: 2,
                  width: "92%",
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  margin: "1%",
                  justifyContent: "space-around",
                  width: "100%",
                }}
              >
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <MyText content="aktuelle" size={14} />
                  <MyText content="Streak" size={14} />
                  <View
                    style={{
                      // marginTop: 5,
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      backgroundColor: props.habit?.value["Color"],
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MyText content={currStreak} color="white" />
                  </View>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <MyText content="längste " size={14} />
                  <MyText content=" Streak" size={14} />
                  <View
                    style={{
                      // margin: 5,
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      backgroundColor: Colors.primaryDark,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MyText content={longestStreak} color="white" />
                  </View>
                </View>
                <View
                  style={{ justifyContent: "center", alignItems: "center" }}
                >
                  <MyText content="Batterien " size={14} />
                  <MyText content=" verdient" size={14} />
                  <View
                    style={{
                      // margin: 5,
                      height: 50,
                      width: 50,
                      borderRadius: 25,
                      backgroundColor: Colors.yellow,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MyText content={batteries} color="white" />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HabitInfosModal;
