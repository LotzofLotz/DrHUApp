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
      >
        <RecommendationSquare
          name={"Schritte"}
          setChosenRecommendation={props.setChosenRecommendation}
          setRecommendationModalVisible={props.setRecommendationModalVisible}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setModalOpen={props.setModalOpen}
        />
        <RecommendationSquare
          name={"Muskelrelaxation"}
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
      >
        <RecommendationSquare
          name={"Kochen"}
          setChosenRecommendation={props.setChosenRecommendation}
          setRecommendationModalVisible={props.setRecommendationModalVisible}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setModalOpen={props.setModalOpen}
        />
        <RecommendationSquare
          name={"Abstinenz"}
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
      >
        <RecommendationSquare
          name={"Trinken"}
          setChosenRecommendation={props.setChosenRecommendation}
          setRecommendationModalVisible={props.setRecommendationModalVisible}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setModalOpen={props.setModalOpen}
        />
        <RecommendationSquare
          name={"Pause"}
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
      >
        <RecommendationSquare
          name={"Trinken"}
          setChosenRecommendation={props.setChosenRecommendation}
          setRecommendationModalVisible={props.setRecommendationModalVisible}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setModalOpen={props.setModalOpen}
        />
        <RecommendationSquare
          name={"Atemübungen"}
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
      >
        <RecommendationSquare
          name={"Augengymnastik"}
          setChosenRecommendation={props.setChosenRecommendation}
          setRecommendationModalVisible={props.setRecommendationModalVisible}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setModalOpen={props.setModalOpen}
        />
        <RecommendationSquare
          name={"Achtsamkeit"}
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
      >
        <RecommendationSquare
          name={"DigitalDetox"}
          setChosenRecommendation={props.setChosenRecommendation}
          setRecommendationModalVisible={props.setRecommendationModalVisible}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setModalOpen={props.setModalOpen}
        />
        <RecommendationSquare
          name={"Neues"}
          setChosenRecommendation={props.setChosenRecommendation}
          setRecommendationModalVisible={props.setRecommendationModalVisible}
          setModalVisible={props.setModalVisible}
          getHabits={props.getHabits}
          setModalOpen={props.setModalOpen}
        />
      </View>
    </View>
  );
};

export default RecommendationsView;
