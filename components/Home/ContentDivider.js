import React from "react";
import { View } from "react-native";
import { MyText } from "../Global/MyText";
import { MaterialIcons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const ContentDivider = ({ content, size, height }) => {
  return (
    <View
      style={{
        // marginVertical: "3%",
        height: height,
        justifyContent: "space-around",
        // backgroundColor: "lightgreen",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          // bottom: "20%",
        }}
      >
        <View style={{}}>
          <MyText content={content} center size={size} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "1%",
          // bottom: "2%",
          // marginTop: "4%",
        }}
      >
        <View
          style={{
            borderBottomColor: Colors.primaryLight,
            borderBottomWidth: 1,
            width: "42%",
            bottom: "2%",
          }}
        />
        <View>
          <MaterialIcons
            style={{ top: "5%" }}
            name="keyboard-arrow-down"
            size={size * 1.6}
            color={Colors.primaryDark}
          />
        </View>
        <View
          style={{
            borderBottomColor: Colors.primaryLight,
            borderBottomWidth: 1,
            width: "42%",
            bottom: "2%",
          }}
        />
      </View>
    </View>
  );
};

export default ContentDivider;
