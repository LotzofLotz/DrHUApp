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
        console.log("PREESSED!!!");
        props.setModalOpen(true);
        props.setChosenRecommendation(props.name);
        props.setRecommendationModalVisible(true);
        props.setModalVisible(false);
        console.log("PREESSED2!!!");
      }}
    >
      <View
        style={{
          height: width * 0.4,
          width: width * 0.4,
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
          padding: 4,
          // flex: 1,
        }}
      >
        <View
          style={{ flex: 3, justifyContent: "center", alignItems: "center" }}
        >
          <Icon
            size={width * 0.18}
            color={Colors.primaryDark}
            name={recommendation.icon}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MyText
            content={recommendation.name}
            center
            size={width * 0.042}
            semiBold
          />
        </View>
        <View style={{ flex: 0.7 }}>
          <MyText
            content={recommendation.category}
            size={width * 0.03}
            color={recommendation.color}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RecommendationSquare;
