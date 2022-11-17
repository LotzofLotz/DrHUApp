import React, { useCallback, useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import MyHeader from "../components/Global/MyHeader";
import HabitDefinitionModal from "../components/Home/HabitDefinitionModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EmptyHabitsView from "../components/Home/EmptyHabitsView";
import HabitsView from "../components/Home/HabitsView";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import HabitInfosModal2 from "../components/Home/HabitInfosModal2";

const Home = ({}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [habitInfosVisible, setHabitInfosVisible] = useState(false);
  const [habits, setHabits] = useState("");
  const [slotz, setSlotz] = useState([]);
  const [currentHabit, setCurrentHabit] = useState();
  const [energy, setEnergy] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const design = 1;

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

  // useEffect(() => {
  //   console.log(
  //     "modalvisible:",
  //     modalVisible,
  //     "modalOpen: ",
  //     modalOpen,
  //     " habitInfosVisible: ",
  //     habitInfosVisible
  //   );
  //   console.log(modalVisible || habitInfosVisible || modalOpen);
  //   console.log(
  //     "HOME STATUS COLOR: ",
  //     modalVisible || habitInfosVisible || modalOpen
  //       ? "#13222499"
  //       : "transparent"
  //   );
  // }, [modalVisible, habitInfosVisible, modalOpen]);

  const onFirstOpen = async () => {
    try {
      const energy = await AsyncStorage.getItem("Energy");
      const colors = await AsyncStorage.getItem("Colors");

      if (!energy && !colors) {
        const focusMachines = {
          Cryo: [],
          Mind: [],
          Energy: [],
          Breath: [],
        };
        const jsonMachines = JSON.stringify(focusMachines);
        await AsyncStorage.setItem("FocusMachines", jsonMachines);
        await AsyncStorage.setItem("Energy", "0"),
          await AsyncStorage.setItem(
            "Colors",
            [
              "#8C91BF",
              "#BF918C",
              // "#8CBF9B",
              // "#639C90",
              // "#A9D3EB",
              // "#AFAFAF",
              // "#EEBF91",
            ].toString()
          ),
          console.log("Energy und Colors und Maschinen upgesettet");
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
      console.log("KEYS:", keys);
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

      <MyHeader
        title="Energiesammlung"
        energy={energy}
        scrolled={scrolled}
        design={design}
      />

      <HabitDefinitionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        getHabits={getHabits}
        setModalOpen={setModalOpen}
      />

      <HabitInfosModal2
        habitInfosVisible={habitInfosVisible}
        setHabitInfosVisible={setHabitInfosVisible}
        habit={currentHabit}
        getHabits={getHabits}
        setModalOpen={setModalOpen}
      />
      <ScrollView
        onScroll={(event) => handleScroll(event.nativeEvent.contentOffset.y)}
        scrollEventThrottle={42}
      >
        {habits.length > 0 && slotz.length > 0 ? (
          <HabitsView
            setHabitInfosVisible={setHabitInfosVisible}
            setModalVisible={setModalVisible}
            getHabits={getHabits}
            slots={slotz}
            setCurrentHabit={setCurrentHabit}
            design={design}
          />
        ) : (
          <EmptyHabitsView setModalVisible={setModalVisible} />
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
