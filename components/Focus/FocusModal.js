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
import FocusCounter from "./FocusCounter";
import PinguBubble from "../Global/PinguBubble";

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
    // Dimensions.get("window").height * 0.9 > 600
    //   ? 700
    //   :
    Dimensions.get("window").height * 0.9;

  const width = Dimensions.get("window").width;

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
            // maxHeight: height,
            height: height,
            backgroundColor: "white",
            borderRadius: 10,
            padding: "4%",
            // justifyContent: "space-between",??
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
              // backgroundColor: "green",
              height: "22%",
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
              <View
                style={{
                  width: "100%",
                  flexDirection: "row",
                  height: "60%",
                  // justifyContent: "space-around",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",

                    width: "70%",
                  }}
                >
                  <MyText
                    content="lustiger Spruch lelmao"
                    italic
                    size={height * 0.025}
                  />
                </View>
                <View
                  style={{
                    width: "30%",
                    alignItems: "center",
                  }}
                >
                  <PinguBubble height={height} />
                </View>
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
              height={height}
            />
          ) : (
            <TimePickerView
              chosenTime={chosenTime}
              setChosenTime={setChosenTime}
            />
          )}
          <View
            style={{
              margin: "-5%",
              marginVertical: "3%",
            }}
          >
            <FocusCounter
              machine={machine}
              width={width}
              height={height}
              count={
                machine == "Cryo"
                  ? cryoCount
                  : machine == "Breath"
                  ? breathCount
                  : machine == "Mind"
                  ? mindCount
                  : energyCount
              }
            />
          </View>
          <View
            style={{
              // marginTop: "5%",
              position: "absolute",
              bottom: "4%",
              left: "4%",
              width: "100%",
            }}
          >
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
        </View>
      </Modal>
    </View>
  );
};

export default FocusModal;
