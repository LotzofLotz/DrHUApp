import React from "react";
import { View, Text } from "react-native";
import { MyText } from "./MyText";
import Colors from "../../constants/colors";
import { Feather } from "@expo/vector-icons";

const MyHeader = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        marginLeft: 10,
        marginTop: "7%",
        alignItems: "center",
      }}
    >
      <View>
        <MyText content={title} size={24} semiBold />
      </View>
      <View
        style={{
          backgroundColor: Colors.primaryDark,
          position: "absolute",
          right: 0,
          height: 50, //TODO::::: make this more reponsive
          width: 80,
          alignItems: "center",
          justifyContent: "center",
          borderBottomLeftRadius: 30,
          borderTopLeftRadius: 30,
          flexDirection: "row",
        }}
      >
        <Feather
          name="battery"
          size={24}
          color="white"
          style={{ marginHorizontal: 10 }}
        />
        <MyText color="white" content="5x" bold size={25} />
      </View>
    </View>
  );
};
export default MyHeader;
