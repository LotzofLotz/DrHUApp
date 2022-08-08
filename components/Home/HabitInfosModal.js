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

const HabitInfosModal = (props) => {
  const [height, setHeight] = useState(0);
  const [step, setStep] = useState(
    filterSessions?.length < 0 ? filterSessions?.length : 0
  );
  const markedObject = {};

  const filterSessions = () => {
    const filtered = props.habit?.value["Sessions"].filter((session) =>
      isThisWeek(parseISO(session), { weekStartsOn: 1 })
    );
    // console.log("filtering sessions:", filtered);
    setStep(filtered?.length);
    return filtered;
  };

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
    // console.log("useeffect1 triggerd!");
    // if (props.habitInfosVisible) {
    // console.log("checkpoint reached");
    markDays(props.habit?.value["Sessions"]);
    filterSessions();
    // }
  }, [props.currentHabit]);

  const addSession = async (name) => {
    try {
      const habit = await AsyncStorage.getItem("Habit_" + name);
      const parsed = JSON.parse(habit);
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
      parsed.Sessions.pop();
      await AsyncStorage.mergeItem("Habit_" + name, JSON.stringify(parsed));
      props.getHabits();
      setStep(step - 1);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteHabit = async (name) => {
    console.log("delte habit triggered");
    try {
      await AsyncStorage.removeItem("Habit_" + name);
      // Alert.alert("Habit " + name + " erfolgreich gelöscht");
      props.getHabits();
      props.setHabitInfosVisible(false);
    } catch (e) {
      console.log(e);
    }
  };

  const editHabit = () => {};

  return (
    <View>
      <Modal
        isVisible={props.habitInfosVisible}
        animationIn="slideInDown"
        backdropColor={Colors.primaryLight}
        backdropOpacity={0.3}
        animationOut="slideOutUp"
        onBackdropPress={() => props.setHabitInfosVisible(false)}
      >
        <View
          onLayout={(e) => {
            const newHeight = e.nativeEvent.layout.height;
            setHeight(newHeight);
          }}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <ScrollView
            style={{
              padding: 8,
              backgroundColor: "white",

              borderRadius: 10,
              width: "100%",
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
                <View style={{ flexDirection: "row", marginTop: "5%" }}>
                  <MaterialIcons
                    name="edit"
                    size={24}
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
                    size={24}
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
                  marginTop: "12%",
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
              {markedObject.length == 0 ? (
                <MyText content="Loading" />
              ) : (
                <Calendar
                  style={{ marginTop: "5%" }}
                  firstDay={1}
                  hideArrows={true}
                  theme={{
                    arrowColor: Colors.primaryDark,
                    dayTextColor: Colors.primaryDark,
                    monthTextColor: Colors.primaryDark,
                    textSectionTitleColor: Colors.primaryDark,
                  }}
                  //markedDates={markedObject}
                  markedDates={markDays(props.habit?.value["Sessions"])}
                />
              )}
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default HabitInfosModal;
