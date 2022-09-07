import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import IconPicker from "./IconPicker";
import Colors from "../../constants/Colors";
import ColorPicker from "./ColorPicker";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

const HabitEditModal = (props) => {
  useEffect(() => {
    if (props.editModalVisible) {
      setChosenAmount(props.habit?.value["Amount"]),
        setChosenColor(props.habit?.value["Color"]),
        setChosenName(props.habit?.value["Name"]),
        setChosenIconName(props.habit?.value["Icon"]);
    }
  }, [props.editModalVisible]);

  const [chosenIconName, setChosenIconName] = useState(
    props.habit?.value["Icon"]
  );
  const [chosenColor, setChosenColor] = useState("");
  const [chosenName, setChosenName] = useState("");
  const [chosenAmount, setChosenAmount] = useState("");

  const onIconPress = (name) => {
    setChosenIconName(name);
  };

  const onColorPress = (name) => {
    setChosenColor(name);
  };

  const saveHabit = async () => {
    try {
      const habit = {
        Name: chosenName,
        Amount: chosenAmount,
        Color: chosenColor,
        Icon: chosenIconName,
        Sessions: props.habit?.value["Sessions"],
        PerfectWeeks: props.habit?.value["PerfectWeeks"],
        BatteryCount: props.habit?.value["BatteryCount"],
        //Notificiations:"later"
      };
      const jsonHabit = JSON.stringify(habit);
      await AsyncStorage.removeItem("Habit_" + props.habit.value["Name"]);
      await AsyncStorage.setItem("Habit_" + chosenName, jsonHabit);

      Alert.alert("Habit erfolgreich editiert");
      props.getHabits();
      props.setInfoModalVisible(false);
      props.setEditModalVisible(false);
      props.getHabits();
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
        backdropColor={"#132224"}
        backdropOpacity={0.6}
        animationOut="slideOutUp"
        //useNativeDriver={true}
        onBackdropPress={() => {
          props.setEditModalVisible(false);
        }}
      >
        <View
          style={{
            // alignItems: "center",
            // justifyContent: "center",
            justifyContent: "space-between",
            padding: 10,
            width: "100%",
            // height: "89%",
            backgroundColor: "white",
            borderRadius: 10,
          }}
        >
          <View style={{ marginHorizontal: "4%", marginTop: "5%" }}>
            <MyText content="Batterie editieren" semiBold />
          </View>
          <TextInput
            style={styles.input}
            onChangeText={(name) => setChosenName(name)}
            defaultValue={chosenName}
            keyboardType="default"
          />

          {/* <TextInput
                    style={styles.input}
                    placeholder="Schwierigkeit"
                    keyboardType="default"
                  /> */}
          <TextInput
            style={styles.input}
            onChangeText={(amount) => setChosenAmount(amount)}
            defaultValue={chosenAmount}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="Benachrichtigungen"
            keyboardType="numeric"
            placeholderTextColor="grey"
          />
          <IconPicker
            icons={[
              "fitness-center",
              "pool",
              "sports-volleyball",
              "sports-soccer",
              "sports-esports",
              "directions-bike",
              "directions-run",
            ]}
            chosenIconName={chosenIconName}
            setChosenIconName={setChosenIconName}
            onIconPress={onIconPress}
          />
          <IconPicker
            icons={[
              "center-focus-weak",
              "self-improvement",
              "menu-book",
              "volunteer-activism",
              "no-food",
              "no-drinks",
              "school",
            ]}
            chosenIconName={chosenIconName}
            setChosenIconName={setChosenIconName}
            onIconPress={onIconPress}
          />

          <ColorPicker
            onColorPress={onColorPress}
            setChosenColor={setChosenColor}
            chosenColor={chosenColor}
          />
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
              <MyText content="Speichern" semiBold size={15} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    padding: 8,
    backgroundColor: "white",
    margin: 30,
    borderRadius: 10,
    width: "100%",
    // shadowColor: "black", // shadow for ios , elevation for android
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,
    // elevation: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryDark,
    padding: 10,
  },
});

export default HabitEditModal;
