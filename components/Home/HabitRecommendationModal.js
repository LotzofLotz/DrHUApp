import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import { View, Image, TouchableOpacity } from "react-native";
import Colors from "../../constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";

const HabitRecommendationModal = (props) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("Mittel");
  const [amount, setAmount] = useState(3);
  const content =
    "Dieses Habit ist besonders empfehlenswert, weil es sehr gesund für dich ist. hör einfach auf mich und mache es !";

  const saveRecommendation = async () => {
    try {
      const habit = {
        Name: props.chosenRecommendation,
        Amount: amount.toString(), //keine ahnung wieso, aber muss hier stringifien
        Icon: "no-food",
        Color: "green",
        Notifications: "will be added later",
        Sessions: [],
        PerfectWeeks: [],
        BatteryCount: 0,
      };
      const jsonHabit = JSON.stringify(habit);
      await AsyncStorage.setItem(
        "Habit_" + props.chosenRecommendation,
        jsonHabit
      );
      props.getHabits();
      props.setRecommendationModalVisible(false);
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <View>
      <Modal
        isVisible={props.recommendationModalVisible}
        animationIn="slideInUp"
        backdropColor={"#132224"}
        backdropOpacity={0.6}
        animationOut="slideOutDown"
        useNativeDriver={true}
        onBackdropPress={() => {
          props.setRecommendationModalVisible(false);
          setSelectedDifficulty("Mittel");
          setAmount(3);
        }}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            borderRadius: 16,
            // backgroundColor: "lightgrey",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/DRHUFace.png")}
            style={{ width: 100, height: 100 }}
          />
          <MyText content={props.chosenRecommendation} size={35} />
          <MyText content={amount + "x pro Woche"} size={16} />
          <View
            style={{
              marginTop: "4%",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setSelectedDifficulty("Einfach"), setAmount(1);
              }}
            >
              <View
                style={{
                  height: 29,
                  width: 90,
                  borderWidth: 1,
                  borderColor:
                    selectedDifficulty == "Einfach"
                      ? Colors.primaryLight
                      : Colors.primaryDark,

                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  backgroundColor:
                    selectedDifficulty == "Einfach"
                      ? Colors.primaryLight
                      : "white",
                }}
              >
                <MyText
                  content="Einfach"
                  size={16}
                  color={selectedDifficulty == "Einfach" ? "white" : "black"}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedDifficulty("Mittel"), setAmount(3);
              }}
            >
              <View
                style={{
                  height: 29,
                  width: 90,
                  borderWidth: 1,
                  borderColor:
                    selectedDifficulty == "Mittel"
                      ? Colors.primaryLight
                      : Colors.primaryDark,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  backgroundColor:
                    selectedDifficulty == "Mittel"
                      ? Colors.primaryLight
                      : "white",
                }}
              >
                <MyText
                  content="Mittel"
                  size={16}
                  color={selectedDifficulty == "Mittel" ? "white" : "black"}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setSelectedDifficulty("Schwer"), setAmount(5);
              }}
            >
              <View
                style={{
                  height: 29,
                  width: 90,
                  borderWidth: 1,
                  borderColor:
                    selectedDifficulty == "Schwer"
                      ? Colors.primaryLight
                      : Colors.primaryDark,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  backgroundColor:
                    selectedDifficulty == "Schwer"
                      ? Colors.primaryLight
                      : "white",
                }}
              >
                <MyText
                  content="Schwer"
                  size={16}
                  color={selectedDifficulty == "Schwer" ? "white" : "black"}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: 20,
              borderBottomColor: Colors.primaryLight,
              borderBottomWidth: 1,
              width: "90%",
            }}
          />
          <View style={{ marginTop: "4%", paddingHorizontal: "3%" }}>
            <MyText
              content={
                "Warum empfiehlt der Doktor " + props.chosenRecommendation + "?"
              }
            />
            <MyText content={content} size={16} />
            <MyText
              content={"Wenn du mir nicht glaubst, dann guck halt hier: "}
              size={16}
            />
            <View
              style={{
                // height: 30,
                borderWidth: 1,
                borderColor: Colors.primaryLight,
                borderRadius: 10,
                alignSelf: "baseline",
                paddingHorizontal: 5,
              }}
            >
              <TouchableOpacity>
                <MyText
                  content={"Mehr Informationen"}
                  size={12}
                  color={Colors.primaryLight}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              borderBottomColor: Colors.primaryLight,
              borderBottomWidth: 1,
              width: "90%",
            }}
          />
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "4%",
              }}
            >
              <View
                style={{
                  flex: 3,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MyText
                  content={"Crazy Spruch lmfao lelmao xd"}
                  italic
                  size={16}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Image
                  source={require("../../assets/DRHUFace.png")}
                  style={{ width: 60, height: 60 }}
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => saveRecommendation()}>
              <View
                style={{
                  //   width: "100%",
                  height: 40,
                  borderRadius: 20,
                  backgroundColor: Colors.yellow,
                  margin: 10,
                  paddingHorizontal: "10%",
                  //   marginHorizontal: "15%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MyText content={props.chosenRecommendation + " hinzufügen"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HabitRecommendationModal;
