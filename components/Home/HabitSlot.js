import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const HabitSlot = (props) => {
  const width = Dimensions.get("window").width;

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 0.44 * width,
        width: 0.44 * width,
        borderRadius: 30,
        borderWidth: 2,
        borderStyle: "dashed",
        borderColor: "lightgrey",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          props.setModalVisible(true);
        }}
      >
        <FontAwesome5 name="plus" size={50} color={Colors.primaryDark} />
      </TouchableOpacity>
    </View>
  );
};

export default HabitSlot;
