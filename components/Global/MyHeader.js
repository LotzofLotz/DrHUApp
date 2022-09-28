import React, { useEffect } from "react";
import {
  View,
  Image,
  StatusBar,
  Platform,
  PixelRatio,
  Dimensions,
} from "react-native";
import { MyText } from "./MyText";
import Colors from "../../constants/Colors";
import Constants from "expo-constants";

const MyHeader = ({ title, energy, scrolled }) => {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  return (
    <View style={{ zIndex: 420 }}>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: scrolled ? 1 : 0,
          },
          shadowOpacity: scrolled ? 0.2 : 0,
          shadowRadius: scrolled ? 0.6 : 0,
          elevation: scrolled ? 10 : 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            // elevation: 10,
            margin: "4%",

            marginTop:
              Platform.OS === "ios"
                ? StatusBar.currentHeight + 25
                : StatusBar.currentHeight + 5,
            alignItems: "flex-end",
          }}
        >
          <View>
            <MyText content={title} size={width * 0.06} semiBold />
            {/* height * 0.035 */}
          </View>

          <View
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/Batterieicon_Currency_alt.png")}
              style={{ width: width * 0.08, height: width * 0.08, top: 2 }}
            />
            <MyText
              color={Colors.primaryDark}
              content={" " + energy + "x"}
              bold
              size={width * 0.07}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default MyHeader;
