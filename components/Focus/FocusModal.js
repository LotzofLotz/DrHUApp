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
import AudiosView from "./AudiosView";
import MyInfo from "../Global/MyInfo";
import { Slider } from "react-native-elements";

const FocusModal = ({
  focusModalVisible,
  setFocusModalVisible,
  machine,
  completed,
  ratio,
  setDarkModalVisible,
  setCompleted,
  energy,
  getEnergy,
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
        setCompleted={setCompleted}
        energy={energy}
        getEnergy={getEnergy}
      />
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
      <Modal
        isVisible={focusModalVisible}
        backdropColor={"#132224"}
        animationIn="slideInUp"
        backdropOpacity={0.6}
        animationOut="slideOutUp"
        onBackdropPress={() => {
          setFocusModalVisible(false);
          setChosenAudio("");
        }}
      >
        <View
          style={{
            maxHeight: height,
            backgroundColor: "white",
            borderRadius: 10,
            padding: "4%",
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
                setChosenAudio("");
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
              marginVertical: "5%",
              flexDirection: "row",
              justifyContent: "space-between",
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
            // Fokus-Timer-View
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <MyText content="Wie lange willst du deine Energie fokussieren? " />
              <Slider
                style={{ width: "70%", height: 20 }}
                value={40}
                minimumValue={25}
                maximumValue={60}
                thumbTintColor={Colors.primaryDark}
                maximumTrackTintColor={Colors.primaryLight}
                minimumTrackTintColor={Colors.primaryDark}
                thumbStyle={{ width: 20, height: 20 }}
                onValueChange={(value) =>
                  setChosenTime(Math.ceil(value / 5) * 5)
                }
              />
              <View
                style={{
                  marginTop: 20,
                  width: "40%",
                  height: 40,
                  backgroundColor: Colors.primaryLight,
                  borderRadius: 20,
                  justifyContent: "center",
                }}
              >
                <MyText
                  content={chosenTime + " Minuten"}
                  center
                  color="white"
                />
              </View>
            </View>
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
