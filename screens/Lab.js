import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
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

import Unlockables from "../components/Lab/Unlockables";
import { parse } from "date-fns";

const Lab = () => {
  const [energy, setEnergy] = useState(0);
  const [powerBoxVisible, setPowerBoxVisible] = useState(false);
  const [machines, setMachines] = useState();
  const [currentMachine, setCurrentMachine] = useState(1);
  const [currentMachineName, setCurrentMachineName] = useState("Schlaf-O-Mat");
  const [currentLevel, setCurrentLevel] = useState();
  const [currentState, setCurrentState] = useState([""]);
  const [currentSlots, setCurrentSlots] = useState(2);
  const [currentColor, setCurrentColor] = useState();
  const [nextColor, setNextColor] = useState();
  const height = Dimensions.get("window").height;

  const [names, setNames] = useState([]);
  const [levels, setLevels] = useState([]);
  const [slots, setSlots] = useState([]);
  const [states, setStates] = useState([]);
  const [colors, setColors] = useState([]);

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
    getMachines();
    // updateMachine();
    // updateMachine2(); // etwas schneller, switch immer noch sichtbar tho
  }, [currentMachine]);

  useEffect(() => {
    console.log("current name:", currentMachineName);
    console.log("current slot:", currentSlots);
    console.log("current level:", currentLevel);
  }, [currentMachineName]);

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
      let levels = [];
      let names = [];
      let slots = [];
      let states = [];
      let colors = [];
      const machines = await AsyncStorage.getItem("Machines"); // dauert lange !!!
      const parsedMachines = JSON.parse(machines);
      console.log("PARSED MACHINES:", parsedMachines);
      for (let key in parsedMachines) {
        levels.push(parsedMachines[key].level);
        names.push(parsedMachines[key].name);
        slots.push(parsedMachines[key].slots);
        colors.push(parsedMachines[key].color);
        console.log("::::", parsedMachines[key].state);
        parsedMachines[key].state.length == 0
          ? states.push(fillStates(parsedMachines[key].slots))
          : states.push(parsedMachines[key].state);
      }
      // console.log(
      //   "levels:",
      //   levels,
      //   "names:",
      //   names,
      //   "slots:",
      //   slots,
      //   "states::::",
      //   states,
      //   "colors",
      //   colors
      // );
      // setMachines(JSON.parse(machines));
      setSlots(slots);
      setNames(names);
      setLevels(levels);
      setStates(states);
      setColors(colors);
      updateMachine2(names, slots, levels, states, colors);
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
    // setCurrentState(state);
    return state;
  };

  // const updateMachine = async () => {
  //   let machine = "machine" + currentMachine;

  //   try {
  //     const stringMachines = await AsyncStorage.getItem("Machines");
  //     const machines = JSON.parse(stringMachines);
  //     setCurrentMachineName(machines[machine].name);
  //     setCurrentSlots(machines[machine]?.slots);
  //     setCurrentLevel(machines[machine]?.level); // hier liegt problem, getItem dauert zu lange
  //     // alternativ: alle names, slots und level anfangs rausziehen
  //     // und in Array speichern, dann über position anwählen

  //     {
  //       machines[machine]?.state.length > 0
  //         ? setCurrentState(machines[machine]?.state)
  //         : fillStates(machines[machine]?.slots);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const updateMachine2 = (names, slots, levels, states, colors) => {
    setCurrentMachineName(names[currentMachine - 1]);
    setCurrentSlots(slots[currentMachine - 1]);
    setCurrentLevel(levels[currentMachine - 1]);
    setCurrentState(states[currentMachine - 1]);
    setCurrentColor(colors[currentMachine - 1]);
    setNextColor(colors[currentMachine]);
  };

  const onForward = () => {
    setCurrentMachine(currentMachine + 1);
  };

  const onBackward = () => {
    setCurrentMachine(currentMachine - 1);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        // justifyContent: "space-evenly",
      }}
    >
      <MyHeader title="Labor" energy={energy} design={1} />

      {names.length > 0 ? (
        <View>
          <View
            style={{
              justifyContent: "flex-end",
              alignItems: "center",
              height: "50%",
            }}
          >
            {currentMachineName == "Schlaf-o-mat" ? (
              <SleepMachine level={currentLevel} height={height} />
            ) : currentMachineName == "Autochef 6000" ? (
              <CookingMachine level={currentLevel} height={height} />
            ) : currentMachineName == "Awesome-O" ? (
              <RunningMachine level={currentLevel} height={height} />
            ) : (
              <View />
            )}
            <View style={{ bottom: 25, zIndex: -1 }}>
              <Cables level={currentLevel} height={height} />
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
              currentMachineName={currentMachineName}
              currentColor={currentColor}
              nextColor={nextColor}
            />
          ) : (
            <View />
          )}

          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              bottom: 53, // klappt gut, aber nicht responsive
            }}
          >
            <TouchableOpacity
              activeOpacity={0.6} // Opacity nicer, aber Cabel buggy
              onPress={() =>
                currentLevel != 0
                  ? setPowerBoxVisible(true)
                  : console.log("level up last machine first")
              }
            >
              <View
                style={{
                  height: height * 0.15,
                  width: height * 0.15,
                  borderRadius: 420,
                  backgroundColor:
                    currentLevel == 0 ? "#D1DFE1" : Colors.primaryLight,
                  justifyContent: "center",
                  borderWidth: 10,
                  borderColor:
                    currentLevel == 0 ? "#D1DFE1" : Colors.primaryDark,
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
                    borderRadius: 69,
                    backgroundColor:
                      currentLevel == 0 ? "#D1DFE1" : Colors.yellow,
                    top: "90%",
                    alignItems: "center",
                  }}
                >
                  {/* <View style={{ bottom: 3}}>  irgendwie auf small screen nicht centered*/}
                  <MyText
                    color={currentLevel == 0 ? "#D1DFE1" : Colors.primaryDark}
                    content={currentLevel}
                    // center
                  />
                  {/* </View> */}
                </View>
              </View>
            </TouchableOpacity>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 70,
                  height: 70,

                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  currentMachine > 1 ? onBackward() : console.log("lel");
                }}
              >
                <FontAwesome
                  name={"caret-left"}
                  size={height / 15}
                  color={currentMachine > 1 ? Colors.primaryDark : "grey"}
                />
              </TouchableOpacity>

              <MyText
                content={currentLevel == 0 ? "???" : currentMachineName}
                size={height / 24}
              />
              <TouchableOpacity
                style={{
                  width: height / 12,
                  height: height / 12,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  currentMachine < 3 ? onForward() : console.log("lul");
                }}
              >
                <FontAwesome
                  name={"caret-right"}
                  size={height / 15}
                  color={currentMachine < 3 ? Colors.primaryDark : "grey"}
                />
              </TouchableOpacity>
            </View>
            <View style={{ width: "80%", alignItems: "center" }}>
              <Unlockables color={currentColor} level={currentLevel} />
            </View>
          </View>
        </View>
      ) : (
        <View>
          <MyText content="loading" />
        </View>
      )}
    </View>
  );
};

export default Lab;
