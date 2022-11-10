import React, { useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import ProgressBar from "../Home/ProgressBar";
import { Slider, Icon } from "react-native-elements";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { MyText } from "../Global/MyText";

const FullFocusContent = ({
  machine,
  chosenTime,
  remainingTime,
  duration,
  position,
  isPlaying,
  // setIsPlaying,
  setRemainingTime,
  addBattery,
  playSound,
  pauseSound,
  onSlide,
  setPosition,
  onStartSlide,
  handlePlayPausePress,
  onForward,
  onBackward,
}) => {
  const renderRemaining = (remainingTime) => {
    const minutes = Math.floor(remainingTime / 60);
    setRemainingTime(minutes);
    let secs = remainingTime % 60;
    const seconds = remainingTime % 60 < 10 ? "0" + secs.toString() : secs;
    return <MyText content={minutes + ":" + seconds} size={35} color="white" />;
  };

  const parseTime = (time) => {
    let durationSeconds = time / 1000;
    let minutes = Math.floor(durationSeconds / 60);
    let seconds =
      Math.floor(durationSeconds % 60) < 10
        ? "0" + Math.floor(durationSeconds % 60)
        : Math.floor(durationSeconds % 60);
    return minutes.toString() + ":" + seconds;
  };

  return (
    <View //Content-Square
      style={{
        marginVertical: "5%",
        width: "86%",
        height: "50%",
        backgroundColor: Colors.primaryDark,
        borderRadius: 20,
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
          <View style={{ position: "absolute", zIndex: 420 }}>
            {machine == "Energy" ? (
              <FontAwesome name="plug" size={42} color="white" />
            ) : machine == "Cryo" ? (
              <FontAwesome name="snowflake-o" size={42} color="white" />
            ) : machine == "Breath" ? (
              <FontAwesome5 name="lungs" size={42} color="white" />
            ) : (
              <FontAwesome5 name="brain" size={42} color="white" />
            )}
          </View>
          <ProgressBar
            color={
              machine == "Energy"
                ? "#eebf91"
                : machine == "Cryo"
                ? "#a9d3eb"
                : machine == "Breath"
                ? "#8cbf9b"
                : "#8c91bf"
            }
            steps={machine == "Energy" ? chosenTime : duration}
            step={
              machine == "Energy"
                ? chosenTime - remainingTime + 1
                : position + 5000
            }
          />
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
          {duration > 1 ? (
            <Slider
              style={{ width: "100%", height: 20 }}
              value={position}
              minimumValue={0}
              maximumValue={duration}
              thumbTintColor={"white"}
              maximumTrackTintColor={Colors.primaryLight}
              minimumTrackTintColor={"white"}
              thumbStyle={{ width: 20, height: 20 }}
              onSlidingComplete={(value) => onSlide(value)}
              onSlidingStart={
                () => onStartSlide()
                //() => {
                // isPlaying
                //   ? console.log("ICH SPIELE GRADE AMK")
                //   : console.log("ICH BIN GRAD PAUSIERT");
                //console.log("START SLIDE SLIDE SLIDE");
                //  }
              }
              // onValueChange={(value) => setPosition(value)}
            />
          ) : (
            <View />
          )}
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <MyText content={parseTime(position)} color={Colors.primaryLight} />
            <MyText content={parseTime(duration)} color={Colors.primaryLight} />
          </View>
          <View
            style={{
              top: "10%",
              width: "100%",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <TouchableOpacity onPress={() => onBackward()}>
              <MyText content="-10s" color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handlePlayPausePress();
              }}
              style={{
                height: 60,
                width: 60,
                borderRadius: 420,
                backgroundColor: "white",
                justifyContent: "center",
              }}
            >
              <Icon
                name={isPlaying ? "pause" : "play-arrow"}
                color={Colors.primaryDark}
                size={50}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onForward()}>
              <MyText content="+10s" color="white" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <CountdownCircleTimer
          isPlaying
          duration={chosenTime * 60}
          trailColor={Colors.primaryLight}
          colors={"#eebf91"}
          trailStrokeWidth={4}
          onComplete={() => (addBattery(), setInfoVisible(true))}
        >
          {({ remainingTime }) => {
            return renderRemaining(remainingTime); //hier ist fehlermeldung
          }}
        </CountdownCircleTimer>
      )}
    </View>
  );
};

export default FullFocusContent;
