import React from "react";
import { View, TouchableOpacity } from "react-native";
import { MyText } from "./MyText";
import Colors from "../../constants/Colors";
import Modal from "react-native-modal";
import { Icon } from "react-native-elements";

const MyInfo = (props) => {
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
          width: "90%",
          padding: 20,
          paddingTop: 40,
          //   margin: "10%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 20,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: "-20%",
            backgroundColor: Colors.pink,
            height: 60,
            width: 60,
            borderRadius: 420,
            // alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Icon
            name="lmfaothisdoesntexist"
            color="white"
            size={40}
            style={{ bottom: 5 }}
          />
        </View>
        <TouchableOpacity
          onPress={() => props.setIsVisible(false)}
          style={{ position: "absolute", right: 10, top: 10 }}
        >
          <Icon name="close" />
        </TouchableOpacity>
        <MyText content={props.text} center />

        <TouchableOpacity
          style={{ width: "90%", marginTop: "10%" }}
          onPress={props.onPress}
        >
          <View
            style={{
              padding: "5%",
              width: "100%",
              borderRadius: 40,
              backgroundColor: Colors.pink,
            }}
          >
            <MyText content={props.buttonName} color="white" center />
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default MyInfo;
