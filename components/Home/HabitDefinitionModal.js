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
      ? 700
      : Dimensions.get("window").height * 0.9;

  // const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  // useEffect(() => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     "keyboardDidShow",
  //     () => {
  //       setKeyboardVisible(true); // or some other action
  //     }
  //   );
  //   const keyboardDidHideListener = Keyboard.addListener(
  //     "keyboardDidHide",
  //     () => {
  //       setKeyboardVisible(false); // or some other action
  //     }
  //   );

  //   return () => {
  //     keyboardDidHideListener.remove();
  //     keyboardDidShowListener.remove();
  //   };
  // }, []);

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
        avoidKeyboard={true}
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
              padding: "1%",
              backgroundColor: "white",
              borderRadius: 10,
              width: "100%",
              margin: modalHeight * 0.01,
              padding: modalHeight * 0.015,
            }}
          >
            <View
              style={{
                height: modalHeight * 0.08,
                justifyContent: "center",
              }}
            >
              <MyText
                content="Batterie erstellen"
                semiBold
                size={modalHeight * 0.034}
              />
            </View>
            <View
              style={{
                height: modalHeight * 0.33,
                justifyContent: "space-evenly",
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
                placeholder="Name des Habits"
                keyboardType="default"
                placeholderTextColor="grey"
              />
              <TextInput
                style={{
                  fontSize: modalHeight * 0.03,
                  height: modalHeight * 0.07,
                  borderBottomWidth: 1,
                  borderBottomColor: Colors.primaryDark,
                }}
                onChangeText={(amount) => setChosenAmount(amount)}
                placeholder="Anzahl pro Woche"
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
                placeholder="Benachrichtigungen"
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

            {/* {isKeyboardVisible == false || Platform.OS == "ios" ? ( */}
            <View>
              <View
                style={{
                  height: modalHeight * 0.1,
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
                        width: "34%",
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
                        width: "34%",
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
            {/* ) : (
              <View />
            )} */}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default HabitDefinitionModal;
