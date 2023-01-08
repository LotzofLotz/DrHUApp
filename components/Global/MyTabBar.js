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
  const height = Dimensions.get("window").height;
  const [focused, setFocused] = useState("Home");

  const design = 1;

  return (
    <View
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: tabBarHeight,
      }}
    >
      <View
        style={{
          flexDirection: "row",
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
              d="M265.644,48.67c-11.276,0-21.593,5.706-25.85,16.158a52.018,52.018,0,0,1-96.373,0c-4.257-10.45-14.5-16.158-25.777-16.158v72h148Z"
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
        style={{
          position: "absolute",
          borderColor: Colors.yellow,
          borderWidth: focused == "Home" && design != 1 ? 3 : 0,
          width: focused == "Home" && design != 1 ? middleIconSize : 84,
          height: focused == "Home" && design != 1 ? middleIconSize : 84,
          borderRadius: midRadius,
          backgroundColor:
            design == 1 && focused == "Home"
              ? Colors.primaryLight
              : Colors.primaryDark,
          left:
            focused == "Home" && design != 1
              ? width / 2 - midRadius
              : width / 2 - midRadius + 3,
          bottom:
            focused == "Home" && design != 1
              ? tabBarHeight - midRadius
              : tabBarHeight - midRadius + 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/BatterieiconNAV.png")}
          style={{ width: "60%", height: "60%", resizeMode: "contain" }}
        />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", bottom: "14%" }}>
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

        <View
          style={{
            right: 20,
            height: 50,
            width: 50,
            backgroundColor:
              focused == "Focus" && design == 1
                ? Colors.primaryLight
                : Colors.primaryDark,
            borderRadius: 420,
            justifyContent: "center",
          }}
        >
          <Icon
            name={"center-focus-weak"}
            onPress={() => {
              navigation.navigate("Focus"), setFocused("Focus");
            }}
            size={40}
            color={focused == "Focus" && design != 1 ? Colors.yellow : "white"}
          />
        </View>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            // alignItems: "center",
            height: 50,
            width: 50, //? why not round?
            backgroundColor:
              focused == "Lab" && design == 1
                ? Colors.primaryLight
                : Colors.primaryDark,
            borderRadius: 420,
          }}
          onPress={() => {
            setFocused("Lab"), navigation.navigate("Lab");
          }}
        >
          <Image
            source={require("../../assets/NAVBarLaborIcon.png")}
            style={{
              left: 10,
              width: 32,
              height: 32,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyTabBar;
