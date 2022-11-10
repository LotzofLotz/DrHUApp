import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import { Icon } from "react-native-elements";

const FocusModalHeader = ({
  machine,
  height,
  setFocusModalVisible,
  setChosenAudio,
}) => {
  return (
    <View style={{ height: "14%", justifyContent: "space-between" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
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
          size={height * 0.04}
          semiBold
        />
        <TouchableOpacity
          onPress={() => {
            setFocusModalVisible(false);
            setChosenAudio("");
          }}
        >
          <Icon name="close" color={Colors.primaryDark} />
        </TouchableOpacity>
      </View>
      <View>
        <MyText
          content={
            machine == "Cryo"
              ? "Muskelrelaxation"
              : machine == "Energy"
              ? "Ablenkungsfreier Bereich"
              : machine == "Breath"
              ? "Atemübungen"
              : "Achtsamkeitsübungen"
          }
          size={height * 0.02}
          color={Colors.primaryLight}
        />
      </View>
      <View
        style={{
          width: "100%",
          borderBottomColor: Colors.primaryLight,
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

export default FocusModalHeader;
