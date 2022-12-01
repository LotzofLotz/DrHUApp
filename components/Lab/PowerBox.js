import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import {
  View,
  TouchableOpacity,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import Colors from "../../constants/Colors";
import MyHeader from "../Global/MyHeader";
import PowerBoxSVG from "./PowerBoxSVG";
import FullBatteryBox from "./FullBatteryBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableWithoutFeedback } from "react-native-web";

const PowerBox = ({
  powerBoxVisible,
  setPowerBoxVisible,
  energy,
  setEnergy,
  slots,
  currentState,
  currentMachine,
  setCurrentState,
  currentLevel,
  setCurrentLevel,
}) => {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    // console.log("STATES IN POWERBOX", currentState);
    const filled = currentState.filter((x) => x == "filled").length;
    setFilled(filled);
  }, [currentState]);

  useEffect(() => {
    console.log("CURRRENTELVEL:", currentLevel);
  }, [currentLevel]);

  useEffect(() => {
    console.log("filled:", filled);
    console.log("slots:", slots);
  }, [filled]);

  // const fillStates = (slots, states) => {
  //   let i = 0;
  //   let newArray = [...states];
  //   while (i < 8) {
  //     if (i < slots) {
  //       newArray[i] = "init";
  //     } else {
  //     }
  //     setStates(newArray);
  //     i++;
  //   }
  // };

  // const fillStates = (slots, states) => {
  //   console.log("FILLSTATE STATE: ", currentState);
  //   let i = 0;
  //   let newArray = [...states];
  //   while (i < 8) {
  //     // 8 slots in inner circle
  //     if (i < slots) {
  //       newArray[i] = "init";
  //     } else {
  //       newArray[i] = "empty";
  //     }
  //     setStates(newArray);
  //     i++;
  //   }
  // };

  const resetState = () => {
    console.log("reset state triggered");
    let i = 0;
    let newArray = [];
    while (i < 20) {
      if (i < slots) {
        newArray.push("init");
      } else {
        newArray.push("empty");
      }
      i++;
    }

    console.log("RESET STATE ARRAY : ", newArray);
    return newArray;
  };

  const addBattery = async () => {
    console.log("adding battery");
    if (energy > 0) {
      let newArray = [...currentState];
      let fillable = currentState.indexOf("init");
      newArray[fillable] = "filled";
      if (fillable >= 0) {
        setCurrentState(newArray);
        try {
          const machines = await AsyncStorage.getItem("Machines");
          const parsed = JSON.parse(machines);
          console.log("PARSED:", parsed);
          parsed["machine" + currentMachine].state = newArray;

          if (filled == slots - 1) {
            console.log("LAST BATTERY ADDED !!! ");
            parsed["machine" + currentMachine].level = currentLevel + 1;
            setCurrentLevel(currentLevel + 1);
            if (currentLevel == 1) {
              parsed["machine" + (currentMachine + 1)].level = 1;
            }
            if (currentLevel != 2) {
              const newState = resetState();
              parsed["machine" + currentMachine].state = newState;
              setTimeout(function () {
                setCurrentState(newState);
              }, 5000);
            }
            // console.log("newSTATE::::", resetState());
          }
          // console.log("NEW PARSED MACHINE:", parsed);
          await AsyncStorage.mergeItem("Machines", JSON.stringify(parsed));
          // console.log("machines in storage updated!!!!!");
        } catch (e) {
          console.log(e);
        }
      }
    } else {
      console.log("SAMMEL MEHR BATTERIEN");
    }
  };

  return (
    <View>
      <Modal
        visible={powerBoxVisible}
        style={{ margin: 0, backgroundColor: "white" }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            // height: "20%",
            width: "100%",
            backgroundColor: "green",
            top: -StatusBar.currentHeight,
          }}
        >
          {/* <View
          style={{ justifyContent: "flex-start", backgroundColor: "green" }}
        > */}
          <MyHeader title="Labor" energy={energy} design={1} />
          {/* <MyText content="lol" /> */}
        </View>

        <MyText content="Stromkasten" size={40} center />
        <MyText content="Level" center />
        <MyText content={currentLevel} center />
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          {/* <PowerBoxSVG
            states={currentState}
            addBattery={addBattery}
            slots={slots}
            filled={filled}
          /> */}
          <FullBatteryBox
            states={currentState}
            addBattery={addBattery}
            slots={slots}
            filled={filled}
            currentLevel={currentLevel}
          />
          {/* <TouchableWithoutFeedback
            style={{ height: "50%", width: "50%", position: "absolute" }}
            onPress={() => console.log("BIG PRESS")}
          >
            <View />
          </TouchableWithoutFeedback> */}
        </View>

        <TouchableOpacity
          onPress={() => setPowerBoxVisible(false)}
          style={{ backgroundColor: Colors.primaryDark }}
        >
          <MyText content="BACK" color="white" center />
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default PowerBox;
