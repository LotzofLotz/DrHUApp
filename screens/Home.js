import React, { useCallback, useState, useEffect } from "react";
import { View, ScrollView, StatusBar } from "react-native";
import Modal from "react-native-modal";
import MyHeader from "../components/Global/MyHeader";
import HabitSlot from "../components/Home/HabitSlot";
import HabitDefinitionModal from "../components/Home/HabitDefinitionModal";
import HabitSquare from "../components/Home/HabitSquare";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyText from "../components/Global/MyText";
import EmptyHabitsView from "../components/Home/EmptyHabitsView";
import HabitsView from "../components/Home/HabitsView";
import { useFocusEffect } from "@react-navigation/native";
import HabitInfosModal from "../components/Home/HabitInfosModal";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [habitInfosVisible, setHabitInfosVisible] = useState(false);
  const [habits, setHabits] = useState("");
  const [slotz, setSlotz] = useState([]);
  const [currentHabit, setCurrentHabit] = useState();

  useEffect(() => {
    getHabits();
    // console.log("habits", habits);
    // console.log("STATusbarheight:", StatusBar.currentHeight);
  }, []);

  // useEffect(() => {
  //   console.log("curr: ", currentHabit);
  // }, [currentHabit]);

  useFocusEffect(
    useCallback(() => {
      getHabits();
      return () => {};
    }, [])
  );

  //   useEffect(() => {
  //     console.log("sLOTZ have been updated");
  //   }, [slotz]);

  const getHabits = async () => {
    // console.log("getHabits triggered");
    let slots = [];
    try {
      const keys = await AsyncStorage.getAllKeys();
      const habitKeys = keys.filter((key) => key.startsWith("Habit_"));
      const habits = await AsyncStorage.multiGet(habitKeys);
      const result = habits.map((x) => ({
        key: x[0],
        value: JSON.parse(x[1]),
      }));

      for (let i = 0; i < 8; i++) {
        if (i < result.length) {
          slots[i] = result[i];
        } else {
          slots[i] = "empty";
        }
      }
      setSlotz(slots);
      setHabits(result);
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      {/* <StatusBar hidden={true} /> */}
      <MyHeader title="Energiesammlung" />

      <HabitDefinitionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        getHabits={getHabits}
      />

      <HabitInfosModal
        habitInfosVisible={habitInfosVisible}
        setHabitInfosVisible={setHabitInfosVisible}
        habit={currentHabit}
      />
      <ScrollView>
        {habits.length > 0 && slotz.length > 0 ? (
          <HabitsView
            setHabitInfosVisible={setHabitInfosVisible}
            setModalVisible={setModalVisible}
            getHabits={getHabits}
            slots={slotz}
            setCurrentHabit={setCurrentHabit}
          />
        ) : (
          <EmptyHabitsView setModalVisible={setModalVisible} />
        )}
      </ScrollView>
    </View>
  );
};

export default Home;