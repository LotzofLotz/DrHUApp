import React, { useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import Colors from "../../constants/Colors";
import { MyText } from "../Global/MyText";
import { Icon } from "react-native-elements";

const AudiosView = ({ audios, setChosenAudio, chosenAudio, machine }) => {
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
        maxHeight: 240,
        width: "100%",
        paddingTop: "4%",
        paddingHorizontal: "4%",

        // padding: "4%",
        paddingBottom: machine != "Mind" ? "4%" : 0,
        // padding: "4%",
        // justifyContent: "space-between",
      }}
    >
      <ScrollView contentContainerStyle={{ justifyContent: "space-between" }}>
        {audios.map((audio) => (
          <TouchableOpacity
            key={audio}
            onPress={() => setChosenAudio(audio)}
            style={{
              paddingLeft: 20,
              height: 40,
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
              size={18}
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
