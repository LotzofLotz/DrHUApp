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
          borderColor: Colors.primaryDark,
          borderWidth: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgrey",
        }}
      >
        <Image
          source={require("../../assets/NAVBarLaborIcon.png")}
          style={{ width: 50, height: 50 }}
        />
        <MyText content={props.name} />
      </View>
    </TouchableOpacity>
  );
};

export default RecommendationSquare;
