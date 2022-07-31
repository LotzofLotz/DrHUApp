import React from "react";
import { View } from "react-native";
import HabitSlot from "./HabitSlot";

const EmptyHabitsView = (props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 25,
        }}
      >
        <HabitSlot setModalVisible={props.setModalVisible} />
        <HabitSlot setModalVisible={props.setModalVisible} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 25,
        }}
      >
        <HabitSlot />
        <HabitSlot />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 25,
        }}
      >
        <HabitSlot />
        <HabitSlot />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 25,
        }}
      >
        <HabitSlot />
        <HabitSlot />
      </View>
    </View>
  );
};

export default EmptyHabitsView;
