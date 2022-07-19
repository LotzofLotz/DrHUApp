import React, { useState, useEffect } from "react";
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  Text,
} from "react-native";
import { MyText } from "../Global/MyText";
import IconPicker from "./IconPicker";
import Colors from "../../constants/colors";
import ColorPicker from "./ColorPicker";
import { MaterialIcons } from "@expo/vector-icons";
import { MMKV } from "react-native-mmkv";

const HabitDefinitionModal = (props) => {
  const [chosenIconName, setChosenIconName] = useState("");
  const [chosenColor, setChosenColor] = useState("");
  const [chosenName, setChosenName] = useState("");
  const [chosenAmount, setChosenAmount] = useState(0);
  // const [difficulty, setDifficulty] = useState()
  // const [notificiation, setNotification] = useState()

  const onIconPress = (name) => {
    setChosenIconName(name);
  };

  const storage = new MMKV();

  useEffect(() => {
    storage.set("name", "Hackerman");
  }, []);

  const onColorPress = (name) => {
    setChosenColor(name);
  };

  const saveHabit = () => {
    const username = storage.getString("name");
    console.log(":::::", username);
  };

  return (
    <View
    // style={{
    //   width: "100%",
    //   height: "100%",
    //   flex: 1,
    // }}
    >
      <Modal animationType="slide" transparent visible={props.modalVisible}>
        <TouchableWithoutFeedback
          onPress={() => {
            props.setModalVisible(false);
          }}
        >
          <View
            style={{
              // flex: 1,
              backgroundColor: props.modalVisible ? "rgba(0,0,0,0.5)" : "white", // Slidet leider mit rein
            }}
          >
            <TouchableWithoutFeedback onPress={() => {}}>
              <ScrollView style={styles.modalView}>
                <View style={{ justifyContent: "space-between" }}>
                  <View style={{ flex: 8, backgroundColor: "lightblue" }}>
                    {/* <View style={{ marginHorizontal: 10, marginTop: 10 }}> */}
                    <View>
                      <MyText content="Batterie erstellen" semiBold />
                    </View>

                    <TextInput
                      style={styles.input}
                      onChangeText={(name) => setChosenName(name)}
                      placeholder="Name des Habits"
                      keyboardType="default"
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
                    />
                    <TextInput
                      style={styles.input}
                      // onChangeText={onChangeNumber}
                      // value={number}
                      placeholder="Benachrichtigungen"
                      keyboardType="numeric"
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
                  <View style={{ flex: 1, backgroundColor: "lightgreen" }}>
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 20,
                      }}
                    >
                      <MyText content="Vorschläge" size={16} />
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
                  <View>
                    <MyText content="HIER KOMMEN VORSCHLÄGE" />
                    <MyText content=" Vorschlag 1" />
                    <MyText content=" Vorschlag 2" />
                    <MyText content=" Vorschlag 3" />
                    <MyText content=" Vorschlag 4" />
                  </View>
                </View>
              </ScrollView>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
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
    padding: 10,
  },
});

export default HabitDefinitionModal;
