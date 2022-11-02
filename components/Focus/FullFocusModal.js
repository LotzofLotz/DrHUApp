import React, { useState } from "react";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import { View, TouchableOpacity, Touchable } from "react-native";
import Colors from "../../constants/Colors";
import { Slider, Icon } from "react-native-elements";
import { Audio, AVPlaybackStatus } from "expo-av";
import { useEffect } from "react";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import MyInfo from "../Global/MyInfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AudioList from "./AudioList";

const FullFocusModal = ({
  fullModalVisible,
  setFullModalVisible,
  setDarkModalVisible,
  setFocusModalVisible,
  chosenAudio,
  machine,
  chosenTime,
  setCompleted,
  energy,
  getEnergy,
}) => {
  const status = {
    shouldPlay: false,
    volume: 0.5,
    positionMillis: 0,
  };
  const [sound, setSound] = useState();
  const [newSound, setNewSound] = useState(new Audio.Sound());
  const [duration, setDuration] = useState(0);

  const [infoVisible, setInfoVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  // useEffect(() => {
  //   if (fullModalVisible == true) {
  //     // loadSound();
  //     playSound2();
  //   }
  // }, [fullModalVisible]);

  useEffect(() => {
    console.log("::", newSound.positionMillis);
  }, [newSound]);

  useEffect(() => {
    console.log("duration:", duration);
  }, [duration]);

  const addBattery = async () => {
    try {
      await AsyncStorage.setItem("Energy", (parseInt(energy) + 1).toString());
    } catch (e) {
      console.log(e);
    }
    getEnergy();
  };

  async function loadSound() {
    console.log("load sound triggered");
    // const { sound } = await Audio.Sound.createAsync(
    //   require("../../assets/Audios/SUI.mp3")
    // );
    // await Audio.setSound(sound);
    switch (chosenAudio) {
      case "Meditation1":
        await newSound.loadAsync(
          AudioList.Meditation1,
          // status,
          // false,
          (status) => console.log(":::::", status.positionMilis)
        );
        break;

      default:
        await newSound.loadAsync(AudioList.Meditation1, status, false);
    }

    newSound.setOnPlaybackStatusUpdate(() =>
      setDuration(status.positionMillis)
    ),
      newSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);

    // await newSound.loadAsync(
    //   // require("../../assets/Audios/SUI.mp3"),

    //   // AudioList.Meditation1,
    //   pfad,
    //   status,
    //   false
    // );
    // sound.getStatusAsync().then(function (result) {
    //   console.log("duration in seconds: ", result.durationMillis / 1000);
    //   console.log("position:", result.positionMillis);
    //   console.log(result.isPlaying);
    //   setDuration(result.durationMillis);
    // });
  }

  async function playSound() {
    // console.log("Loading Sound");
    // console.log(soundPfad);
    // const { sound } = await Audio.Sound.createAsync(
    //   require("../../assets/Audios/SUI.mp3")
    //   // require(soundPfad)
    // );
    // setSound(sound);

    console.log("Playing Sound");

    // await sound.playAsync();
    // sound.getStatusAsync().then(function (result) {
    //   console.log(":::", result.positionMillis);
    // });
    await newSound.playAsync();
  }

  async function playSound2() {
    const { sound, status } = await Audio.Sound.createAsync(
      require("../../assets/Audios/SUI.mp3"),
      (status) => console.log("HIER:", status.positionMilis)
    );
    setSound(sound);
    await sound.playAsync();
    sound.setOnPlaybackStatusUpdate(() => setDuration(status.positionMilis));
  }

  // React.useEffect(() => {
  //   return sound
  //     ? () => {
  //         console.log("Unloading Sound");
  //         sound.unloadAsync();
  //       }
  //     : undefined;
  // }, [sound]);

  React.useEffect(() => {
    return newSound
      ? () => {
          console.log("Unloading Sound");
          newSound.unloadAsync();
        }
      : undefined;
  }, [newSound]);

  return (
    <Modal
      visible={fullModalVisible}
      style={{ margin: 0, backgroundColor: "#132224" }}
    >
      <MyInfo
        color={Colors.primaryLight}
        isVisible={infoVisible}
        setIsVisible={setInfoVisible}
        text={"Glückwunsch! Gut durchgehalten"}
        onPress={() => (
          setInfoVisible(false),
          setFullModalVisible(false),
          setDarkModalVisible(false),
          setFocusModalVisible(false),
          setCompleted(true)
        )}
        onXPress={() => (
          setInfoVisible(false),
          setFullModalVisible(false),
          setCompleted(true),
          setFocusModalVisible(false),
          setDarkModalVisible(false)
        )}
        buttonName={"Lets go!"}
        icon={"questionmark"}
      />
      <MyInfo
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

          {machine != "Energy" ? (
            <View style={{ width: "90%" }}>
              <Slider
                style={{ width: "100%", height: 20 }}
                value={0}
                minimumValue={0}
                maximumValue={100}
                thumbTintColor={"white"}
                maximumTrackTintColor={Colors.primaryLight}
                minimumTrackTintColor={"white"}
                thumbStyle={{ width: 20, height: 20 }}
              />

              <View
                style={{
                  top: "10%",
                  width: "100%",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <MyText content="-10s" color="white" />
                <TouchableOpacity
                  onPress={() => playSound2()}
                  style={{
                    height: 60,
                    width: 60,
                    borderRadius: 420,
                    backgroundColor: "white",
                    justifyContent: "center",
                  }}
                >
                  <Icon
                    name="play-arrow"
                    color={Colors.primaryDark}
                    size={50}
                  />
                </TouchableOpacity>
                <MyText content="+10s" color="white" />
              </View>
            </View>
          ) : (
            <CountdownCircleTimer
              isPlaying
              duration={chosenTime}
              trailColor={"#132224"}
              colors={"#eebf91"}
              onComplete={() => (addBattery(), setInfoVisible(true))}
            >
              {({ remainingTime }) => (
                <MyText content={remainingTime} color="#eebf91" size={42} />
              )}
            </CountdownCircleTimer>
          )}
        </View>

        <TouchableOpacity
          style={{
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
              : (newSound.unloadAsync(),
                setFullModalVisible(false),
                setDarkModalVisible(false));
          }}
        >
          <MyText content="Fokus stoppen" color="white" center />
        </TouchableOpacity>
        <MyText content={energy} color="white" />
      </View>
    </Modal>
  );
};

export default FullFocusModal;
