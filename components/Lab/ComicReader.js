import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { Dimensions, View } from "react-native";
import Prolog from "./Comics/Prolog";
import RunComic from "./Comics/RunComic";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

const ComicReader = ({ isVisible, setReaderVisible, selectedComic }) => {
  const width = Dimensions.get("window").width;

  const setHeader = (selectedComic) => {
    switch (selectedComic) {
      case "Prolog":
        return "Prolog - Der Schweinehund";
      case "ComicRun":
        return "Run Boy Run";
      default:
        return "ComicReader";
    }
  };

  useEffect(() => {
    setText(setHeader(selectedComic));
  }, [selectedComic]);
  const [text, setText] = useState();

  const renderComic = (selectedComic) => {
    switch (selectedComic) {
      case "Prolog":
        return <Prolog width={width} />;

      case "ComicRun":
        return <RunComic width={width} />;

      default:
        return;
    }
  };

  return (
    <Modal
      isVisible={isVisible}
      style={{ margin: 0, backgroundColor: "lightgrey" }}
    >
      <View
        style={{
          height: "10%",
          backgroundColor: Colors.primaryDark,
          justifyContent: "space-evenly",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <FontAwesome
          color={"white"}
          name={"caret-left"}
          size={30}
          onPress={() => {
            setReaderVisible(false);
          }}
        />
        <MyText content={text} color="white" />
        <FontAwesome
          color={"white"}
          name={"caret-right"}
          size={30}
          onPress={() => {}}
        />
      </View>

      {renderComic(selectedComic)}
    </Modal>
  );
};

export default ComicReader;
