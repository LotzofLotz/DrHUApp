import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
  Keyboard,
  Platform,
} from "react-native";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HabitRecommendationModal from "./HabitRecommendationModal";
import RecommendationsView from "./RecommendationsView";
import PickerView from "./PickerView";
import { Icon } from "react-native-elements";

const HabitDefinitionModal = (props) => {
  const [chosenIconName, setChosenIconName] = useState("");
  const [chosenColor, setChosenColor] = useState("");
  const [chosenName, setChosenName] = useState("");
  const [chosenAmount, setChosenAmount] = useState(0);
  const [recommendationModalVisible, setRecommendationModalVisible] =
    useState(false);
  const [chosenRecommendation, setChosenRecommendation] = useState("");
  const modalHeight =
    Dimensions.get("window").height * 0.9 > 700
      ? 740
      : Dimensions.get("window").height * 0.9;

  const onIconPress = (name) => {
    setChosenIconName(name);
  };

  const onColorPress = (name) => {
    setChosenColor(name);
  };

  const saveHabit = async () => {
    try {
      const habit = {
        Name: chosenName,
        Amount: chosenAmount,
        Icon: chosenIconName,
        Color: chosenColor,
        Notifications: "will be added later",
        Sessions: [],
        PerfectWeeks: [],
        Recommended: false,
      };
      const jsonHabit = JSON.stringify(habit);
      await AsyncStorage.setItem("Habit_" + chosenName, jsonHabit);
      props.getHabits();
      props.setModalVisible(false);
      setChosenColor(""), setChosenIconName("");
    } catch (e) {
      console.log("error:", e);
    }
  };

  return (
    <View>
      <HabitRecommendationModal
        // avoidKeyboard={true}
        chosenRecommendation={chosenRecommendation}
        setRecommendationModalVisible={setRecommendationModalVisible}
        recommendationModalVisible={recommendationModalVisible}
        getHabits={props.getHabits}
        setModalOpen={props.setModalOpen}
      />
      <Modal
        isVisible={props.modalVisible}
        animationIn="slideInDown"
        backdropColor={"#132224"}
        backdropOpacity={0.6}
        animationOut="slideOutUp"
        useNativeDriver={true}
        onBackdropPress={() => {
          props.setModalVisible(false),
            setChosenColor(""),
            setChosenIconName("");
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            maxHeight: modalHeight,
          }}
        >
          <ScrollView
            style={{
              backgroundColor: "white",
              borderRadius: 10,
              width: "100%",
              margin: "4%",
              padding: "4%",
            }}
          >
            <View
              style={{
                height: modalHeight * 0.07,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <MyText
                content="Batterie erstellen"
                semiBold
                size={modalHeight * 0.04}
              />
              <TouchableOpacity
                onPress={() => {
                  props.setModalVisible(false);
                  setChosenColor(""), setChosenIconName("");
                }}
              >
                <Icon name="close" />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: modalHeight * 0.3,

                justifyContent: "space-between",
                // margin: "1%",
                paddingVertical: "3%",
              }}
            >
              <TextInput
                style={{
                  fontSize: modalHeight * 0.03,
                  height: modalHeight * 0.07,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.primaryDark,
                }}
                onChangeText={(name) => setChosenName(name)}
                placeholder=" Name des Habits"
                keyboardType="default"
                placeholderTextColor="grey"
                maxLength={25}
              />
              <TextInput
                style={{
                  fontSize: modalHeight * 0.03,
                  height: modalHeight * 0.07,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.primaryDark,
                }}
                onChangeText={(amount) => setChosenAmount(amount)}
                placeholder=" Anzahl pro Woche"
                keyboardType="numeric"
                placeholderTextColor="grey"
              />
              <TextInput
                style={{
                  fontSize: modalHeight * 0.03,
                  height: modalHeight * 0.07,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.primaryDark,
                }}
                placeholder=" Benachrichtigungen"
                keyboardType="numeric"
                placeholderTextColor="grey"
              />
            </View>

            <PickerView
              modalHeight={modalHeight}
              chosenIconName={chosenIconName}
              setChosenIconName={setChosenIconName}
              onIconPress={onIconPress}
              onColorPress={onColorPress}
              setChosenColor={setChosenColor}
              chosenColor={chosenColor}
            />

            <View>
              <View
                style={{
                  height: modalHeight * 0.08,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    chosenName != "" &&
                    chosenAmount != 0 &&
                    chosenColor != "" &&
                    chosenIconName != ""
                      ? saveHabit()
                      : Alert.alert("Fülle erst alle Felder aus");
                  }}
                  style={{
                    height: modalHeight * 0.06,
                    width: "80%",
                    backgroundColor: Colors.yellow,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 30,
                  }}
                >
                  <MyText
                    content="Speichern"
                    semiBold
                    size={modalHeight * 0.025}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <View
                  style={{
                    height: modalHeight * 0.1,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "4%",
                    }}
                  >
                    <MyText
                      content="Der Doktor empfiehlt"
                      size={modalHeight * 0.022}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <View
                      style={{
                        marginTop: "4%",
                        borderBottomColor: Colors.primaryLight,
                        borderBottomWidth: 1,
                        width: "42%",
                      }}
                    />
                    <MaterialIcons
                      style={{ top: modalHeight * 0.018 }}
                      name="keyboard-arrow-down"
                      size={24}
                      color={Colors.primaryDark}
                    />
                    <View
                      style={{
                        marginTop: "4%",
                        borderBottomColor: Colors.primaryLight,
                        borderBottomWidth: 1,
                        width: "45%",
                      }}
                    />
                  </View>
                </View>

                <RecommendationsView
                  setChosenRecommendation={setChosenRecommendation}
                  setRecommendationModalVisible={setRecommendationModalVisible}
                  setModalVisible={props.setModalVisible}
                  getHabits={props.getHabits}
                  setModalOpen={props.setModalOpen}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default HabitDefinitionModal;
