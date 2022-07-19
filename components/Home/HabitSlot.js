import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../constants/colors";

const HabitSlot = (props) => {
  const width = Dimensions.get("window").width;

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 0.4 * width,
        width: 0.4 * width,
        borderRadius: 35,
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: "lightgrey",
      }}
    >
      <TouchableOpacity
        onPress={() => props.setModalVisible(!props.modalVisible)}
      >
        <FontAwesome5 name="plus" size={50} color={Colors.primaryDark} />
      </TouchableOpacity>
    </View>
  );
};

export default HabitSlot;
