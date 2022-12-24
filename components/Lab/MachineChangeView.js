import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MyText } from "../Global/MyText";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const MachineChangeView = ({
  onBackward,
  onForward,
  currentLevel,
  currentMachineName,
  currentMachine,
  height,
}) => {
  return (
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
  );
};

export default MachineChangeView;
