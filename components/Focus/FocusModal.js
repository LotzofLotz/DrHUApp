import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import { Icon } from "react-native-elements";
import Cryo from "./Cryo";
import Energy from "./Energy";
import Breath from "./Breath";
import Mind from "./Mind";
import FullFocusModal from "./FullFocusModal";

const FocusModal = ({
  focusModalVisible,
  setFocusModalVisible,
  machine,
  completed,
  ratio,
  setDarkModalVisible,
  setCompleted,
}) => {
  const height =
    Dimensions.get("window").height * 0.9 > 700
      ? 700
      : Dimensions.get("window").height * 0.9;

  const [fullModalVisible, setFullModalVisible] = useState(false);
  return (
    <View>
      <FullFocusModal
        fullModalVisible={fullModalVisible}
        setFullModalVisible={setFullModalVisible}
        setDarkModalVisible={setDarkModalVisible}
      />
      <Modal
        isVisible={focusModalVisible}
        backdropColor={"#132224"}
        animationIn="slideInUp"
        backdropOpacity={0.6}
        animationOut="slideOutUp"
        onBackdropPress={() => {
          setFocusModalVisible(false);
        }}
      >
        <View
          style={{
            maxHeight: height,
            backgroundColor: "white",
            borderRadius: 10,
            padding: "4%",
            // margin: "4%",

            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <MyText
              content={
                machine == "Cryo"
                  ? "Körperfokus"
                  : machine == "Energy"
                  ? "Energiefokus"
                  : machine == "Breath"
                  ? "Atemfokus"
                  : "Seelenfokus"
              }
              color={Colors.primaryDark}
              size={height * 0.04}
              semiBold
            />
            <TouchableOpacity
              onPress={() => {
                setFocusModalVisible(false);
              }}
            >
              <Icon name="close" color={Colors.primaryDark} />
            </TouchableOpacity>
          </View>
          <View>
            <MyText
              content={
                machine == "Cryo"
                  ? "Muskelrelaxation"
                  : machine == "Energy"
                  ? "Ablenkungsfreier Bereich"
                  : machine == "Breath"
                  ? "Atemübungen"
                  : "Achtsamkeitsübungen"
              }
              size={height * 0.02}
              color={Colors.primaryLight}
            />
          </View>
          <View
            style={{
              // height: "30%",
              // backgroundColor: "lightgrey",
              marginVertical: "5%",
              flexDirection: "row",
              justifyContent: "space-between",
              // flex: 1,
            }}
          >
            <View style={{ width: "70%" }}>
              <MyText
                content="Filler bicg v viel längerdis shiaf asdf sd f sdf dasdfa amk lelelmaoodfer sd djfi sdfj er fdjf aspdfje rfawpfj dsfj aijd fej fafidsjfa psjfd sdfj aie fjewapf jpf jejf eap fe"
                size={height * 0.028}
              />
            </View>

            <View // machines-View
              style={{
                alignItems: "center",
                justifyContent: "flex-end",
                right: "4%",
              }}
            >
              {machine == "Cryo" ? (
                <Cryo completed={completed} ratio={ratio} small />
              ) : machine == "Energy" ? (
                <Energy completed={completed} ratio={ratio} small />
              ) : machine == "Breath" ? (
                <Breath completed={completed} ratio={ratio} small />
              ) : (
                <Mind completed={completed} ratio={ratio} small />
              )}
            </View>
          </View>
          <View
            style={{
              height: "34%",
              borderRadius: 20,
              borderWidth: 0.7,
              borderColor: Colors.primaryDark,
            }}
          ></View>
          <TouchableOpacity
            onPress={() => {
              setDarkModalVisible(true),
                setFullModalVisible(true),
                setCompleted(!completed);
            }}
          >
            <View
              style={{
                borderRadius: 36,
                backgroundColor: Colors.yellow,
                marginTop: height * 0.02,
                paddingHorizontal: height * 0.03,
                paddingVertical: 10,
              }}
            >
              <MyText content="Fokus starten" center semiBold />
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default FocusModal;
