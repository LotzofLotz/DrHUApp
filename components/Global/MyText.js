import React from "react";
import { View, Text } from "react-native";
import {
  useFonts,
  WorkSans_700Bold,
  WorkSans_500Medium,
  WorkSans_600SemiBold,
} from "@expo-google-fonts/work-sans";
import Colors from "../../constants/Colors";

const MyText = ({ content, bold, color, size, semiBold }) => {
  let [fontsLoaded] = useFonts({
    WorkSans_500Medium,
    WorkSans_700Bold,
    WorkSans_600SemiBold,
  });

  if (!fontsLoaded) {
    return <View />;
  } else {
    return (
      <Text
        style={{
          fontFamily: bold
            ? "WorkSans_700Bold"
            : semiBold
            ? "WorkSans_600SemiBold"
            : "WorkSans_500Medium",
          color: color ? color : Colors.primaryDark,
          fontSize: size ? size : 20,
        }}
      >
        {content}
      </Text>
    );
  }
};

export { MyText };
