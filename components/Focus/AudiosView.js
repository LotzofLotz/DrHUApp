import React, { useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import Colors from "../../constants/Colors";
import { MyText } from "../Global/MyText";
import { Icon } from "react-native-elements";

const AudiosView = ({
  audios,
  setChosenAudio,
  chosenAudio,
  machine,
  height,
}) => {
  //   useEffect(() => {
  //     {
  //       audios.map((audio) => {
  //         console.log(audio);
  //       });
  //     }
  //   }, []);
  return (
    <View
      style={{
        backgroundColor: "#F6F6F6",
        borderRadius: 20,
        maxHeight: "30%",
        width: "100%",
        padding: "4%",
        marginBottom: "4%",

        paddingBottom: machine != "Mind" ? "4%" : 0,
      }}
    >
      <ScrollView contentContainerStyle={{ justifyContent: "space-between" }}>
        {audios.map((audio) => (
          <TouchableOpacity
            key={audio}
            onPress={() => setChosenAudio(audio)}
            style={{
              paddingLeft: 20,
              height: height * 0.06, //40,
              width: "100%",
              borderWidth: 1,
              borderColor:
                audio == chosenAudio ? Colors.primaryLight : Colors.primaryDark,
              borderRadius: 20,
              backgroundColor:
                audio == chosenAudio ? Colors.primaryLight : "white",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginVertical: "1%",
            }}
          >
            <MyText
              content={audio}
              color={audio == chosenAudio ? "white" : Colors.primaryDark}
              size={height * 0.034}
            />

            <Icon
              style={{ paddingRight: 15 }}
              name="play-arrow"
              color={audio == chosenAudio ? "white" : Colors.primaryDark}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default AudiosView;
