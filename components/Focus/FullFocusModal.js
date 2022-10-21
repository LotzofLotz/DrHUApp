import React from "react";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import { View, TouchableOpacity, Touchable } from "react-native";
import Colors from "../../constants/Colors";

const FullFocusModal = ({
  fullModalVisible,
  setFullModalVisible,
  setDarkModalVisible,
}) => {
  return (
    <Modal
      visible={fullModalVisible}
      style={{ margin: 0, backgroundColor: "#132224" }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            marginVertical: "5%",
            width: "80%",
            height: "50%",
            backgroundColor: Colors.primaryDark,
            borderRadius: 20,
            // justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: "50%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: "50%",
                width: "60%",
                borderRadius: 18,
                borderWidth: 7,
                borderColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <ProgressBar
                        color={props.habit?.value["Color"]}
                        steps={props.habit?.value["Amount"]}
                        step={step}
                        name={props.habit?.value["Icon"]}
                      /> */}
            </View>
            <View
              style={{
                height: "25%",
                width: "3%",
                backgroundColor: "white",
                borderTopRightRadius: 7,
                borderBottomRightRadius: 7,
              }}
            />
          </View>

          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 420,
              backgroundColor: "white",
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setFullModalVisible(false), setDarkModalVisible(false);
          }}
        >
          <MyText content="Fokus stoppen" color="white" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FullFocusModal;
