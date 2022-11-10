import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import FullFocusModal from "./FullFocusModal";
import AudiosView from "./AudiosView";
import MyInfo from "../Global/MyInfo";
import FocusModalHeader from "./FocusModalHeader";
import TimePickerView from "./TimePickerView";

const FocusModal = ({
  focusModalVisible,
  setFocusModalVisible,
  machine,
  ratio,
  setDarkModalVisible,
  energy,
  getEnergy,
  setCryoComplete,
  setMindComplete,
  setFocusComplete,
  setBreathComplete,
}) => {
  const height =
    Dimensions.get("window").height * 0.9 > 700
      ? 700
      : Dimensions.get("window").height * 0.9;

  const bodyAudios = ["BodyScan1", "BodyScan2", "BodyScan3"];
  const soulAudios = [
    "Meditation1",
    "Meditation2",
    "Meditation3",
    "Meditation4",
    "Meditation5",
    "Meditation6",
    "Meditation7",
  ];
  const breathAudios = ["Breath1", "Breath2", "Breath3"];
  const [chosenAudio, setChosenAudio] = useState("");
  const [chosenTime, setChosenTime] = useState(40);
  const [fullModalVisible, setFullModalVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  return (
    <View>
      <FullFocusModal
        chosenAudio={chosenAudio}
        chosenTime={chosenTime}
        fullModalVisible={fullModalVisible}
        setFullModalVisible={setFullModalVisible}
        setDarkModalVisible={setDarkModalVisible}
        setFocusModalVisible={setFocusModalVisible}
        machine={machine}
        setMindComplete={setMindComplete}
        setFocusComplete={setFocusComplete}
        setBreathComplete={setBreathComplete}
        setCryoComplete={setCryoComplete}
        energy={energy}
        getEnergy={getEnergy}
      />
      <Modal
        isVisible={focusModalVisible}
        backdropColor={"#132224"}
        animationIn="slideInUp"
        backdropOpacity={0.6}
        animationOut="slideOutUp"
        onBackdropPress={() => {
          setFocusModalVisible(false);
          setChosenAudio("");
          //setChosenTime(40)???
        }}
      >
        <MyInfo
          color={Colors.primaryLight}
          isVisible={infoVisible}
          setIsVisible={setInfoVisible}
          text={"Wähle zuerst einen Track aus!"}
          onPress={() => setInfoVisible(false)}
          onXPress={() => setInfoVisible(false)}
          buttonName={"Okay"}
          icon={"questionmark"}
        />

        <View
          style={{
            maxHeight: height,
            backgroundColor: "white",
            borderRadius: 10,
            padding: "4%",
            justifyContent: "space-between",
          }}
        >
          <FocusModalHeader
            machine={machine}
            height={height}
            setChosenAudio={setChosenAudio}
            setFocusModalVisible={setFocusModalVisible}
          />
          <View
            style={{
              marginVertical: "5%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            {/* üBERARBEITEN, SOBALD STEFAN MIR SPRECHBLASE SCHICKT  */}
            <View style={{ width: "70%" }}>
              <MyText
                content="Filler bicg v viel längerdis shiaf asdf sd f sdf dasdfa amk lelelmaoodfer sd djfi sdfj er fdjf aspdfje rfawpfj dsfj aijd fej fafidsjfa psjfd sdfj aie fjewapf jpf jejf eap fe"
                size={height * 0.028}
              />
            </View>

            {/* <View // machines-View
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
            </View> */}
          </View>

          {machine != "Energy" ? (
            <AudiosView
              audios={
                machine == "Cryo"
                  ? bodyAudios
                  : machine == "Breath"
                  ? breathAudios
                  : soulAudios
              }
              setChosenAudio={setChosenAudio}
              chosenAudio={chosenAudio}
              machine={machine}
            />
          ) : (
            <TimePickerView
              chosenTime={chosenTime}
              setChosenTime={setChosenTime}
            />
          )}

          <TouchableOpacity
            onPress={() => {
              chosenAudio == "" && machine != "Energy"
                ? setInfoVisible(true)
                : (setDarkModalVisible(true), setFullModalVisible(true));
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
