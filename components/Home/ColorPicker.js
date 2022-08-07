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
        marginTop: 40,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      {colors.map((color) => (
        <View
          key={color}
          style={{
            width: 34,
            height: 34,
            borderRadius: 17,
            backgroundColor: "white",
            borderWidth: props.chosenColor == color ? 1 : 0,
            borderColor: Colors.primaryDark,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity onPress={() => props.onColorPress(color)}>
            <View
              style={{
                height: 30,
                width: 30,
                borderRadius: 15,
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
