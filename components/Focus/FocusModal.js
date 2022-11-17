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
import MySpeechBubble from "../Global/MySpeechBubble";

const FocusModal = ({
  focusModalVisible,
  setFocusModalVisible,
  machine,
  ratio,
  setDarkModalVisible,
  energy,
  getEnergy,
  mindCount,
  energyCount,
  cryoCount,
  breathCount,
  setMachineCounts,
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
        <FullFocusModal
          chosenAudio={chosenAudio}
          chosenTime={chosenTime}
          fullModalVisible={fullModalVisible}
          setFullModalVisible={setFullModalVisible}
          setDarkModalVisible={setDarkModalVisible}
          setFocusModalVisible={setFocusModalVisible}
          machine={machine}
          energy={energy}
          getEnergy={getEnergy}
          setMachineCounts={setMachineCounts}
          mindCount={mindCount}
          breathCount={breathCount}
          energyCount={energyCount}
          cryoCount={cryoCount}
        />
        <MyInfo
          color={Colors.primaryLight}
          isVisible={infoVisible}
          setIsVisible={setInfoVisible}
          text={"Wähle zuerst einen Track aus!"}
          onPress={() => setInfoVisible(false)}
          onXPress={() => setInfoVisible(false)}
          buttonName={"Okay"}
          icon={"done"}
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
            <View style={{ width: "100%" }}>
              <View>
                <MyText
                  content="Filler bicg v viel längerdis shiaf as dfasdjfs f dsfa  dsfief asdfsfe"
                  size={height * 0.028}
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <MyText content="lustiger Spruch lelmao" />
                </View>
                <MySpeechBubble />
              </View>
            </View>
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
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                height: 50,
                width: 100,
                backgroundColor: Colors.primaryDark,
                borderRadius: 10,
                justifyContent: "center",
              }}
            >
              <MyText
                content={
                  machine == "Cryo"
                    ? cryoCount
                    : machine == "Breath"
                    ? breathCount
                    : machine == "Mind"
                    ? mindCount
                    : energyCount
                }
                color="white"
                center
              />
            </View>
          </View>
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
