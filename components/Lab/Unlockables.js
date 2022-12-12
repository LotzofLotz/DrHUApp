import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import { FontAwesome5, FontAwesome } from "@expo/vector-icons";

const Unlockables = ({ color, level }) => {
  const height = Dimensions.get("window").height;
  return (
    <View
      style={{
        // marginTop: "8%",
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: height * 0.08,
          height: height * 0.08,
          borderRadius: 69,
          backgroundColor: level >= 1 ? color : "#D1DFE1",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5
          name="file"
          size={30}
          color={level >= 1 ? "white" : "grey"}
        />
        <View
          style={{
            position: "absolute",
            left: height * 0.055,
            top: height * 0.055,
            width: height * 0.028,
            height: height * 0.028,
            borderRadius: 420,
            backgroundColor: level >= 1 ? Colors.primaryDark : "grey",
            justifyContent: "center",
          }}
        >
          <Icon
            name={level >= 1 ? "check" : "lock"}
            color="white"
            size={height * 0.02}
          />
        </View>
      </View>
      <View
        style={{
          width: height * 0.08,
          height: height * 0.08,
          borderRadius: 69,
          backgroundColor: level >= 2 ? color : "#D1DFE1",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5
          name="palette"
          size={30}
          color={level >= 2 ? "white" : "grey"}
        />
        <View
          style={{
            position: "absolute",
            left: height * 0.055,
            top: height * 0.055,
            width: height * 0.028,
            height: height * 0.028,
            borderRadius: 420,
            backgroundColor: level >= 2 ? Colors.primaryDark : "grey",
            justifyContent: "center",
          }}
        >
          <Icon
            name={level >= 2 ? "check" : "lock"}
            color="white"
            size={height * 0.02}
          />
        </View>
      </View>
      <View
        style={{
          width: height * 0.08,
          height: height * 0.08,
          borderRadius: 69,
          backgroundColor: level >= 3 ? color : "#D1DFE1",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FontAwesome5
          name="user"
          size={30}
          color={level >= 3 ? "white" : "grey"}
        />
        <View
          style={{
            position: "absolute",
            left: height * 0.055,
            top: height * 0.055,
            width: height * 0.028,
            height: height * 0.028,
            borderRadius: 420,
            backgroundColor: level >= 3 ? Colors.primaryDark : "grey",
            justifyContent: "center",
          }}
        >
          <Icon
            name={level >= 3 ? "check" : "lock"}
            color="white"
            size={height * 0.02}
          />
        </View>
      </View>
    </View>
  );
};

export default Unlockables;
