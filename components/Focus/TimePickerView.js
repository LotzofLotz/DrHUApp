import React from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { MyText } from "../Global/MyText";

const TimePickerView = ({ setChosenTime, chosenTime }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      {/* <MyText content="Wie lange willst du deine Energie fokussieren? " /> */}

      <View
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FontAwesome
          color={chosenTime < 100 ? Colors.primaryDark : "lightgrey"}
          name={"caret-up"}
          size={50}
          onPress={() => {
            chosenTime < 100 ? setChosenTime(chosenTime + 5) : {};
          }}
        />

        <View
          style={{
            width: "50%",
            height: 50,
            borderWidth: 2,
            borderColor: Colors.primaryDark,
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <MyText
            content={chosenTime + " min"}
            size={30}
            center
            color={Colors.primaryDark}
            bold
          />
        </View>
        <FontAwesome
          color={chosenTime > 30 ? Colors.primaryDark : "lightgrey"}
          name={"caret-down"}
          size={50}
          onPress={() => {
            chosenTime > 30 ? setChosenTime(chosenTime - 5) : {};
          }}
        />
      </View>
    </View>
  );
};

export default TimePickerView;
