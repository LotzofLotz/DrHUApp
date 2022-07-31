import React, { useCallback, useState, useEffect } from "react";
import { View, ScrollView, Modal, Dimensions } from "react-native";
import MyHeader from "../components/Global/MyHeader";
import HabitSlot from "../components/Home/HabitSlot";
import HabitDefinitionModal from "../components/Home/HabitDefinitionModal";
import HabitSquare from "../components/Home/HabitSquare";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyText from "../components/Global/MyText";
import EmptyHabitsView from "../components/Home/EmptyHabitsView";
import HabitsView from "../components/Home/HabitsView";
import { useFocusEffect } from "@react-navigation/native";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [habits, setHabits] = useState("");
  const [slotz, setSlotz] = useState([]);

  useEffect(() => {
    getHabits();
  }, []);

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
    console.log("getHabits triggered");
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
      <Modal animationType="slide" transparent={true} visible={modalVisible} />

      <MyHeader title="Energiesammlung" />

      <HabitDefinitionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        getHabits={getHabits}
      />
      <ScrollView>
        {habits.length > 0 && slotz.length > 0 ? (
          <HabitsView
            setModalVisible={setModalVisible}
            getHabits={getHabits}
            slots={slotz}
          />
        ) : (
          <EmptyHabitsView setModalVisible={setModalVisible} />
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
