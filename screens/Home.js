import React, { useState } from "react";
import { View, ScrollView, Modal } from "react-native";
import MyHeader from "../components/Global/MyHeader";
import HabitSlot from "../components/Home/HabitSlot";
import HabitDefinitionModal from "../components/Home/HabitDefinitionModal";

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Modal animationType="slide" transparent={true} visible={modalVisible} />

      <MyHeader title="Energiesammlung" />

      <HabitDefinitionModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 25,
          }}
        >
          <HabitSlot
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <HabitSlot />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 25,
          }}
        >
          <HabitSlot />
          <HabitSlot />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 25,
          }}
        >
          <HabitSlot />
          <HabitSlot />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: 25,
          }}
        >
          <HabitSlot />
          <HabitSlot />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
