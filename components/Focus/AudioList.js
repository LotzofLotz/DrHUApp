import React from "react";

const AudioList = (chosenAudio) => {
  switch (chosenAudio) {
    case "Meditation1":
      return require("../../assets/Audios/Achtsamkeit1.mp3");
    case "Meditation2":
      return require("../../assets/Audios/Achtsamkeit2.mp3");
    default:
      return require("../../assets/Audios/SUI.mp3");
  }
};

export default AudioList;
