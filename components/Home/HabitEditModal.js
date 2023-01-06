import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyInfo from "../Global/MyInfo";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";

import parseISO from "date-fns/parseISO";
import getWeek from "date-fns/getWeek";
import PickerView from "./PickerView";
import { Icon } from "react-native-elements";

const HabitEditModal = (props) => {
  useEffect(() => {
    if (props.editModalVisible) {
      // props.setModalOpen(true);
      setChosenAmount(props.habit?.value["Amount"]),
        setChosenColor(props.habit?.value["Color"]),
        setChosenName(props.habit?.value["Name"]),
        setChosenIconName(props.habit?.value["Icon"]);
    }
  }, [props.editModalVisible]);

  const [chosenIconName, setChosenIconName] = useState(
    props.habit?.value["Icon"]
  );
  const [oldAmount, setOldAmount] = useState(props.habit?.value["Amount"]);
  const [chosenColor, setChosenColor] = useState("");
  const [chosenName, setChosenName] = useState("");
  const [chosenAmount, setChosenAmount] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const modalHeight =
    Dimensions.get("window").height * 0.9 > 700
      ? 700
      : Dimensions.get("window").height * 0.9;
  const changeAmount = (amount) => {
    setChosenAmount(amount);
  };
  const [infoVisible, setInfoVisible] = useState(false);

  const onIconPress = (name) => {
    setChosenIconName(name);
  };

  const onColorPress = (name) => {
    setChosenColor(name);
  };

  const saveHabit = async () => {
    setInfoVisible(true);
    let perfectWeeks = props.perfectWeeks;

    let energy = await AsyncStorage.getItem("Energy");

    if (props.habit?.value["Amount"] != chosenAmount) {
      if (
        props.sessions >= props.habit?.value["Amount"] &&
        props.sessions < chosenAmount
      ) {
        perfectWeeks = perfectWeeks.splice(0, -1);
        energy = parseInt(energy) - 1;
        await AsyncStorage.setItem("Energy", energy.toString());
      }
      if (
        props.sessions < props.habit?.value["Amount"] &&
        props.sessions >= chosenAmount
      ) {
        perfectWeeks.push(
          getWeek(new Date(), {
            weekStartsOn: 1,
          })
        );
        energy = parseInt(energy) + 1;
        await AsyncStorage.setItem("Energy", energy.toString());
      }
    }

    try {
      const habit = {
        Name: chosenName,
        Amount: chosenAmount,
        Color: chosenColor,
        Icon: chosenIconName,
        Sessions: props.sessionDates,
        // PerfectWeeks: props.habit?.value["PerfectWeeks"],
        PerfectWeeks: perfectWeeks,
        Recommended: props.habit?.value["Recommended"],
        //Notificiations:"later"
      };

      const jsonHabit = JSON.stringify(habit);
      await AsyncStorage.removeItem("Habit_" + props.habit.value["Name"]);
      await AsyncStorage.setItem("Habit_" + chosenName, jsonHabit);
      console.log("setting this new habit:", jsonHabit);
      props.getHabits();
      props.setEditModalVisible(false);
      props.setInfoModalVisible(false);
      // props.setModalOpen(false);
      // console.log("trying to trigger getHabits in edit");
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <View>
      <Modal
        isVisible={props.editModalVisible}
        animationIn="slideInUp"
        // useNativeDriver={true}
        backdropColor={"#132224"}
        backdropOpacity={infoVisible ? 0 : 0.6}
        animationOut="slideOutUp"
        onBackdropPress={() => {
          props.setEditModalVisible(false);
          // props.setModalOpen(false);
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            backgroundColor: "white",
            borderRadius: 10,
            maxHeight: modalHeight,
          }}
        >
          <ScrollView style={{ margin: "4%" }}>
            <View style={{ justifyContent: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  bottom: "2%",
                  justifyContent: "space-between",
                }}
              >
                <MyText
                  content="Batterie editieren"
                  semiBold
                  size={modalHeight * 0.04}
                />
                <TouchableOpacity
                  style={{ top: "2%" }}
                  onPress={() => {
                    props.setEditModalVisible(false);
                    // props.setModalOpen(false),
                    // saveHabit(),
                    //props.setInfoModalVisible(true);
                  }}
                >
                  <Icon name="close" color={Colors.primaryDark} />
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                height: modalHeight * 0.3,
                justifyContent: "space-evenly",
              }}
            >
              <TextInput
                editable={
                  props.habit?.value["Recommended"] == true ? false : true
                }
                style={{
                  fontSize: modalHeight * 0.03,
                  height: modalHeight * 0.07,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.primaryDark,
                }}
                onChangeText={(name) => setChosenName(name)}
                defaultValue={chosenName} // hier bei recommended noch richtigen namen
                keyboardType="default"
                maxLength={25}
              />
              <TextInput
                style={{
                  fontSize: modalHeight * 0.03,
                  height: modalHeight * 0.07,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.primaryDark,
                }}
                onChangeText={(amount) => changeAmount(amount)}
                defaultValue={chosenAmount}
                keyboardType="numeric"
              />
              <TextInput
                style={{
                  fontSize: modalHeight * 0.03,
                  height: modalHeight * 0.07,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.primaryDark,
                }}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Benachrichtigungen"
                keyboardType="numeric"
                placeholderTextColor="grey"
              />
            </View>

            {props.habit?.value["Recommended"] == true ? (
              <View />
            ) : (
              <PickerView
                modalHeight={modalHeight}
                chosenIconName={chosenIconName}
                setChosenIconName={setChosenIconName}
                onIconPress={onIconPress}
                onColorPress={onColorPress}
                setChosenColor={setChosenColor}
                chosenColor={chosenColor}
              />
            )}
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 30,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  chosenName != "" &&
                  chosenAmount != 0 &&
                  chosenColor != "" &&
                  chosenIconName != ""
                    ? saveHabit() //setInfoVisible(true)
                    : Alert.alert("Fülle erst alle Felder aus");
                }}
                style={{
                  height: 50,
                  width: "100%",
                  backgroundColor: Colors.yellow,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                }}
              >
                <MyText
                  content="Speichern"
                  semiBold
                  size={modalHeight * 0.028}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
          <MyInfo
            color={Colors.primaryLight}
            isVisible={infoVisible}
            setIsVisible={setInfoVisible}
            text={"Batterie erfolgreich editiert!"}
            onPress={() => {
              setInfoVisible(false),
                // props.setModalOpen(false),
                props.setEditModalVisible(false);
              props.setInfoModalVisible(false);
            }}
            onXPress={() => {
              setInfoVisible(false),
                // props.setModalOpen(false),
                props.setEditModalVisible(false);
              props.setInfoModalVisible(false);
            }}
            buttonName={"Ok cool "}
          />
        </View>
      </Modal>
    </View>
  );
};

export default HabitEditModal;
