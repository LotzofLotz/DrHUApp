import React, { useEffect, useState } from "react";
import { View, Dimensions, Image, TouchableOpacity } from "react-native";
import Svg, { Path, Line } from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";
import { Icon } from "react-native-elements";

import Colors from "../../constants/Colors";

const MyTabBar = ({ navigation }) => {
  const tabBarHeight = 70;
  const middleIconSize = 90;
  const midRadius = 45;

  const width = Dimensions.get("window").width;
  const [focused, setFocused] = useState("Home");

  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: tabBarHeight,
        // backgroundColor: "white",
        // opacity: 0.5,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          // backgroundColor: "white",
          // opacity: 0.5,
          //backgroundColor: "green",
        }}
      >
        <View
          style={{
            backgroundColor: Colors.primaryDark,
            height: tabBarHeight,
            width: (width - 147) / 2,
          }}
        />
        <View
          style={{
            position: "absolute",
            right: (width - 147) / 2,
            left: (width - 147) / 2,
            // backgroundColor: "white",
            // opacity: 0.5,
            // alignItems: "center"
          }}
        >
          <Svg
            //fill="none"

            width="147"
            height={tabBarHeight}
            viewBox="0 0  147 70"
            fill-opacity={0}
          >
            <Path
              d="M265.44,48.67c-11.276,0-21.39,5.706-25.646,16.158a52.018,52.018,0,0,1-96.373,0c-4.257-10.45-14.371-16.158-25.646-16.158l-.041,72H265.553Z"
              transform="translate(-117.734 -48.67)"
              fill="#2a4a4f"
            />
          </Svg>
        </View>
        <View
          style={{
            backgroundColor: Colors.primaryDark,
            position: "absolute",
            right: 0,
            height: tabBarHeight,
            width: (width - 147) / 2,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home"), setFocused("Home");
        }}
      >
        <View
          style={{
            position: "absolute",
            borderColor: Colors.yellow,
            borderWidth: focused == "Home" ? 3 : 0,
            width: middleIconSize,
            height: middleIconSize,
            borderRadius: midRadius,
            backgroundColor: Colors.primaryDark,
            left: width / 2 - midRadius,
            bottom: tabBarHeight - midRadius,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/BatterieiconNAV.png")}
            style={{ width: "60%", height: "60%", resizeMode: "contain" }}
          />
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", bottom: "13%" }}>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../../assets/NAVBarLaborIcon.png")}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: "center", alignItems: "flex-end" }}
        >
          <Image
            source={require("../../assets/NAVBarLaborIcon.png")}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>

        <View style={{ width: "45%" }} />

        <View style={{ right: 20 }}>
          <Icon
            name={"center-focus-weak"}
            onPress={() => {
              navigation.navigate("Focus"), setFocused("Focus");
            }}
            size={40}
            color={focused == "Focus" ? Colors.yellow : "white"}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setFocused("Lab"), navigation.navigate("Lab");
          }}
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            source={require("../../assets/NAVBarLaborIcon.png")}
            style={{
              width: 32,
              height: 32,
              // color: focused == "Lab" ? Colors.yellow : "white",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyTabBar;
