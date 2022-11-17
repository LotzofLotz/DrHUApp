import React, { useState } from "react";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import { View, TouchableOpacity, Image } from "react-native";
import Colors from "../../constants/Colors";
import { Audio } from "expo-av";
import { useEffect } from "react";
import MyInfo from "../Global/MyInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AudioList from "./AudioList";
import FullFocusContent from "./FullFocusContent";
import getWeek from "date-fns/getWeek";

const FullFocusModal = ({
  fullModalVisible,
  setFullModalVisible,
  setDarkModalVisible,
  setFocusModalVisible,
  chosenAudio,
  machine,
  chosenTime,
  energy,
  getEnergy,
  setMachineCounts,
  energyCount,
  breathCount,
  mindCount,
  cryoCount,
}) => {
  const initialStatus = {
    shouldPlay: false,
    volume: 1,
    positionMillis: 0,
  };

  // Audio.setAudioModeAsync({ staysActiveInBackground: true });

  const [sound, setSound] = useState();
  const [duration, setDuration] = useState(1);
  const [position, setPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [infoVisible, setInfoVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  // useEffect(() => {
  //   //is not getting triggered?
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound in useEffect");
  //         sound.unloadAsync();
  //         console.log("unloaded succesfully ! ");
  //         setPosition(0);
  //         setIsPlaying(false);
  //       }
  //     : undefined;
  // }, [sound]);

  async function loadSound() {
    const { sound: playbackInstance } = await Audio.Sound.createAsync(
      AudioList(chosenAudio),
      initialStatus,
      onPlayBackStatusUpdate
      // (progressUpdateInteralMillis = 1000)
    );
    setSound(playbackInstance);
    playbackInstance.getStatusAsync().then(function (result) {
      setDuration(result.durationMillis);
    });
  }

  onPlayBackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.isPlaying) {
      setPosition(playbackStatus.positionMillis);
      setIsPlaying(true);
    }
    if (playbackStatus.didJustFinish) {
      setInfoVisible(true);
      {
        machine == "Cryo" && cryoCount > 1
          ? {}
          : machine == "Mind" && mindCount > 1
          ? {}
          : machine == "Breath" && breathCount > 1
          ? {}
          : machine == "Energy" && energyCount > 1
          ? {}
          : addBattery();
      }
    }
  };

  useEffect(() => {
    if (fullModalVisible && chosenAudio != "") {
      loadSound(); // sollte nicht beim öffnen des Fokus-Tabs getriggert werden
    }
  }, [fullModalVisible]);

  const addBattery = async () => {
    try {
      await AsyncStorage.setItem("Energy", (parseInt(energy) + 1).toString());
      const focusMachines = await AsyncStorage.getItem("FocusMachines");
      const jsonMachines = JSON.parse(focusMachines);
      jsonMachines[machine].push(
        getWeek(new Date(), {
          weekStartsOn: 1,
        })
      );
      await AsyncStorage.mergeItem(
        "FocusMachines",
        JSON.stringify(jsonMachines)
      );
    } catch (e) {
      console.log(e);
    }
    getEnergy();
    setMachineCounts();
  };

  const handlePlayPausePress = () => {
    isPlaying ? pauseSound() : playSound();
  };

  const playSound = async () => {
    try {
      sound.playAsync();
    } catch (e) {
      console.log(e);
    }
    setIsPlaying(true);
  };

  const pauseSound = async () => {
    try {
      await sound.pauseAsync();
    } catch (e) {
      console.log(e);
    }
    setIsPlaying(false);
  };

  const onForward = async () => {
    try {
      await sound.playFromPositionAsync(position + 10000);
    } catch (e) {
      console.log(e);
    }
  };

  const onBackward = async () => {
    try {
      await sound.playFromPositionAsync(position - 10000);
    } catch (e) {
      console.log(e);
    }
  };

  const onStartSlide = () => {
    pauseSound();
  };

  const onSlide = async (value) => {
    try {
      {
        // isPlaying
        // ?
        await sound.playFromPositionAsync(value);
        // : await sound.setPositionAsync(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const unloadSound = async () => {
    try {
      await sound.unloadAsync();
    } catch (e) {
      console.log(e);
    }
    setPosition(0);
    //setchosenaudio???
    setIsPlaying(false);
  };

  return (
    <Modal
      visible={fullModalVisible}
      style={{ margin: 0, backgroundColor: "#132224" }}
    >
      <MyInfo //Success-Info-Box
        color={Colors.primaryLight}
        isVisible={infoVisible}
        setIsVisible={setInfoVisible}
        text={"Glückwunsch! Gut durchgehalten"}
        onPress={() => (
          setInfoVisible(false),
          setFullModalVisible(false),
          setDarkModalVisible(false),
          setFocusModalVisible(false)
        )}
        onXPress={() => (
          setInfoVisible(false),
          setFullModalVisible(false),
          setFocusModalVisible(false),
          setDarkModalVisible(false)
        )}
        buttonName={"Lets go!"}
        icon={"done"}
      />
      <MyInfo // Failure-Info-Box
        color={Colors.pink}
        isVisible={alertVisible}
        setIsVisible={setAlertVisible}
        text={
          "Wenn du jetzt abbrichst, geht dein Fokus-Fortschritt verloren. bist du sicher?"
        }
        onPress={() => (
          setAlertVisible(false),
          setFullModalVisible(false),
          setDarkModalVisible(false),
          unloadSound()
        )}
        onXPress={() => (setAlertVisible(false), unloadSound())}
        buttonName={"Trotzdem abbrechen"}
      />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View // header TODO: make size responsive
          style={{
            position: "absolute",
            right: 10,
            top: 10,
            flexDirection: "row",
            zIndex: 420,
          }}
        >
          <Image
            source={require("../../assets/Batterieicon_Currency.png")}
            style={{ width: 36, height: 36, top: 2 }}
          />
          <MyText color={"white"} content={energy + "x"} bold size={30} />
        </View>

        <FullFocusContent
          machine={machine}
          chosenTime={chosenTime}
          setRemainingTime={setRemainingTime}
          remainingTime={remainingTime}
          duration={duration}
          position={position}
          isPlaying={isPlaying}
          // setIsPlaying={setIsPlaying}
          setInfoVisible={setInfoVisible}
          addBattery={addBattery}
          pauseSound={pauseSound}
          playSound={playSound}
          onSlide={onSlide}
          setPosition={setPosition}
          onStartSlide={onStartSlide}
          handlePlayPausePress={handlePlayPausePress}
          onForward={onForward}
          onBackward={onBackward}
        />

        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: "5%",
            width: "80%",
            height: "6%",
            borderWidth: 1,
            borderColor: Colors.primaryLight,
            borderRadius: 24,
            justifyContent: "center",
          }}
          onPress={() => {
            machine == "Energy"
              ? setAlertVisible(true)
              : (setFullModalVisible(false),
                setDarkModalVisible(false),
                unloadSound(),
                setFocusModalVisible(false));
          }}
        >
          <MyText content="Fokus stoppen" color="white" center />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FullFocusModal;
