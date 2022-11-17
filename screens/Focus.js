import React, { useEffect, useState } from "react";
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
import getWeek from "date-fns/getWeek";

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
  const [cryoCount, setCryoCount] = useState(0);
  const [energyComplete, setEnergyComplete] = useState(false);
  const [energyCount, setEnergyCount] = useState(0);
  const [breathComplete, setBreathComplete] = useState(false);
  const [breathCount, setBreathCount] = useState(0);
  const [mindComplete, setMindComplete] = useState(false);
  const [mindCount, setMindCount] = useState(0);
  const [focusModalVisible, setFocusModalVisible] = useState(false);
  const [darkModalVisible, setDarkModalVisible] = useState(false);

  useEffect(() => {
    setMachineCounts();
    getEnergy();
  }, []);

  useEffect(() => {
    setMachineCounts();
  }, [machine]);

  const setMachineCounts = async () => {
    try {
      const machineSessions = await AsyncStorage.getItem("FocusMachines");
      const jsonMachines = JSON.parse(machineSessions);
      let lastTwo = jsonMachines[machine].slice(-2);
      let count = 0;
      for (const x in lastTwo) {
        if (getWeek(new Date(), { weekStartsOn: 1 }) == parseInt(lastTwo[x])) {
          count += 1;
        }
        if (machine == "Cryo") {
          setCryoCount(count);
          if (count >= 2) {
            setCryoComplete(true);
          }
        }
        if (machine == "Breath") {
          setBreathCount(count);
          if (count >= 2) {
            setBreathComplete(true);
          }
        }
        if (machine == "Energy") {
          setEnergyCount(count);
          if (count >= 2) {
            setEnergyComplete(true);
          }
        }
        if (machine == "Mind") {
          setMindCount(count);
          if (count >= 2) {
            setMindComplete(true);
          }
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

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
      setEnergy(parseInt(energy));
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
          <Energy completed={energyComplete} ratio={ratio} />
        ) : machine == "Breath" ? (
          <Breath completed={breathComplete} ratio={ratio} />
        ) : (
          <Mind completed={mindComplete} ratio={ratio} />
        )}
      </View>
      <SockelContent
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
        ratio={ratio}
        getEnergy={getEnergy}
        cryoCount={cryoCount}
        mindCount={mindCount}
        breathCount={breathCount}
        energyCount={energyCount}
        setMachineCounts={setMachineCounts}
      />
    </View>
  );
};

export default Focus;
