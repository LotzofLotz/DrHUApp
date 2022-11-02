import React from "react";
import { View, TouchableOpacity } from "react-native";
import Triangle from "react-native-triangle";
import Sockel from "./Sockel";
import Colors from "../../constants/Colors";
import { MyText } from "../Global/MyText";

const SockelContent = ({
  setCompleted,
  completed,
  machine,
  setMachine,
  height,
  width,
  setFocusModalVisible,
}) => {
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        // height: height * 0.5,
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          position: "absolute",
          zIndex: 100,
          // width: "50%",
          width: 29 * (height / width) + "%",
          top: "7%",
        }}
      >
        <TouchableOpacity onPress={() => setMachine("Cryo")}>
          <View
            style={{
              backgroundColor: "#a9d3eb",
              height: height * 0.06,
              width: height * 0.06,
              borderRadius: 420,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMachine("Energy")}>
          <View
            style={{
              backgroundColor: "#eebf91",
              height: height * 0.06,
              width: height * 0.06,
              borderRadius: 420,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMachine("Breath")}>
          <View
            style={{
              backgroundColor: "#8cbf9b",
              height: height * 0.06,
              width: height * 0.06,
              borderRadius: 420,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMachine("Mind")}>
          <View
            style={{
              backgroundColor: "#8c91bf",
              height: height * 0.06,
              width: height * 0.06,
              borderRadius: 420,
            }}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={{
          width: 31 * (height / width) + "%",
          height: "14%",
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor:
            machine == "Cryo"
              ? "#a9d3eb"
              : machine == "Energy"
              ? "#eebf91"
              : machine == "Breath"
              ? "#8cbf9b"
              : "#8c91bf",
          position: "absolute",
          top: (height / width) * 52,
          zIndex: 420,
        }}
        onPress={() => setFocusModalVisible(true)}
      >
        <Triangle
          width={height * 0.02}
          height={height * 0.035}
          color={
            machine == "Cryo"
              ? "#a9d3eb"
              : machine == "Energy"
              ? "#eebf91"
              : machine == "Breath"
              ? "#8cbf9b"
              : "#8c91bf"
          }
          direction="up"
          style={{
            position: "absolute",
            bottom: "99%",
            left:
              machine == "Cryo"
                ? "10%"
                : machine == "Energy"
                ? "35%"
                : machine == "Breath"
                ? "60%"
                : "85%",
          }}
        />
        <View>
          <MyText
            content={
              machine == "Cryo"
                ? "Körperfokus"
                : machine == "Energy"
                ? "Energiefokus"
                : machine == "Breath"
                ? "Atemfokus"
                : "Seelenfokus"
            }
            color={Colors.primaryDark}
            center
            size={height * 0.02}
            semiBold
          />
        </View>
      </TouchableOpacity>
      <Sockel ratio={height / width} />
    </View>
  );
};

export default SockelContent;
