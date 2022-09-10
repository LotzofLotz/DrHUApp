import React, { useState, useEffect } from "react";
import {
  View,
  //Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import IconPicker from "./IconPicker";
import Colors from "../../constants/Colors";
import ColorPicker from "./ColorPicker";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import RecommendationSquare from "./RecommendationSquare";
import HabitRecommendationModal from "./HabitRecommendationModal";

const HabitDefinitionModal = (props) => {
  const [chosenIconName, setChosenIconName] = useState("");
  const [chosenColor, setChosenColor] = useState("");
  const [chosenName, setChosenName] = useState("");
  const [chosenAmount, setChosenAmount] = useState(0);
  const [height, setHeight] = useState(0);
  const [recommendationModalVisible, setRecommendationModalVisible] =
    useState(false);
  const [chosenRecommendation, setChosenRecommendation] = useState("");
  // const [difficulty, setDifficulty] = useState()
  // const [notificiation, setNotification] = useState()

  const onIconPress = (name) => {
    setChosenIconName(name);
  };

  const onColorPress = (name) => {
    setChosenColor(name);
  };

  useState(() => {
    console.log(chosenRecommendation, recommendationModalVisible);
  }, [chosenRecommendation, recommendationModalVisible]);

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
        // BatteryCount: 0,
      };
      const jsonHabit = JSON.stringify(habit);
      await AsyncStorage.setItem("Habit_" + chosenName, jsonHabit);

      // Alert.alert(
      //   "Habit erfolgreich gespeichert",
      //   "du wirst das Habit jetzt im Home Screen sehen"
      // );
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
        chosenRecommendation={chosenRecommendation}
        setRecommendationModalVisible={setRecommendationModalVisible}
        recommendationModalVisible={recommendationModalVisible}
        getHabits={props.getHabits}
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
          onLayout={(e) => {
            const newHeight = e.nativeEvent.layout.height;
            setHeight(newHeight);
          }}
          style={{ alignItems: "center", justifyContent: "center" }}
        >
          <ScrollView style={styles.modalView}>
            <View>
              <View
                style={{
                  // height: height * 0.77,

                  //height: "78%",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ marginHorizontal: "4%", marginTop: "5%" }}>
                  <MyText content="Batterie erstellen" semiBold />
                </View>

                <TextInput
                  style={styles.input}
                  onChangeText={(name) => setChosenName(name)}
                  placeholder="Name des Habits"
                  keyboardType="default"
                  placeholderTextColor="grey"
                />

                {/* <TextInput
                    style={styles.input}
                    placeholder="Schwierigkeit"
                    keyboardType="default"
                  /> */}
                <TextInput
                  style={styles.input}
                  onChangeText={(amount) => setChosenAmount(amount)}
                  placeholder="Anzahl pro Woche"
                  keyboardType="numeric"
                  placeholderTextColor="grey"
                />
                <TextInput
                  style={styles.input}
                  // onChangeText={onChangeNumber}
                  // value={number}
                  placeholder="Benachrichtigungen"
                  keyboardType="numeric"
                  placeholderTextColor="grey"
                />
                <IconPicker
                  icons={[
                    "fitness-center",
                    "pool",
                    "sports-volleyball",
                    "sports-soccer",
                    "sports-esports",
                    "directions-bike",
                    "directions-run",
                  ]}
                  chosenIconName={chosenIconName}
                  setChosenIconName={setChosenIconName}
                  onIconPress={onIconPress}
                />
                <IconPicker
                  icons={[
                    "center-focus-weak",
                    "self-improvement",
                    "menu-book",
                    "volunteer-activism",
                    "no-food",
                    "no-drinks",
                    "school",
                  ]}
                  chosenIconName={chosenIconName}
                  setChosenIconName={setChosenIconName}
                  onIconPress={onIconPress}
                />

                <ColorPicker
                  onColorPress={onColorPress}
                  setChosenColor={setChosenColor}
                  chosenColor={chosenColor}
                />
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 30,
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
                      height: 45,
                      width: "80%",
                      backgroundColor: Colors.yellow,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 30,
                    }}
                  >
                    <MyText content="Speichern" semiBold size={15} />
                  </TouchableOpacity>
                </View>
                {/* </View> */}
              </View>
              <View>
                <View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 20,
                    }}
                  >
                    <MyText content="Der Doktor empfiehlt" size={16} />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <View
                      style={{
                        marginTop: 20,
                        borderBottomColor: Colors.primaryLight,
                        borderBottomWidth: 1,
                        width: "34%",
                      }}
                    />
                    <MaterialIcons // Mit flexbox content so anpassen, dass das hier immer noch grade so zu sehen ist...
                      style={{ top: 10 }}
                      name="keyboard-arrow-down"
                      size={24}
                      color={Colors.primaryDark}
                    />
                    <View
                      style={{
                        marginTop: 20,
                        borderBottomColor: Colors.primaryLight,
                        borderBottomWidth: 1,
                        width: "34%",
                      }}
                    />
                  </View>
                </View>
                <View style={{ margin: 10 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: 4,
                    }}
                  >
                    <RecommendationSquare
                      name={"Fappen"}
                      setChosenRecommendation={setChosenRecommendation}
                      setRecommendationModalVisible={
                        setRecommendationModalVisible
                      }
                      setModalVisible={props.setModalVisible}
                      getHabits={props.getHabits}
                    />
                    <RecommendationSquare name={"Hacken"} />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: 4,
                    }}
                  >
                    <RecommendationSquare name={"Joggen"} />
                    <RecommendationSquare name={"Fasten"} />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      margin: 4,
                    }}
                  >
                    <RecommendationSquare name={"Achtsamkeit"} />
                    <RecommendationSquare name={"DigitalDetox"} />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    padding: 8,
    backgroundColor: "white",
    margin: 30,
    borderRadius: 10,
    width: "100%",
    // shadowColor: "black", // shadow for ios , elevation for android
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,
    // elevation: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryDark,
    padding: 10,
  },
});

export default HabitDefinitionModal;
