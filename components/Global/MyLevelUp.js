import React, { useEffect } from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { MyText } from "./MyText";
import Colors from "../../constants/Colors";
import Modal from "react-native-modal";
import { Icon } from "react-native-elements";
import UnlockedOnLvlUp from "../Lab/UnlockedOnLvlUp";

const MyLevelUp = (props) => {
  const height = Dimensions.get("window").height;

  useEffect(() => {
    if (props.isVisible) {
      console.log("mount");
      return () => {
        // ComponentWillUnmount
        console.log("unmount"), props.onXPress;
      };
    }
  }, []);

  return (
    <Modal
      style={{ justifyContent: "center", alignItems: "center" }}
      isVisible={props.isVisible}
      onBackdropPress={() => props.setIsVisible(false)}
      backdropColor={"#132224"}
      backdropOpacity={0.6}
    >
      <View
        style={{
          width: "100%",
          padding: 20,
          paddingTop: 40,
          margin: "4%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 20,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: "-12%",
            backgroundColor: props.color,
            height: height * 0.08,
            width: height * 0.08,
            borderRadius: 420,
            justifyContent: "center",
          }}
        >
          <Icon name={props.icon} color="white" size={40} />
        </View>
        <TouchableOpacity
          onPress={props.onXPress}
          style={{ position: "absolute", right: 10, top: 10 }}
        >
          <Icon name="close" color={Colors.primaryDark} />
        </TouchableOpacity>
        <MyText content={props.text} center size={height * 0.035} />

        <UnlockedOnLvlUp
          color={props.color}
          level={props.level}
          nextColor={props.nextColor}
        />
        <TouchableOpacity
          style={{ width: "100%", marginTop: "10%" }}
          onPress={props.onPress}
        >
          <View
            style={{
              // padding: "5%",
              height: 50,
              width: "100%",
              borderRadius: 40,
              backgroundColor: props.color,
              justifyContent: "center",
            }}
          >
            <MyText content={props.buttonName} color="white" center />
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default MyLevelUp;
