import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const HabitSlot = (props) => {
  const width = Dimensions.get("window").width;

  return (
    <TouchableOpacity
      onPress={() => {
        props.setModalVisible(true);
      }}
    >
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
        <FontAwesome5 name="plus" size={50} color={Colors.primaryDark} />
      </View>
    </TouchableOpacity>
  );
};

export default HabitSlot;
