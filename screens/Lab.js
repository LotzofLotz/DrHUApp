import React, { useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import MyHeader from "../components/Global/MyHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PowerBox from "../components/Lab/PowerBox";
import Colors from "../constants/Colors";
import { MyText } from "../components/Global/MyText";
import { useFocusEffect } from "@react-navigation/native";
import SleepMachine from "../components/Lab/SleepMachine";
import CookingMachine from "../components/Lab/CookingMachine";
import RunningMachine from "../components/Lab/RunningMaching";
import Cables from "../components/Lab/Cables";
import MyStatusBar from "../components/Global/MyStatusBar";
import Unlockables from "../components/Lab/Unlockables";
import ComicsModal from "../components/Lab/ComicsModal";
import ComicReader from "../components/Lab/ComicReader";
import MachineChangeView from "../components/Lab/MachineChangeView";
import BatteryBoxButton from "../components/Lab/BatteryBoxButton";

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
  const [colors, setColors] = useState([]);

  const [comicModalVisible, setComicModalVisible] = useState(false);
  const [readerVisible, setReaderVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    getEnergy();
    getMachines();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getEnergy();
      getMachines();
      return;
    }, [])
  );

  useEffect(() => {
    getMachines();
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
    console.log("getting machines");
    try {
      let levels = [];
      let names = [];
      let slots = [];
      let states = [];
      let colors = [];
      const machines = await AsyncStorage.getItem("Machines"); // dauert lange !!!
      const parsedMachines = JSON.parse(machines);
      console.log("parsed Machines :::", parsedMachines);
      for (let key in parsedMachines) {
        levels.push(parsedMachines[key].level);
        names.push(parsedMachines[key].name);
        slots.push(parsedMachines[key].slots);
        colors.push(parsedMachines[key].color);

        parsedMachines[key].state.length == 0
          ? states.push(fillStates(parsedMachines[key].slots))
          : states.push(parsedMachines[key].state);
      }

      setNames(names);
      setColors(colors);
      updateMachine(names, slots, levels, states, colors);
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

    return state;
  };

  const updateMachine = (names, slots, levels, states, colors) => {
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
      }}
    >
      <MyStatusBar
        translucent={true}
        backgroundColor={
          (comicModalVisible && !readerVisible) || infoVisible
            ? "#13222499"
            : readerVisible && comicModalVisible
            ? Colors.primaryDark
            : "transparent"
        }
      />

      <MyHeader title="Labor" energy={energy} design={1} />

      <ComicsModal
        height={height}
        setComicModalVisible={setComicModalVisible}
        comicModalVisible={comicModalVisible}
        colors={colors}
        setReaderVisible={setReaderVisible}
      />
      <ComicReader
        isVisible={readerVisible}
        setReaderVisible={setReaderVisible}
      />
      {names.length > 0 ? ( // not ideal, but works
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
          {currentState?.length > 0 ? (
            <PowerBox
              powerBoxVisible={powerBoxVisible}
              setPowerBoxVisible={setPowerBoxVisible}
              energy={energy}
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
              height={height}
              infoVisible={infoVisible}
              setInfoVisible={setInfoVisible}
              setComicModalVisible={setComicModalVisible}
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
            <BatteryBoxButton
              currentLevel={currentLevel}
              setPowerBoxVisible={setPowerBoxVisible}
              height={height}
            />

            <MachineChangeView
              onBackward={onBackward}
              onForward={onForward}
              currentLevel={currentLevel}
              currentMachineName={currentMachineName}
              currentMachine={currentMachine}
              height={height}
            />

            <View style={{ width: "80%", alignItems: "center" }}>
              <Unlockables
                color={currentColor}
                level={currentLevel}
                setComicModalVisible={setComicModalVisible}
              />
            </View>
          </View>
        </View>
      ) : (
        <View>
          {/* hier kleine loading animation mit drehender Battery bauen */}
          <MyText content="loading" />
        </View>
      )}
    </View>
  );
};

export default Lab;
