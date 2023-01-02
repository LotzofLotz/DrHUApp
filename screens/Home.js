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
import MyStatusBar from "../components/Global/MyStatusBar";

const Home = ({}) => {
  const [definitionModalVisible, setDefinitionModalVisible] = useState(false);
  const [habitInfosVisible, setHabitInfosVisible] = useState(false);
  const [habits, setHabits] = useState("");
  const [slotz, setSlotz] = useState([]);
  const [currentHabit, setCurrentHabit] = useState();
  const [energy, setEnergy] = useState(0);
  const [recommendationModalOpen, setRecommendationModalOpen] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
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
        const machines = {
          machine1: {
            name: "Schlaf-o-mat",
            level: 1,
            slots: 2,
            color: "#8C91BF",
            state: [],
          },
          machine2: {
            name: "Autochef 6000",
            level: 0,
            slots: 4,
            color: "#8CBF9B",
            state: [],
          },
          machine3: {
            name: "Awesome-O",
            level: 0,
            slots: 14,
            color: "#EEBF91",
            state: [],
          },
        };

        const focusMachines = {
          Cryo: [],
          Mind: [],
          Energy: [],
          Breath: [],
        };
        const jsonMachines = JSON.stringify(machines);
        const jsonFocusMachines = JSON.stringify(focusMachines);
        await AsyncStorage.setItem("Machines", jsonMachines);
        await AsyncStorage.setItem("FocusMachines", jsonFocusMachines);
        await AsyncStorage.setItem("Energy", "0"),
          await AsyncStorage.setItem(
            "Colors",
            [
              // "#8C91BF",
              "#BF918C",
              // "#8CBF9B",
              // "#639C90",
              // "#A9D3EB",
              // "#AFAFAF",
              // "#EEBF91",
            ].toString()
          ),
          console.log("Energy und Colors und Maschinen upgesettet");
        // setEnergy(energy);
      }
      // else {
      //   setEnergy(energy);
      // }
    } catch (e) {
      console.log(e);
    }
  };

  const getHabits = async () => {
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
      const energy = await AsyncStorage.getItem("Energy");
      if (energy != null) {
        setEnergy(parseInt(energy));
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleScroll = (offset) => {
    if (offset > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <MyStatusBar
        translucent={true}
        // barStyle={"dark-content"}
        backgroundColor={
          definitionModalVisible ||
          habitInfosVisible ||
          recommendationModalOpen ||
          editModalVisible
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
        modalVisible={definitionModalVisible}
        setModalVisible={setDefinitionModalVisible}
        getHabits={getHabits}
        setModalOpen={setRecommendationModalOpen}
      />

      <HabitInfosModal2
        habitInfosVisible={habitInfosVisible}
        setHabitInfosVisible={setHabitInfosVisible}
        habit={currentHabit}
        getHabits={getHabits}
        setEditModalVisible={setEditModalVisible}
        editModalVisible={editModalVisible}
        // setModalOpen={setRecommendationModalOpen}
      />
      <ScrollView
        onScroll={(event) => handleScroll(event.nativeEvent.contentOffset.y)}
        scrollEventThrottle={42}
      >
        {habits.length > 0 && slotz.length > 0 ? (
          <HabitsView
            setHabitInfosVisible={setHabitInfosVisible}
            setModalVisible={setDefinitionModalVisible}
            getHabits={getHabits}
            slots={slotz}
            setCurrentHabit={setCurrentHabit}
            design={design}
          />
        ) : (
          <EmptyHabitsView setModalVisible={setDefinitionModalVisible} />
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
