import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import {
  View,
  TouchableOpacity,
  StatusBar,
  TouchableWithoutFeedback,
} from "react-native";
import Colors from "../../constants/Colors";
import MyHeader from "../Global/MyHeader";
import PowerBoxSVG from "./PowerBoxSVG";
import FullBatteryBox from "./FullBatteryBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyLevelUp from "../Global/MyLevelUp";

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
  currentMachineName,
  currentColor,
  nextColor,
}) => {
  const [filled, setFilled] = useState(0);
  const [infoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    const filled = currentState.filter((x) => x == "filled").length;
    setFilled(filled);
  }, [currentState]);

  const resetState = () => {
    console.log("resetting state!!!");
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
          parsed["machine" + currentMachine].state = newArray;

          if (filled == slots - 1) {
            console.log("LAST BATTERY ADDED !!! ");
            setInfoVisible(true);
            parsed["machine" + currentMachine].level = currentLevel + 1;
            setCurrentLevel(currentLevel + 1);
            if (currentLevel == 1) {
              const newState = resetState();
              parsed["machine" + currentMachine].state = newState;
              setCurrentState(newState);
              console.log("NEW STATE:", newState);
              try {
                let colors = await AsyncStorage.getItem("Colors");
                let colorsArray = colors.split(",");
                colorsArray.push(parsed["machine" + currentMachine].color);
                await AsyncStorage.setItem("Colors", colorsArray.toString());
              } catch (e) {
                console.log(e);
              }
            }
            if (
              currentLevel == 1 &&
              parsed["machine" + (currentMachine + 1)] !== undefined
            ) {
              parsed["machine" + (currentMachine + 1)].level = 1;
            }
            // if (currentLevel == 1) {
            //   const newState = resetState();
            //   parsed["machine" + currentMachine].state = newState;
            //   setCurrentState(newState);
            //   console.log("NEW STATE:", newState);
            // }
          }
          await AsyncStorage.mergeItem("Machines", JSON.stringify(parsed));
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
        <MyLevelUp
          isVisible={infoVisible}
          setIsVisible={setInfoVisible}
          color={currentColor}
          text={
            "Gratulation, " +
            currentMachineName +
            " ist jetzt Level " +
            currentLevel
          }
          buttonName="ok cool"
          onPress={() => (setInfoVisible(false), setPowerBoxVisible(false))}
          onXPress={() => (setInfoVisible(false), setPowerBoxVisible(false))}
          icon="check"
          level={currentLevel}
          nextColor={nextColor}
        />
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
          <TouchableWithoutFeedback onPress={() => console.log("LELMAO")}>
            <FullBatteryBox
              states={currentState}
              addBattery={addBattery}
              slots={slots}
              filled={filled}
              currentLevel={currentLevel}
            />
          </TouchableWithoutFeedback>
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
