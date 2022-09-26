import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
// import Icon from "react-native-vector-icons/";

import Colors from "../../constants/Colors";

const IconPicker = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
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
            size={props.modalHeight * 0.055} // vllt hier eher die modalWidth berücksichtigen?
          />
        );
      })}
    </View>
  );
};

export default IconPicker;
