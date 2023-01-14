import React, { useEffect, useCallback, useState } from "react";
import { View } from "react-native";
import MyStatusBar from "../components/Global/MyStatusBar";
import MyHeader from "../components/Global/MyHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MyText } from "../components/Global/MyText";
import { useFocusEffect } from "@react-navigation/native";

const Profile = () => {
  const [totalBatteries, setTotalBatteries] = useState();

  useFocusEffect(
    useCallback(() => {
      getAllBatteries();

      return () => {};
    }, [])
  );

  const getAllBatteries = async () => {
    let counter = 0;
    try {
      const keys = await AsyncStorage.getAllKeys();
      const focusMachines = await AsyncStorage.getItem("FocusMachines");
      const parsedFocus = JSON.parse(focusMachines);
      console.log("focus", parsedFocus);

      for (const [key, value] of Object.entries(parsedFocus)) {
        counter += value.length;
      }

      const habitKeys = keys.filter((key) => key.startsWith("Habit_"));
      const habits = await AsyncStorage.multiGet(habitKeys);
      const result = habits.map((x) => ({
        key: x[0],
        value: JSON.parse(x[1]),
      }));
      console.log("reuslt: ", result);
      for (const habit of result) {
        counter += habit.value["PerfectWeeks"].length;
      }
    } catch (e) {
      console.log("error", e);
    }
    console.log("COUNTER:", counter);
    setTotalBatteries(counter);
  };

  return (
    <View>
      <MyStatusBar translucent={true} backgroundColor={"transparent"} />
      <MyHeader title="Profile" />
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <MyText content="TOTAL BATTERIEN:" />
        <MyText content={totalBatteries} />
      </View>
    </View>
  );
};

export default Profile;
