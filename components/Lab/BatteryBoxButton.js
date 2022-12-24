import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";

const BatteryBoxButton = ({ setPowerBoxVisible, height, currentLevel }) => {
  return (
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
          backgroundColor: currentLevel == 0 ? "#D1DFE1" : Colors.primaryLight,
          justifyContent: "center",
          borderWidth: 10,
          borderColor: currentLevel == 0 ? "#D1DFE1" : Colors.primaryDark,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/Batterieicon_Currency.png")}
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
            backgroundColor: currentLevel == 0 ? "#D1DFE1" : Colors.yellow,
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
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BatteryBoxButton;
