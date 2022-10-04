import React from "react";
import { View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";

const ColorPicker = (props) => {
  const colors = [
    "#8C91BF",
    "#BF918C",
    "#8CBF9B",
    "#639C90",
    "#A9D3EB",
    "#AFAFAF",
    "#EEBF91",
  ];
  return (
    <View
      style={{
        marginTop: props.modalHeight * 0.025,
        marginBottom: props.modalHeight * 0.025,
        // marginHorizontal: props.modalHeight * 0.02,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {colors.map((color) => (
        <View
          key={color}
          style={{
            width: props.modalHeight * 0.054,
            height: props.modalHeight * 0.054,
            opacity: props.unlockedColors.includes(color) ? 1 : 0.34,
            borderRadius: 420,
            backgroundColor: "white",
            borderWidth: props.chosenColor == color ? 1 : 0,
            borderColor: Colors.primaryDark,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.unlockedColors.includes(color)
                ? props.onColorPress(color)
                : console.log("not yet unlocked");
            }}
          >
            <View
              style={{
                height: props.modalHeight * 0.048,
                width: props.modalHeight * 0.048,
                borderRadius: 420,
                backgroundColor: color,
              }}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default ColorPicker;
