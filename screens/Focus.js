import React, { useEffect, useState, useCallback } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import MyHeader from "../components/Global/MyHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Cryo from "../components/Focus/Cryo";
import Energy from "../components/Focus/Energy";
import Breath from "../components/Focus/Breath";
import Mind from "../components/Focus/Mind";
import SockelContent from "../components/Focus/SockelContent";
import FocusModal from "../components/Focus/FocusModal";
import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/native";

const Focus = ({}) => {
  const [energy, setEnergy] = useState(0);

  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const ratio = height / width;
  const focused = useIsFocused();
  const design = 1;

  const [machine, setMachine] = useState("Cryo");
  const [completed, setCompleted] = useState(false);
  const [cryoComplete, setCryoComplete] = useState(false);
  const [focusComplete, setFocusComplete] = useState(false);
  const [breathComplete, setBreathComplete] = useState(false);
  const [mindComplete, setMindComplete] = useState(false);
  const [focusModalVisible, setFocusModalVisible] = useState(false);
  const [darkModalVisible, setDarkModalVisible] = useState(false);

  useEffect(() => {
    getEnergy();
  }, []);

  // useEffect(() => {
  //   console.log("fokus visible?: ", focusModalVisible);
  //   console.log("darkmode: ", darkModalVisible);
  //   console.log(
  //     "focus - Status- Color: ",
  //     focusModalVisible && darkModalVisible
  //       ? "#132224"
  //       : focusModalVisible
  //       ? "#13222499"
  //       : "transparent"
  //   );
  // }, [focusModalVisible, darkModalVisible]);

  const getEnergy = async () => {
    try {
      const energy = await AsyncStorage.getItem("Energy");
      setEnergy(energy);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar
        translucent={true}
        backgroundColor={
          focusModalVisible && darkModalVisible && focused
            ? "#132224"
            : focusModalVisible && focused
            ? "#13222499"
            : "transparent"
        }
      />
      <MyHeader title="Fokus" energy={energy} design={design} />

      <View // machines-View
        style={{
          flex: 1.3,
          alignItems: "center",
          justifyContent: "flex-end",
          width: "100%",
        }}
      >
        {machine == "Cryo" ? (
          <Cryo completed={cryoComplete} ratio={ratio} />
        ) : machine == "Energy" ? (
          <Energy completed={focusComplete} ratio={ratio} />
        ) : machine == "Breath" ? (
          <Breath completed={breathComplete} ratio={ratio} />
        ) : (
          <Mind completed={mindComplete} ratio={ratio} />
        )}
      </View>
      <SockelContent
        setCompleted={setCompleted}
        completed={completed}
        machine={machine}
        setMachine={setMachine}
        height={height}
        width={width}
        focusModalVisible={focusModalVisible}
        setFocusModalVisible={setFocusModalVisible}
      />
      <FocusModal
        energy={energy}
        setDarkModalVisible={setDarkModalVisible}
        focusModalVisible={focusModalVisible}
        setFocusModalVisible={setFocusModalVisible}
        machine={machine}
        setCryoComplete={setCryoComplete}
        setBreathComplete={setBreathComplete}
        setMindComplete={setMindComplete}
        setFocusComplete={setFocusComplete}
        ratio={ratio}
        getEnergy={getEnergy}
      />
    </View>
  );
};

export default Focus;
