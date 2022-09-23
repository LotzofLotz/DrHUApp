import React from "react";
import { View, TouchableWithoutFeedback, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../../constants/Colors";
import { MyText } from "../Global/MyText";
import { MyRecommendations } from "../Global/MyRecommendations";

const RecommendationSquare = (props) => {
  const width = Dimensions.get("window").width;
  const recommendation = MyRecommendations[props.name];

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.setRecommendationModalVisible(true);
        props.setModalOpen(true);
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
        <Icon size={50} color={Colors.primaryDark} name={recommendation.icon} />
        <MyText content={props.name} />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RecommendationSquare;
