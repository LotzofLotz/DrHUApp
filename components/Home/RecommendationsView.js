import React from "react";
import { View } from "react-native";
import RecommendationSquare from "./RecommendationSquare";

const RecommendationsView = (props) => {
  return (
    <View style={{ marginVertical: "7%" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: "4%",
        }}
      >
        <RecommendationSquare
          name={"Schlafen"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
        <RecommendationSquare
          name={"Workout"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: "2%",
        }}
      >
        <RecommendationSquare
          name={"Schritte"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
        <RecommendationSquare
          name={"Muskelrelaxation"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: "2%",
        }}
      >
        <RecommendationSquare
          name={"Kochen"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
        <RecommendationSquare
          name={"Abstinenz"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: "2%",
        }}
      >
        <RecommendationSquare
          name={"Trinken"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
        <RecommendationSquare
          name={"Pause"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: "2%",
        }}
      >
        <RecommendationSquare
          name={"Trinken"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
        <RecommendationSquare
          name={"Atemübungen"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: "2%",
        }}
      >
        <RecommendationSquare
          name={"Augengymnastik"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
        <RecommendationSquare
          name={"Achtsamkeit"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginVertical: "2%",
        }}
      >
        <RecommendationSquare
          name={"DigitalDetox"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
        <RecommendationSquare
          name={"Neues"}
          setChosenRecommendation={props.setChosenRecommendation}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setRecommendationModalOpen={props.setRecommendationModalOpen}
        />
      </View>
    </View>
  );
};

export default RecommendationsView;
