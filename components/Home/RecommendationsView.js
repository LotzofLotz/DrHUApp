import React from "react";
import { View } from "react-native";
import RecommendationSquare from "./RecommendationSquare";

const RecommendationsView = (props) => {
  return (
    <View style={{ margin: 10 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 4,
        }}
      >
        <RecommendationSquare
          name={"Schlafen"}
          setChosenRecommendation={props.setChosenRecommendation}
          setRecommendationModalVisible={props.setRecommendationModalVisible}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setModalOpen={props.setModalOpen}
        />
        <RecommendationSquare
          name={"Workout"}
          setChosenRecommendation={props.setChosenRecommendation}
          setRecommendationModalVisible={props.setRecommendationModalVisible}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setModalOpen={props.setModalOpen}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 4,
        }}
      ></View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 4,
        }}
      ></View>
    </View>
  );
};

export default RecommendationsView;
