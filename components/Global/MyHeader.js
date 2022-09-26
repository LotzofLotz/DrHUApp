import React from "react";
import { View, Image, StatusBar, Platform } from "react-native";
import { MyText } from "./MyText";
import Colors from "../../constants/Colors";
import Constants from "expo-constants";

const MyHeader = ({ title, energy, scrolled }) => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: scrolled ? 1 : 0,
          },
          shadowOpacity: scrolled ? 0.27 : 0,
          shadowRadius: scrolled ? 1 : 0,

          elevation: scrolled ? 10 : 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            elevation: 10,
            marginLeft: 10,
            marginTop:
              Platform.OS === "ios"
                ? StatusBar.currentHeight + 20
                : StatusBar.currentHeight,
            alignItems: "flex-end",
          }}
        >
          <View style={{ left: "14%", marginBottom: 10 }}>
            <MyText content={title} size={24} semiBold />
          </View>

          <View
            style={{
              position: "absolute",
              right: 4,
              top: 0,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/Batterieicon_Currency_alt.png")}
              style={{ width: 32, height: 32, top: 5 }}
            />
            <MyText
              color={Colors.primaryDark}
              content={" " + energy + "x"}
              bold
              size={28}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default MyHeader;
