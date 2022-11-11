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
  setMindComplete,
  setFocusComplete,
  setCryoComplete,
  setBreathComplete,
}) => {
  const initialStatus = {
    shouldPlay: false,
    volume: 1,
    positionMillis: 0,
  };

  Audio.setAudioModeAsync({ staysActiveInBackground: true });

  const [sound, setSound] = useState();
  const [duration, setDuration] = useState(1);
  const [position, setPosition] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);
  const [infoVisible, setInfoVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  useEffect(() => {
    console.log("isPlaying:", isPlaying);
  }, [isPlaying]);

  async function loadSound() {
    console.log(" loading sound");
    const { sound: playbackInstance } = await Audio.Sound.createAsync(
      AudioList(chosenAudio),
      initialStatus,
      onPlayBackStatusUpdate
      // (progressUpdateInteralMillis = 1000)
    );
    setSound(playbackInstance);
    console.log("sound loaded!");
    playbackInstance.getStatusAsync().then(function (result) {
      console.log("duration in seconds:", result.durationMillis / 1000);
      setDuration(result.durationMillis);
    });
  }

  onPlayBackStatusUpdate = (playbackStatus) => {
    if (playbackStatus.isPlaying) {
      setPosition(playbackStatus.positionMillis);
    }
    if (playbackStatus.didJustFinish) {
      console.log("ERFOLGREICH AUDIO ANGEHÖRT!!!!!");
      addBattery();
      setInfoVisible(true);
      unloadSound();
    }
    if (playbackStatus.isLoaded) {
      console.log("isLoaded!");
    }
    if (!playbackStatus.isLoaded) {
      console.log("SOUND IS NOT LOADED AMK");
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
    } catch (e) {
      console.log(e);
    }
    getEnergy();
  };

  const handlePlayPausePress = () => {
    console.log("HANDLEPLAYPAUSE IS PLAYING?", isPlaying);
    isPlaying ? pauseSound() : playSound();
  };

  const playSound = () => {
    console.log("play sound triggered ");
    sound
      .playAsync()

      // .then(async (playbackStatus) => {
      //   console.log("JAJAJJAJAA", playbackStatus); /////EYYYYYYYYY

      //   console.log("POSITION Seconds:", playbackStatus.positionMillis / 1000);
      // })

      .catch((error) => {
        console.log(error);
      });
    setIsPlaying(true);
  };

  const pauseSound = async () => {
    try {
      console.log("pause sound triggered ");
      sound.pauseAsync();
    } catch (e) {
      console.log(e);
    }
    setIsPlaying(false);
  };

  const onForward = async () => {
    try {
      sound.playFromPositionAsync(position + 10000);
    } catch (e) {
      console.log(e);
    }
  };

  const onBackward = async () => {
    try {
      sound.playFromPositionAsync(position - 10000);
    } catch (e) {
      console.log(e);
    }
  };

  const setCompleted = () => {
    machine == "Cryo"
      ? setCryoComplete(true)
      : machine == "Breath"
      ? setBreathComplete(true)
      : machine == "Focus"
      ? setFocusComplete(true)
      : setMindComplete(true);
  };

  const onStartSlide = () => {
    console.log("HIER NOXHMAL IS PLAYING:", isPlaying);
    !isPlaying
      ? console.log("STOP FUCKING WITH ME")
      : console.log("heheh züü ");
  };

  const onSlide = async (value) => {
    // console.log("SLIDE SLIDE SLIDE");
    // console.log("trying to play from position ", value);
    try {
      // await sound.setPositionAsync(value);
      // console.log("trying to play from position ");
      // await sound.playFromPositionAsync(value);
      {
        isPlaying
          ? await sound.playFromPositionAsync(value)
          : await sound.setPositionAsync(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const unloadSound = async () => {
    setPosition(0);
    try {
      sound.unloadAsync(), console.log("unloading sound");
    } catch (e) {
      console.log(e);
    }
  };

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound in useEffect");
          sound.unloadAsync();
          setPosition(0);
          setIsPlaying(false);
        }
      : undefined;
  }, [sound]);

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
          setFocusModalVisible(false),
          setCompleted()
        )}
        onXPress={() => (
          setInfoVisible(false),
          setFullModalVisible(false),
          setCompleted(),
          setFocusModalVisible(false),
          setDarkModalVisible(false)
        )}
        buttonName={"Lets go!"}
        icon={"questionmark"}
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
          setDarkModalVisible(false)
        )}
        onXPress={() => setAlertVisible(false)}
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
                unloadSound());
          }}
        >
          <MyText content="Fokus stoppen" color="white" center />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default FullFocusModal;
