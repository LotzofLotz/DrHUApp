import React from "react";
import { View, Image, StatusBar, Platform } from "react-native";
import { MyText } from "./MyText";
import Colors from "../../constants/Colors";
import Constants from "expo-constants";

const MyHeader = ({ title, energy }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginLeft: 10,
        marginTop:
          Platform.OS === "ios"
            ? //   ? Constants.statusBarHeight + 20
              //   : Constants.statusBarHeight,
              StatusBar.currentHeight + 20
            : StatusBar.currentHeight,
        alignItems: "flex-end",
      }}
    >
      <View style={{ left: "14%", marginBottom: 10 }}>
        <MyText content={title} size={24} semiBold />
      </View>
      {/* <View
        style={{
          backgroundColor: Colors.primaryDark,
          position: "absolute",
          right: 0,
          height: 50, //TODO::::: make this more reponsive
          width: "25%",
          alignItems: "center",
          justifyContent: "center",
          borderBottomLeftRadius: 30,
          borderTopLeftRadius: 30,
          flexDirection: "row",
        }}
      > */}
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
      {/* </View> */}
    </View>
  );
};
export default MyHeader;
