import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { ScrollView, Image, Dimensions, View, FlatList } from "react-native";

import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Asset } from "expo-asset";

const ComicReader = ({ isVisible, setReaderVisible }) => {
  // const width = Dimensions.get("window").width;
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();
  const [state, setState] = useState();

  const [ready, setReady] = useState(false);
  const [image, setImage] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //     const image = Asset.fromModule(
  //       require("../../assets/Comics/runComic3.png")
  //     );
  //     await image.downloadAsync();
  //     setImage(image);
  //     setReady(true);
  //   })();
  // }, []);

  const _renderImage = () => (
    <Image
      source={{ uri: image.localUri }}
      style={{ width: 400, height: 2360 }}
    />
  );

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
        <MyText content="Prolog - Der Schweinehund" color="white" />
        <FontAwesome
          color={"white"}
          name={"caret-right"}
          size={30}
          onPress={() => {}}
        />
      </View>
      <ScrollView>
        {/* <Image
          resizeMode="stretch"
          style={{ width: 400, height: 2360 }}
          source={require("../../assets/Comics/runComic3.png")}
        /> */}
        {/* {ready && image && _renderImage()} */}
        <Image
          source={require("../../assets/Comics/comic1.png")}
          style={{ width: "100%" }}
          resizeMode="stretch"
        />
        <Image
          source={require("../../assets/Comics/comic2.png")}
          resizeMode="stretch"
        />
      </ScrollView>
    </Modal>
  );
};

export default ComicReader;
