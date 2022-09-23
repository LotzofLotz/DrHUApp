import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import IconPicker from "./IconPicker";
import ColorPicker from "./ColorPicker";

const PickerView = (props) => {
  useEffect(() => {
    console.log("Modalheight in PickerView:", props.modalHeight);

    console.log("dimensionsheight:", Dimensions.get("window").height);
  }, [props.modalHeight]);
  const modalHeight = Dimensions.get("window").height * 0.9;
  return (
    <View>
      <View
        style={{
          height: modalHeight * 0.33,

          justifyContent: "space-around",
        }}
      >
        <IconPicker
          icons={[
            "fitness-center",
            "pool",
            "sports-volleyball",
            "sports-soccer",
            "sports-esports",
            "directions-bike",
            "directions-run",
          ]}
          modalHeight={modalHeight}
          chosenIconName={props.chosenIconName}
          setChosenIconName={props.setChosenIconName}
          onIconPress={props.onIconPress}
        />
        <IconPicker
          icons={[
            "center-focus-weak",
            "self-improvement",
            "menu-book",
            "volunteer-activism",
            "no-food",
            "no-drinks",
            "school",
          ]}
          modalHeight={modalHeight}
          chosenIconName={props.chosenIconName}
          setChosenIconName={props.setChosenIconName}
          onIconPress={props.onIconPress}
        />

        <ColorPicker
          modalHeight={modalHeight}
          onColorPress={props.onColorPress}
          setChosenColor={props.setChosenColor}
          chosenColor={props.chosenColor}
        />
      </View>
    </View>
  );
};

export default PickerView;
