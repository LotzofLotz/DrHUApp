import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  ScrollView,
} from "react-native";
import isThisWeek from "date-fns/isThisWeek";
import parseISO from "date-fns/parseISO";
import getWeek from "date-fns/getWeek";
import PickerView from "./PickerView";
import { Icon } from "react-native-elements";

const HabitEditModal = (props) => {
  useEffect(() => {
    if (props.editModalVisible) {
      props.setModalOpen(true);
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

  const onIconPress = (name) => {
    setChosenIconName(name);
  };

  const onColorPress = (name) => {
    setChosenColor(name);
  };

  const saveHabit = async () => {
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

      Alert.alert("Habit erfolgreich editiert"); //nötig?
      props.getHabits();
      props.setModalOpen(false);
      props.setInfoModalVisible(false);
      props.setEditModalVisible(false);
      // props.getHabits();
      //props.navigation.pop();
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <View>
      <Modal
        isVisible={props.editModalVisible}
        animationIn="slideInUp"
        useNativeDriver={true}
        backdropColor={"#132224"}
        backdropOpacity={0.6}
        animationOut="slideOutUp"
        onBackdropPress={() => {
          props.setEditModalVisible(false);
          props.setModalOpen(false);
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
                  justifyContent: "space-between",
                }}
              >
                <MyText
                  content="Batterie editieren"
                  semiBold
                  size={modalHeight * 0.04}
                />
                <TouchableOpacity
                  onPress={() => {
                    props.setEditModalVisible(false), props.setModalOpen(false);
                  }}
                >
                  <Icon name="close" />
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
                placeholder=" Benachrichtigungen"
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
                    ? saveHabit()
                    : Alert.alert("Fülle erst alle Felder aus");
                }}
                style={{
                  height: 45,
                  width: "80%",
                  backgroundColor: Colors.yellow,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 30,
                }}
              >
                <MyText
                  content="Speichern"
                  semiBold
                  size={modalHeight * 0.025}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default HabitEditModal;
