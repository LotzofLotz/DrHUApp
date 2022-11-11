import React from "react";

// export default AudioList = {
//   Meditation1: require("../../assets/Audios/Achtsamkeit1.mp3"),
//   Meditation2: require("../../assets/Audios/Achtsamkeit2.mp3"),
// };

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
