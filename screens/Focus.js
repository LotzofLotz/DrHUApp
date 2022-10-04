import React, { useEffect, useState } from "react";
import { View } from "react-native";
import MyHeader from "../components/Global/MyHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Focus = () => {
  const [energy, setEnergy] = useState(0);

  useEffect(() => {
    getEnergy();
  }, []);

  const getEnergy = async () => {
    try {
      const energy = await AsyncStorage.getItem("Energy");
      setEnergy(energy);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <MyHeader title="Fokus" energy={energy} />
    </View>
  );
};

export default Focus;
