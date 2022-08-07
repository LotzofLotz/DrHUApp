import React, { useState, useEffect, useCallback } from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import Modal from "react-native-modal";
import Colors from "../../constants/Colors";
import { MyText } from "../Global/MyText";
import ProgressBar from "./ProgressBar";
import isThisWeek from "date-fns/isThisWeek";
import parseISO from "date-fns/parseISO";
import { Icon } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const HabitInfosModal = (props) => {
  const [height, setHeight] = useState(0);
  const [step, setStep] = useState(0);

  const filterSessions = () => {
    const filtered = props.habit?.value["Sessions"].filter((session) =>
      isThisWeek(parseISO(session), { weekStartsOn: 1 })
    );
    return filtered;
  };

 

  // useFocusEffect(
  //   useCallback(() => {
  //     console.log("setting steps"), setStep(filterSessions?.length);
  //     return () => {};
  //   }, [])
  // );

  // useEffect(() => {});

  // useEffect(() => {
  //   setStep(filterSessions()?.length);
  //   // console.log("STEPS:", filterSessions()?.length);
  // }, []);
  useEffect(() => {
    filterSessions();
  }, []);

  const addSession = async (name) => {
    try {
      const habit = await AsyncStorage.getItem("Habit_" + name);
      const parsed = JSON.parse(habit);
      parsed.Sessions.push(new Date());
      await AsyncStorage.mergeItem("Habit_" + name, JSON.stringify(parsed));
      // setStep(parsed.Sessions.length);
      // filterSessions();
      // setStep(step + 1);
    } catch (e) {
      console.log(e);
    }
  };

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
        >
          <ScrollView
            style={{
              padding: 8,
              backgroundColor: "white",
              margin: 30,
              borderRadius: 10,
              //   height: height,
              //   bottom: 50,
            }}
          >
            <View style={{ marginTop: 10, marginRight: 10 }}>
              <MyText content={props.habit?.value["Name"]} semiBold />
              <MyText
                content={props.habit?.value["Amount"] + "x pro Woche"}
                size={18}
              />
            </View>
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity onPress={() => {}}>
                  <Text> MINUS</Text>
                </TouchableOpacity>
                <View
                  style={{
                    left: "6%",
                    height: 80,
                    width: "60%",
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
                    step={filterSessions()?.length}
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
                <TouchableOpacity
                  onPress={() => addSession(props.habit?.value["Name"])}
                >
                  <Text> PLUS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default HabitInfosModal;
