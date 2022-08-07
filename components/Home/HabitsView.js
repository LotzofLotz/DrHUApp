import React from "react";
import { View } from "react-native";
import HabitSlot from "./HabitSlot";
import HabitSquare from "./HabitSquare";

const HabitsView = (props) => {
  const slots = props.slots;

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 25,
        }}
      >
        {slots[0] !== "empty" ? (
          <HabitSquare
            habit={slots[0]}
            getHabits={props.getHabits}
            setHabitInfosVisible={props.setHabitInfosVisible}
            setCurrentHabit={props.setCurrentHabit}
          />
        ) : (
          <HabitSlot
            getHabits={props.getHabits}
            setModalVisible={props.setModalVisible}
          />
        )}
        {slots[1] !== "empty" ? (
          <HabitSquare
            habit={slots[1]}
            getHabits={props.getHabits}
            setHabitInfosVisible={props.setHabitInfosVisible}
            setCurrentHabit={props.setCurrentHabit}
          />
        ) : (
          <HabitSlot
            getHabits={props.getHabits}
            setModalVisible={props.setModalVisible}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 25,
        }}
      >
        {slots[2] !== "empty" ? (
          <HabitSquare
            habit={slots[2]}
            getHabits={props.getHabits}
            setHabitInfosVisible={props.setHabitInfosVisible}
            setCurrentHabit={props.setCurrentHabit}
          />
        ) : (
          <HabitSlot
            getHabits={props.getHabits}
            setModalVisible={props.setModalVisible}
          />
        )}
        {slots[3] !== "empty" ? (
          <HabitSquare
            habit={slots[3]}
            getHabits={props.getHabits}
            setHabitInfosVisible={props.setHabitInfosVisible}
            setCurrentHabit={props.setCurrentHabit}
          />
        ) : (
          <HabitSlot
            getHabits={props.getHabits}
            setModalVisible={props.setModalVisible}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 25,
        }}
      >
        {slots[4] !== "empty" ? (
          <HabitSquare
            habit={slots[4]}
            getHabits={props.getHabits}
            setHabitInfosVisible={props.setHabitInfosVisible}
            setCurrentHabit={props.setCurrentHabit}
          />
        ) : (
          <HabitSlot
            getHabits={props.getHabits}
            setModalVisible={props.setModalVisible}
          />
        )}
        {slots[5] !== "empty" ? (
          <HabitSquare
            habit={slots[5]}
            getHabits={props.getHabits}
            setHabitInfosVisible={props.setHabitInfosVisible}
            setCurrentHabit={props.setCurrentHabit}
          />
        ) : (
          <HabitSlot
            getHabits={props.getHabits}
            setModalVisible={props.setModalVisible}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 25,
          marginBottom: "20%",
        }}
      >
        {slots[6] !== "empty" ? (
          <HabitSquare
            habit={slots[6]}
            getHabits={props.getHabits}
            setHabitInfosVisible={props.setHabitInfosVisible}
            setCurrentHabit={props.setCurrentHabit}
          />
        ) : (
          <HabitSlot
            getHabits={props.getHabits}
            setModalVisible={props.setModalVisible}
          />
        )}
        {slots[7] !== "empty" ? (
          <HabitSquare
            habit={slots[7]}
            getHabits={props.getHabits}
            setHabitInfosVisible={props.setHabitInfosVisible}
            setCurrentHabit={props.setCurrentHabit}
          />
        ) : (
          <HabitSlot
            getHabits={props.getHabits}
            setModalVisible={props.setModalVisible}
          />
        )}
      </View>
    </View>
  );
};

export default HabitsView;
