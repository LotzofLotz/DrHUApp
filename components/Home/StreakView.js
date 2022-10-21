import React from "react";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import { MyText } from "../Global/MyText";

const StreakView = ({
  currentStreak,
  longestStreak,
  batteries,
  color,
  ratio,
  height,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        //   margin: "1%",
        justifyContent: "space-around",
        width: "100%",
        marginBottom: "2%",
        marginTop: "1%",
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MyText content="aktuelle" size={ratio * 9} />
        <View style={{ bottom: 4 }}>
          <MyText content="Streak" size={ratio * 9} />
        </View>
        <View
          style={{
            height: height * 0.06,
            width: height * 0.06,
            borderRadius: 420,
            backgroundColor: color,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MyText content={currentStreak} color="white" size={height * 0.03} />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MyText content="längste" size={ratio * 9} />
        <View style={{ bottom: 4 }}>
          <MyText content="Streak" size={ratio * 9} />
        </View>
        <View
          style={{
            height: height * 0.06,
            width: height * 0.06,
            borderRadius: 420,
            backgroundColor: Colors.primaryDark,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MyText content={longestStreak} color="white" size={height * 0.03} />
        </View>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MyText content="Batterien" size={ratio * 9} />
        <View style={{ bottom: 4 }}>
          <MyText content="verdient" size={ratio * 9} />
        </View>
        <View
          style={{
            height: height * 0.06,
            width: height * 0.06,
            borderRadius: 420,
            backgroundColor: Colors.yellow,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MyText content={batteries} color="white" size={height * 0.03} />
        </View>
      </View>
    </View>
  );
};

export default StreakView;
