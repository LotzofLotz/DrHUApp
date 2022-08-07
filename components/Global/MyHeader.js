import React from "react";
import { View, Image, StatusBar } from "react-native";
import { MyText } from "./MyText";
import Colors from "../../constants/Colors";

const MyHeader = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginLeft: 10,

        marginTop: StatusBar.currentHeight,
        alignItems: "flex-end",

        // height: "4%",
      }}
    >
      <View style={{ left: "14%", marginBottom: 10 }}>
        <MyText content={title} size={24} semiBold />
      </View>
      <View
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
      >
        <Image
          source={require("../../assets/Batterieicon_Currency.png")}
          style={{ width: 28, height: 28 }}
        />
        <MyText color="white" content=" 5x" bold size={25} />
      </View>
    </View>
  );
};
export default MyHeader;
