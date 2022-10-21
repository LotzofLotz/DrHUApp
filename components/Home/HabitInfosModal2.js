import React, { useState, useEffect } from "react";
import {
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Platform,
} from "react-native";
import Modal from "react-native-modal";
import Colors from "../../constants/Colors";
import { MyText } from "../Global/MyText";
import ProgressBar from "./ProgressBar";
import isThisWeek from "date-fns/isThisWeek";
import parseISO from "date-fns/parseISO";
import getWeek from "date-fns/getWeek";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-calendars";
import HabitEditModal from "./HabitEditModal";
import { MyRecommendations } from "../Global/MyRecommendations";
import MyInfo from "../Global/MyInfo";
import { Icon } from "react-native-elements";
import { LocaleConfig } from "react-native-calendars";
import ContentDivider from "./ContentDivider";
import StreakView from "./StreakView";
import { StatusBar } from "react-native";
import { setStatusBarHidden } from "expo-status-bar";

//Modal mit Möglichkeit Sessions zu entfernen, CalendarView und Streak-Stats

const HabitInfosModal2 = (props) => {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("screen").height;
  const statusHeight = StatusBar.currentHeight;
  const ratio = height / width;
  const [modalHeight, setModalHeight] = useState(0);
  const [calendarHeight, setCalendarHeight] = useState(0);
  // Dimensions.get("window").height * 0.9 > 700
  //   ? 700
  //   : Dimensions.get("window").height * 0.9;
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [batteries, setBatteries] = useState(0);
  const [currStreak, setCurrStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [streakActive, setStreakActive] = useState(false); //streakActive bedeutet, dass die currentStreak auch die longestStreak ist
  const [step, setStep] = useState(
    filterSessions?.length < 0 ? filterSessions?.length : 0
  );
  const [infoVisible, setInfoVisible] = useState(false);
  const markedObject = {};
  const [perfectWeeks, setPerfectWeeks] = useState([]);
  const [sessionDates, setSessionDates] = useState([]);
  const modalPercentage = Platform.OS == "android" ? 0.9 : 0.94;
  // const freeSpace = height * modalPercentage - calendarHeight;
  const freeSpace =
    (screenHeight - statusHeight) * modalPercentage - calendarHeight;
  const availableSpace = freeSpace;

  useEffect(() => {
    console.log("Height total:", height);
    console.log("screen height:", screenHeight);
    // console.log("modal Height: ", modalHeight);
    // console.log("calendar height: ", calendarHeight);
    console.log("available space: ", availableSpace);

    console.log("statusBarHeight:", statusHeight);
  }, [modalHeight, calendarHeight]);

  LocaleConfig.locales["de"] = {
    monthNames: [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "Aug",
      "Sept",
      "Okt",
      "Nov",
      "Dez",
    ],
    dayNames: [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag",
    ],
    dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    today: "Heute",
  };
  LocaleConfig.defaultLocale = "de";

  //returns this weeks sessions
  const filterSessions = () => {
    const filtered = props.habit?.value["Sessions"].filter((session) =>
      isThisWeek(parseISO(session), { weekStartsOn: 1 })
    );
    setStep(filtered?.length);
    return filtered;
  };

  //marks Days, where Sessions have been done
  const markDays = (sessions, perfectWeeks) => {
    let dates = [];
    let obj = {};
    sessions?.map((session) => dates.push(session.slice(0, 10)));
    const uniques = [...new Set(dates)]; //removes duplicates
    uniques.map(
      (date) =>
        (obj[date] = {
          selected: true,
          selectedColor: perfectWeeks?.includes(
            getWeek(parseISO(date), {
              weekStartsOn: 1,
            })
          )
            ? Colors.yellow
            : props.habit?.value["Color"],
        })
    );

    return obj;
  };

  const [calendarObject, setCalendarObject] = useState({});

  useEffect(() => {
    setPerfectWeeks(props.habit?.value["PerfectWeeks"]);
    calculateStreaks();
    setBatteries(props.habit?.value["PerfectWeeks"].length);
    setSessionDates(props.habit?.value["Sessions"]);
    setCalendarObject(
      markDays(
        props.habit?.value["Sessions"],
        props.habit?.value["PerfectWeeks"]
      )
    );
    filterSessions();
  }, [props.habit]);

  const addSession = async (name) => {
    try {
      const habit = await AsyncStorage.getItem("Habit_" + name);
      const parsed = JSON.parse(habit);
      parsed.Sessions.push(new Date());
      setSessionDates(parsed.Sessions);
      if (parsed.Amount - 1 == step) {
        const energy = await AsyncStorage.getItem("Energy");
        let newEnergy = parseInt(energy) + 1;
        parsed.PerfectWeeks.push(
          getWeek(new Date(), {
            weekStartsOn: 1,
          })
        );
        setPerfectWeeks(parsed.PerfectWeeks);
        setCalendarObject(
          markDays(
            JSON.parse(JSON.stringify(parsed.Sessions)),
            parsed.PerfectWeeks
          )
        );

        await AsyncStorage.setItem("Energy", newEnergy.toString());
        setBatteries(batteries + 1);
        setCurrStreak(currStreak + 1);
        setStreakActive(true); //bug fixed, maybe caused another?
        if (streakActive || longestStreak == 0)
          setLongestStreak(longestStreak + 1);
      } else {
        setCalendarObject(
          markDays(JSON.parse(JSON.stringify(parsed.Sessions)), perfectWeeks)
        );
      }
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
      parsed.Sessions.pop();
      if (parsed.Amount == step) {
        const energy = await AsyncStorage.getItem("Energy");
        let newEnergy = parseInt(energy) - 1;
        parsed.PerfectWeeks.pop();
        setPerfectWeeks(parsed.PerfectWeeks);
        setCalendarObject(
          markDays(
            JSON.parse(JSON.stringify(parsed.Sessions)),
            parsed.PerfectWeeks
          )
        );
        await AsyncStorage.setItem("Energy", newEnergy.toString());
        setBatteries(batteries - 1);
        setCurrStreak(currStreak - 1);
        if (streakActive) setLongestStreak(longestStreak - 1);
      } else {
        setCalendarObject(
          markDays(
            JSON.parse(JSON.stringify(parsed.Sessions)),
            parsed.PerfectWeeks
          )
        );
      }
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
      props.getHabits();
      setInfoVisible(false);
    } catch (e) {
      console.log(e);
    }
  };

  const editHabit = () => {
    // props.setHabitInfosVisible(false);
    // props.getHabits();
    setEditModalVisible(true);
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
          // console.log("pushing new chunk, prev:", prev, "current:", current),
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
        setModalOpen={props.setModalOpen}
        sessions={step}
        perfectWeeks={perfectWeeks}
        sessionDates={sessionDates}
      />
      <Modal
        isVisible={props.habitInfosVisible}
        animationIn="slideInDown"
        backdropColor={"#132224"}
        backdropOpacity={infoVisible ? 0 : 0.6}
        animationOut="slideOutUp"
        onBackdropPress={() => props.setHabitInfosVisible(false)}
        // style={{ height: height * modalPercentage }}
        style={
          {
            // marginHorizontal: "5%",
            // marginVertical: availableSpace * 0.05,
            // marginBottom: 0,
          }
        }
      >
        <MyInfo
          color={Colors.primaryLight}
          isVisible={infoVisible}
          setIsVisible={setInfoVisible}
          text={"Bist du sicher? Alle Einträge gehen hiermit verloren!"}
          onPress={() => {
            deleteHabit(props.habit?.value["Name"]);
            setInfoVisible(false);
            props.setHabitInfosVisible(false);
          }}
          onXPress={() => {
            setInfoVisible(false);
          }}
          buttonName={"Löschen"}
        />
        <View>
          <ScrollView
            scrollEventThrottle={1000}
            style={{
              // top: "2%",
              backgroundColor: "white",
              borderRadius: 10,
              padding: "4%",
              // paddingHorizontal: "4%",
              // paddingVertical: "2%",
            }}
          >
            <View
              onLayout={(event) => {
                setModalHeight(event.nativeEvent.layout.height);
              }}
            >
              <View
                style={{
                  height: availableSpace * 0.18,
                  // backgroundColor: "lightgreen",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      width: "90%",

                      bottom: "2%",
                    }}
                  >
                    <MyText
                      content={
                        props.habit?.value["Recommended"] == false
                          ? props.habit?.value["Name"]
                          : MyRecommendations[props.habit?.value["Name"]]?.name
                      }
                      semiBold
                      size={height * 0.036}
                    />
                  </View>

                  <TouchableOpacity
                    // style={{ top: "2%" }}
                    onPress={() => (
                      props.setHabitInfosVisible(false),
                      props.setModalOpen(false)
                    )}
                  >
                    <Icon name="close" />
                  </TouchableOpacity>
                </View>
                <View style={{ bottom: "14%" }}>
                  <MyText
                    content={props.habit?.value["Amount"] + "x pro Woche"}
                    size={height * 0.02}
                  />
                </View>
              </View>

              <View>
                {/* AUSBAUFÄHIG, nicht genauso groß wie im habitsquare etc.  */}
                <View
                  style={{
                    height: availableSpace * 0.35,
                    // backgroundColor: "pink",
                    zIndex: 420,
                    // marginTop: "3%",
                    marginBottom: "-2%",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <MaterialIcons
                    onPress={() => {
                      step > 0
                        ? removeSession(props.habit?.value["Name"])
                        : console.log("nix zum abziehen");
                    }}
                    name="do-not-disturb-on"
                    size={ratio * 30}
                    color={Colors.primaryDark}
                    // style={{ right: "20%" }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        height: ratio * 45,
                        width: ratio * 90,
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
                        name={props.habit?.value["Icon"]}
                      />
                    </View>
                    <View
                      style={{
                        height: ratio * 24,
                        width: ratio * 7,
                        backgroundColor: Colors.primaryDark,
                        borderTopRightRadius: 7,
                        borderBottomRightRadius: 7,
                      }}
                    />
                  </View>

                  <MaterialIcons
                    onPress={() => addSession(props.habit?.value["Name"])}
                    name="add-circle"
                    size={ratio * 30}
                    color={Colors.primaryDark}
                  />
                </View>
                <View>
                  {markedObject.length == 0 ? (
                    <MyText content="Loading" />
                  ) : (
                    <View
                      onLayout={(event) => {
                        setCalendarHeight(event.nativeEvent.layout.height);
                      }}
                    >
                      <Calendar
                        firstDay={1}
                        theme={{
                          "stylesheet.calendar.header": {
                            // monthText: { margin: 0 },
                            week: {
                              marginHorizontal: "2%",
                              flexDirection: "row",
                              justifyContent: "space-between",
                            },
                          },
                          arrowColor: Colors.primaryDark,
                          dayTextColor: Colors.primaryDark,
                          monthTextColor: Colors.primaryDark,
                          textSectionTitleColor: Colors.primaryDark,
                          todayTextColor: Colors.primaryLight, // welche Farbe?
                          textDayFontSize: height * 0.022,
                          textMonthFontSize: height * 0.022,
                          textDayHeaderFontSize: height * 0.022,
                        }}
                        markedDates={calendarObject}
                      />
                    </View>
                  )}
                </View>
              </View>

              <View
                style={{
                  // backgroundColor: "lightblue",
                  height: availableSpace * 0.3,
                }}
              >
                <View
                  style={{
                    borderBottomColor: Colors.primaryLight,
                    borderBottomWidth: 1,
                    width: "100%",
                  }}
                />

                <StreakView
                  ratio={ratio}
                  color={props.habit?.value["Color"]}
                  currentStreak={currStreak}
                  longestStreak={longestStreak}
                  batteries={batteries}
                  height={height}
                />
              </View>

              <ContentDivider
                content="Edit&Delete"
                size={height * 0.018}
                height={availableSpace * 0.1}
              />

              <View
                style={{
                  width: "100%",
                  height: height * 0.13,
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginVertical: "5%",
                }}
              >
                <TouchableOpacity
                  onPress={() => editHabit(props.habit?.value["Name"])}
                  style={{
                    width: "80%",
                    height: height * 0.05,
                    borderWidth: 1,
                    borderColor: Colors.primaryDark,
                    borderRadius: 30,
                    justifyContent: "center",
                  }}
                >
                  <MyText content="Batterie bearbeiten" center />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setInfoVisible(true);
                  }}
                  style={{
                    width: "80%",
                    height: height * 0.05,
                    backgroundColor: Colors.pink,
                    borderRadius: 30,
                    justifyContent: "center",
                  }}
                >
                  <MyText content="Batterie löschen" center color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default HabitInfosModal2;
