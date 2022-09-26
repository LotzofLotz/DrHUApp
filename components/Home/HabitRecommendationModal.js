import React, { useState, useEffect } from "react";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import {
  View,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";
import Colors from "../../constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MyRecommendations } from "../Global/MyRecommendations";
import { Icon } from "react-native-elements";

const HabitRecommendationModal = (props) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState("Mittel");
  const [amount, setAmount] = useState(3);
  // const content =
  //   "Dieses Habit ist besonders empfehlenswert, weil es sehr gesund für dich ist. hör einfach auf mich und mache es !";

  const recommendation = MyRecommendations[props.chosenRecommendation];
  const modalHeight =
    Dimensions.get("window").height * 0.9 > 700
      ? 700
      : Dimensions.get("window").height * 0.9;

  // useEffect(() => {
  //   console.log("recom:", recommendation.name);
  // }, [recommendation]);

  const saveRecommendation = async () => {
    try {
      const habit = {
        Name: props.chosenRecommendation, //recommendation.name nicht
        Amount: amount.toString(), //keine ahnung wieso, aber muss hier stringifien
        Icon: recommendation?.icon,
        Color: recommendation?.color,
        Notifications: "will be added later",
        Sessions: [],
        PerfectWeeks: [],
        Recommended: true,
      };
      const jsonHabit = JSON.stringify(habit);
      await AsyncStorage.setItem(
        "Habit_" + props.chosenRecommendation,
        jsonHabit
      );
      props.getHabits();
      props.setRecommendationModalVisible(false);
      props.setModalOpen(false);
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
          props.setModalOpen(false);
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
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              // marginTop: modalHeight * 0.02,
            }}
          >
            <MyText
              size={modalHeight * 0.025}
              content={recommendation?.category}
              color={
                recommendation?.category == "physisch"
                  ? Colors.primaryLight
                  : "#BF8CA2"
              }
            />
            <TouchableOpacity
              onPress={() => (
                props.setRecommendationModalVisible(false),
                props.setModalOpen(false)
              )}
            >
              <Icon
                size={modalHeight * 0.036}
                color={Colors.primaryDark}
                name={"close"}
              />
            </TouchableOpacity>
          </View>

          <Icon
            size={modalHeight * 0.15}
            color={Colors.primaryDark}
            name={recommendation?.icon}
          />
          <MyText content={recommendation?.name} size={modalHeight * 0.052} />
          <MyText
            content={amount + "x pro Woche"}
            size={modalHeight * 0.025}
            color={
              recommendation?.category == "physisch"
                ? Colors.primaryLight
                : "#BF8CA2"
            }
          />
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
                  height: modalHeight * 0.042,
                  width: modalHeight * 0.15,
                  borderWidth: 1,
                  borderColor:
                    selectedDifficulty == "Einfach" &&
                    recommendation?.category == "physisch"
                      ? Colors.primaryLight
                      : selectedDifficulty == "Einfach" &&
                        recommendation?.category == "psychisch"
                      ? "#BF8CA2"
                      : Colors.primaryDark,

                  borderRadius: modalHeight * 0.03,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    selectedDifficulty == "Einfach" &&
                    recommendation?.category == "physisch"
                      ? Colors.primaryLight
                      : selectedDifficulty == "Einfach" &&
                        recommendation?.category == "psychisch"
                      ? "#BF8CA2"
                      : "white",
                }}
              >
                <MyText
                  content="Einfach"
                  size={modalHeight * 0.023}
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
                  height: modalHeight * 0.042,
                  width: modalHeight * 0.15,
                  borderWidth: 1,
                  borderColor:
                    selectedDifficulty == "Mittel" &&
                    recommendation?.category == "physisch"
                      ? Colors.primaryLight
                      : selectedDifficulty == "Mittel" &&
                        recommendation?.category == "psychisch"
                      ? "#BF8CA2"
                      : Colors.primaryDark,
                  borderRadius: modalHeight * 0.03,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    selectedDifficulty == "Mittel" &&
                    recommendation?.category == "physisch"
                      ? Colors.primaryLight
                      : selectedDifficulty == "Mittel" &&
                        recommendation?.category == "psychisch"
                      ? "#BF8CA2"
                      : "white",
                }}
              >
                <MyText
                  content="Mittel"
                  size={modalHeight * 0.023}
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
                  height: modalHeight * 0.042,
                  width: modalHeight * 0.15,
                  borderWidth: 1,
                  borderColor:
                    selectedDifficulty == "Schwer" &&
                    recommendation?.category == "physisch"
                      ? Colors.primaryLight
                      : selectedDifficulty == "Schwer" &&
                        recommendation?.category == "psychisch"
                      ? "#BF8CA2"
                      : Colors.primaryDark,
                  borderRadius: modalHeight * 0.03,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:
                    selectedDifficulty == "Schwer" &&
                    recommendation?.category == "physisch"
                      ? Colors.primaryLight
                      : selectedDifficulty == "Schwer" &&
                        recommendation?.category == "psychisch"
                      ? "#BF8CA2"
                      : "white",
                }}
              >
                <MyText
                  content="Schwer"
                  size={modalHeight * 0.023}
                  color={selectedDifficulty == "Schwer" ? "white" : "black"}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginTop: modalHeight * 0.028,
              borderBottomColor: Colors.primaryLight,
              borderBottomWidth: 1,
              width: "90%",
            }}
          />
          <View
            style={{
              marginTop: modalHeight * 0.02,
              paddingHorizontal: modalHeight * 0.018,
            }}
          >
            <MyText
              content={
                "Warum empfiehlt der Doktor " + recommendation?.name + "?"
              }
            />
            <MyText
              content={recommendation?.content}
              size={modalHeight * 0.023}
            />
            <View
              style={{
                borderWidth: 1,
                borderColor: recommendation?.color,
                borderRadius: 10,
                alignSelf: "baseline",
                paddingHorizontal: 5,
                marginTop: modalHeight * 0.01,
              }}
            >
              <TouchableOpacity
                onPress={() => Linking.openURL(recommendation.link)}
              >
                <MyText
                  content={"Mehr Informationen"}
                  size={modalHeight * 0.02}
                  color={recommendation?.color}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginTop: modalHeight * 0.027,
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
                  content={recommendation?.quote}
                  italic
                  size={modalHeight * 0.024}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Image
                  source={require("../../assets/DRHUFace.png")}
                  style={{
                    width: modalHeight * 0.09,
                    height: modalHeight * 0.09,
                  }}
                />
              </View>
            </View>
            <TouchableOpacity onPress={() => saveRecommendation()}>
              <View
                style={{
                  borderRadius: 20,
                  backgroundColor: Colors.yellow,
                  margin: modalHeight * 0.02,
                  paddingHorizontal: modalHeight * 0.03,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MyText content={recommendation?.name + " hinzufügen"} center />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HabitRecommendationModal;
