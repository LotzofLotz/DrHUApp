import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../../constants/colors";

const IconPicker = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: 14,
        justifyContent: "space-evenly",
      }}
    >
      {props.icons.map((icon) => {
        return (
          <Icon
            key={icon}
            onPress={() => {
              props.onIconPress(icon);
            }}
            color={
              props.chosenIconName == icon
                ? Colors.primaryDark
                : Colors.primaryLight
            }
            name={icon}
            size={35}
          />
        );
      })}
    </View>
  );
};

export default IconPicker;
