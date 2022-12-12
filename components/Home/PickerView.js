import React, { useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import IconPicker from "./IconPicker";
import ColorPicker from "./ColorPicker";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PickerView = (props) => {
  const [unlockedColors, setUnlockedColors] = useState("");
  const modalHeight = Dimensions.get("window").height * 0.9;

  useEffect(() => {
    getColors();
  }, [unlockedColors]);

  const getColors = async () => {
    try {
      const colors = await AsyncStorage.getItem("Colors");
      setUnlockedColors(colors);
      console.log("unlocked colors in getColors:", colors);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <View
        style={{
          height: modalHeight * 0.34,
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
          unlockedColors={unlockedColors}
        />
      </View>
    </View>
  );
};

export default PickerView;
