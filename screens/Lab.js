import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import MyHeader from "../components/Global/MyHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PowerBox from "../components/Lab/PowerBox";
import Colors from "../constants/Colors";
import { MyText } from "../components/Global/MyText";
import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import SleepMachine from "../components/Lab/SleepMachine";
import CookingMachine from "../components/Lab/CookingMachine";
import RunningMachine from "../components/Lab/RunningMaching";
import Cables from "../components/Lab/Cables";

const Lab = () => {
  const [energy, setEnergy] = useState(0);
  const [powerBoxVisible, setPowerBoxVisible] = useState(false);
  const [machines, setMachines] = useState();
  const [currentMachine, setCurrentMachine] = useState(1);
  const [currentMachineName, setCurrentMachineName] = useState();
  const [currentLevel, setCurrentLevel] = useState();
  const [currentState, setCurrentState] = useState([""]);
  const [currentSlots, setCurrentSlots] = useState(2);

  useEffect(() => {
    getEnergy();
    getMachines();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getEnergy();
      return;
    }, [])
  );

  useEffect(() => {
    // getMachines();
    updateMachine();
  }, [currentMachine]);

  const getEnergy = async () => {
    try {
      const energy = await AsyncStorage.getItem("Energy");
      setEnergy(parseInt(energy));
    } catch (e) {
      console.log(e);
    }
  };

  const getMachines = async () => {
    try {
      const machines = await AsyncStorage.getItem("Machines");
      setMachines(JSON.parse(machines));
    } catch (e) {
      console.log(e);
    }
  };

  const fillStates = (slots) => {
    let i = 0;
    let state = [];
    while (i < 20) {
      if (i < slots) {
        state.push("init");
      } else {
        state.push("empty");
      }
      i++;
    }
    console.log("NEW STATE:", state);
    setCurrentState(state);
  };

  const updateMachine = async () => {
    let machine = "machine" + currentMachine;

    try {
      const stringMachines = await AsyncStorage.getItem("Machines");
      const machines = JSON.parse(stringMachines);
      setCurrentMachineName(machines[machine].name);

      setCurrentSlots(machines[machine]?.slots);
      setCurrentLevel(machines[machine]?.level);

      {
        machines[machine]?.state.length > 0
          ? setCurrentState(machines[machine]?.state)
          : fillStates(machines[machine]?.slots);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onForward = () => {
    setCurrentMachine(currentMachine + 1);
  };

  const onBackward = () => {
    setCurrentMachine(currentMachine - 1);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <MyHeader title="Labor" energy={energy} design={1} />

      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          height: "45%",
        }}
      >
        {currentMachine == 1 ? (
          <SleepMachine level={currentLevel} />
        ) : currentMachine == 2 ? (
          <CookingMachine level={currentLevel} />
        ) : currentMachine == 3 ? (
          <RunningMachine level={currentLevel} />
        ) : (
          <View />
        )}
        <View style={{ bottom: 25, zIndex: -1 }}>
          <Cables level={currentLevel} />
        </View>
      </View>
      {currentState.length > 0 ? (
        <PowerBox
          powerBoxVisible={powerBoxVisible}
          setPowerBoxVisible={setPowerBoxVisible}
          energy={energy}
          setEnergy={setEnergy}
          slots={currentSlots}
          currentState={currentState}
          setCurrentState={setCurrentState}
          currentMachine={currentMachine}
          machines={machines}
          setMachines={setMachines}
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
        />
      ) : (
        <View />
      )}

      <View
        style={{ justifyContent: "center", alignItems: "center", bottom: 52 }}
      >
        <TouchableOpacity
          onPress={() => setPowerBoxVisible(true)}
          style={{
            height: 120,
            width: 120,
            borderRadius: 420,
            backgroundColor:
              currentLevel == 0 ? "#D1DFE1" : Colors.primaryLight,
            justifyContent: "center",
            borderWidth: 10,
            borderColor: currentLevel == 0 ? "#D1DFE1" : Colors.primaryDark,
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/Batterieicon_Currency.png")}
            style={{
              width: "66%",
              height: "66%",
              resizeMode: "contain",
            }}
          />
          <View
            style={{
              position: "absolute",
              width: "30%",
              height: "30%",
              borderRadius: 420,
              backgroundColor: currentLevel == 0 ? "#D1DFE1" : Colors.yellow,
              top: "90%",
              alignItems: "center",
            }}
          >
            <MyText
              color={currentLevel == 0 ? "#D1DFE1" : Colors.primaryDark}
              content={currentLevel}
              center
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: "70%",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <FontAwesome
            name={"caret-left"}
            size={40}
            color={currentMachine > 1 ? Colors.primaryDark : "grey"}
            onPress={() => {
              currentMachine > 1 ? onBackward() : console.log("lel");
            }}
          />

          <MyText
            content={currentLevel == 0 ? "???" : currentMachineName}
            size={30}
          />

          <FontAwesome
            name={"caret-right"}
            size={40}
            color={currentMachine < 3 ? Colors.primaryDark : "grey"}
            onPress={() => {
              currentMachine < 3 ? onForward() : console.log("lul");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Lab;
