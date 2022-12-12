import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { Icon } from "react-native-elements";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

const UnlockabledOnLvlUp = ({ color, level, nextColor }) => {
  const height = Dimensions.get("window").height;

  return (
    <View
      style={{
        marginTop: "10%",
        width: "90%",
        justifyContent: "center",
      }}
    >
      {level == 2 ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
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
            <View>
              <MyText content="Farbe" center size={height * 0.02} />
            </View>
          </View>

          <View>
            <View
              style={{
                width: height * 0.08,
                height: height * 0.08,
                borderRadius: 69,
                backgroundColor: nextColor,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome5 name="wrench" size={30} color={"white"} />
              <View
                style={{
                  position: "absolute",
                  left: height * 0.055,
                  top: height * 0.055,
                  width: height * 0.028,
                  height: height * 0.028,
                  borderRadius: 420,
                  backgroundColor: Colors.primaryDark,
                  justifyContent: "center",
                }}
              >
                <Icon name={"check"} color="white" size={height * 0.02} />
              </View>
            </View>
            <View>
              <MyText content="Maschine" center size={height * 0.02} />
            </View>
          </View>

          <View>
            <View
              style={{
                width: height * 0.08,
                height: height * 0.08,
                borderRadius: 69,
                backgroundColor: nextColor,
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
                <Icon name="check" color="white" size={height * 0.02} />
              </View>
            </View>
            <View>
              <MyText content="Comic" center size={height * 0.02} />
            </View>
          </View>
        </View>
      ) : (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              width: height * 0.14,
              height: height * 0.14,
              borderRadius: 69,
              backgroundColor: color,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome5 name="user" size={height * 0.08} color={"white"} />
            <View
              style={{
                position: "absolute",
                left: height * 0.1,
                top: height * 0.1,
                width: height * 0.04,
                height: height * 0.04,
                borderRadius: 420,
                backgroundColor: Colors.primaryDark,
                justifyContent: "center",
              }}
            >
              <Icon name={"check"} color="white" size={height * 0.03} />
            </View>
          </View>
          <MyText content="Icon" size={height * 0.03} />
        </View>
      )}
    </View>
  );
};

export default UnlockabledOnLvlUp;
