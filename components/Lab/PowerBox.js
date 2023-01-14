import React, { useEffect, useState } from "react";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import { View, StatusBar } from "react-native";
import Colors from "../../constants/Colors";
import MyHeader from "../Global/MyHeader";

import FullBatteryBox from "./FullBatteryBox";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyLevelUp from "../Global/MyLevelUp";

import Unlockables from "./Unlockables";
import { Icon } from "react-native-elements";

const PowerBox = ({
  powerBoxVisible,
  setPowerBoxVisible,
  energy,
  slots,
  currentState,
  currentMachine,
  setCurrentState,
  currentLevel,
  setCurrentLevel,
  currentMachineName,
  currentColor,
  nextColor,
  height,
  infoVisible,
  setInfoVisible,
  setComicModalVisible,
}) => {
  const [filled, setFilled] = useState(0);

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

  const congratulationText =
    "Gratulation, " + currentMachineName + " ist jetzt Level " + currentLevel;

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
          text={congratulationText}
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
            width: "100%",
            top: -StatusBar.currentHeight,
          }}
        >
          <MyHeader title="Labor" energy={energy} design={1} />
        </View>

        <View style={{ justifyContent: "space-around", flex: 1 }}>
          <View
            style={{
              top: StatusBar.currentHeight, //MESSY SHIT HERE
              flex: 1,
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "green",
              justifyContent: "flex-end",
              // marginBottom: "4%",
            }}
          >
            <MyText content="Batterie-Box" size={height * 0.05} />
          </View>
          <View
            style={{
              position: "absolute",
              top: "11%",
              right: "4%",
              height: height * 0.06,
              width: height * 0.06,
              borderRadius: 420,
              backgroundColor: Colors.primaryLight,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="close"
              size={height * 0.04}
              color="white"
              onPress={() => setPowerBoxVisible(false)}
            />
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 4,
            }}
          >
            <FullBatteryBox
              states={currentState}
              addBattery={addBattery}
              slots={slots}
              filled={filled}
              currentLevel={currentLevel}
              currentColor={currentColor}
            />
          </View>
          <View style={{ alignItems: "center", flex: 1 }}>
            <View style={{ width: "80%", alignItems: "center" }}>
              <Unlockables
                color={currentColor}
                level={currentLevel}
                setComicModalVisible={setComicModalVisible}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PowerBox;
