import React from "react";
import { View, TouchableOpacity, Dimensions, Image } from "react-native";
import Colors from "../../constants/Colors";
import { MyText } from "../Global/MyText";

const RecommendationSquare = (props) => {
  const width = Dimensions.get("window").width;
  return (
    <TouchableOpacity
      onPress={() => {
        props.setRecommendationModalVisible(true);
        props.setChosenRecommendation(props.name);
        props.setModalVisible(false);
      }}
    >
      <View
        style={{
          height: width * 0.38,
          width: width * 0.38,
          borderRadius: 27,
          elevation: 3,
          // borderWidth: 2,
          borderColor: "#F6F6F6",

          shadowColor: "#171717",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          backgroundColor: "#F6F6F6", //?? imo zu weiß
          borderWidth: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/DRHUFace.png")}
          style={{ width: 50, height: 50 }}
        />
        <MyText content={props.name} />
      </View>
    </TouchableOpacity>
  );
};

export default RecommendationSquare;
