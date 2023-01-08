import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { ScrollView, Image, Dimensions, View, FlatList } from "react-native";
import Comic_run from "../../assets/Comics/Comic_run";
import Comic_Try from "../../assets/Comics/Comic_Try";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Asset } from "expo-asset";

const ComicReader = ({ isVisible, setReaderVisible }) => {
  // const width = Dimensions.get("window").width;
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [height, setHeight] = useState(Dimensions.get("window").height);
  const [state, setState] = useState();

  const [ready, setReady] = useState(false);
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const image = Asset.fromModule(
        require("../../assets/Comics/runComic3.png")
      );
      await image.downloadAsync();
      setImage(image);
      setReady(true);
    })();
  }, []);

  const _renderImage = () => (
    <Image source={{ uri: image.localUri }} style={{ width: width }} />
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
        <Image
          style={{ width: width, height: 710 * (width / 528) }}
          source={require("../../assets/Comics/Prolog/prolog1.png")}
          // resizeMode="contain"
        />
        <Image
          style={{ width: width, height: 605 * (width / 531) }}
          source={require("../../assets/Comics/Prolog/prolog2.png")}
          // resizeMode="contain"
        />
        <Image
          style={{ width: width, height: 817 * (width / 529) }}
          source={require("../../assets/Comics/Prolog/prolog3.png")}
        />
        <Image
          style={{ width: width, height: 714 * (width / 527) }}
          source={require("../../assets/Comics/Prolog/prolog4.png")}
          // resizeMode="contain"
        />
        <Image
          style={{ width: width, height: 499 * (width / 527) }}
          source={require("../../assets/Comics/Prolog/prolog5.png")}
          resizeMode="contain"
        />
        {/* <View> */}
        {/* <Image
          style={{ width: width, height: 2360 }}
          source={require("../../assets/Comics/runComic3.png")}
          resizeMode="stretch"
        /> */}
        {/* </View> */}
        {/* {ready && image && _renderImage()}
        <Image
          style={{ width: width, height: 2400 }}
          source={image}
          resizeMode="contain"
        /> */}
        {/* <Image
          source={require("../../assets/Comics/comic2.png")}
          resizeMode="stretch"
        /> */}
      </ScrollView>
    </Modal>
  );
};

export default ComicReader;
