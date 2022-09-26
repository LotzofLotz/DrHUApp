import React, { useCallback, useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import MyHeader from "../components/Global/MyHeader";
import HabitDefinitionModal from "../components/Home/HabitDefinitionModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EmptyHabitsView from "../components/Home/EmptyHabitsView";
import HabitsView from "../components/Home/HabitsView";
import { useFocusEffect } from "@react-navigation/native";
import HabitInfosModal from "../components/Home/HabitInfosModal";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [habitInfosVisible, setHabitInfosVisible] = useState(false);
  const [habits, setHabits] = useState("");
  const [slotz, setSlotz] = useState([]);
  const [currentHabit, setCurrentHabit] = useState();
  const [energy, setEnergy] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // clearAllData();
    getHabits();
    onFirstOpen();
  }, []);

  const clearAllData = () => {
    AsyncStorage.getAllKeys()
      .then((keys) => AsyncStorage.multiRemove(keys))
      .then(() => alert("success"));
  };

  useFocusEffect(
    useCallback(() => {
      getHabits();
      return () => {};
    }, [])
  );

  const onFirstOpen = async () => {
    try {
      const energy = await AsyncStorage.getItem("Energy");
      const colors = await AsyncStorage.getItem("Colors");

      if (!energy && !colors) {
        await AsyncStorage.setItem("Energy", "0"),
          await AsyncStorage.setItem(
            "Colors",
            [
              "#8C91BF",
              "#BF918C",
              "#8CBF9B",
              "#639C90",
              "#A9D3EB",
              "#AFAFAF",
              "#EEBF91",
            ].toString()
          );
        console.log("Energy und Colors upgesettet");
      } else {
        setEnergy(energy);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getHabits = async () => {
    let slots = [];
    try {
      const keys = await AsyncStorage.getAllKeys();
      // console.log("keys:", keys);
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
      const energy = await AsyncStorage.getItem("Energy");
      setEnergy(parseInt(energy));
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleScroll = (offset) => {
    // console.log("offset:", offset);
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar
        translucent={true}
        backgroundColor={
          modalVisible || habitInfosVisible || modalOpen
            ? "#13222499"
            : "transparent"
        }
      />

      <MyHeader title="Energiesammlung" energy={energy} scrolled={scrolled} />

      <HabitDefinitionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        getHabits={getHabits}
        setModalOpen={setModalOpen}
      />

      <HabitInfosModal
        habitInfosVisible={habitInfosVisible}
        setHabitInfosVisible={setHabitInfosVisible}
        habit={currentHabit}
        getHabits={getHabits}
        setModalOpen={setModalOpen}
      />
      <ScrollView
        onScroll={(event) => handleScroll(event.nativeEvent.contentOffset.y)}
      >
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
