import React, { useEffect } from "react";
import { View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import Modal from "react-native-modal";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import { FontAwesome5 } from "@expo/vector-icons";

const ComicsModal = ({
  comicModalVisible,
  setComicModalVisible,
  height,
  colors,
  setReaderVisible,
}) => {
  console.log("COCOC", colors);

  const fillColors = (colors) => {
    let i = 0;
    let array = [];
    while (i < 8) {
      if (i < colors.length) {
        array.push(colors[i]);
      } else {
        array.push(i);
      }
      i++;
    }
    return array;
  };

  return (
    <View>
      <Modal
        isVisible={comicModalVisible}
        animationIn="slideInUp"
        backdropColor={"#132224"}
        backdropOpacity={0.6}
        animationOut="slideOutUp"
        onBackdropPress={() => setComicModalVisible(false)}
      >
        <View
          style={{
            justifyContent: "space-between",
            backgroundColor: "white",
            borderRadius: 10,
            padding: "4%",
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <MyText content="Story - Dr.HU" size={height * 0.04} semiBold />
            <TouchableOpacity
              onPress={() => {
                setComicModalVisible(false);
              }}
            >
              <Icon name="close" color={Colors.primaryDark} />
            </TouchableOpacity>
          </View>
          <MyText content="Zähme den Schweinehund" size={height * 0.02} />
          <View
            style={{
              marginTop: "4%",
              borderBottomColor: Colors.primaryLight,
              borderBottomWidth: 1,
              width: "100%",
            }}
          />
          <View>
            <MyText content="Prolog" semiBold size={height * 0.03} />
            <TouchableOpacity
              onPress={() => setReaderVisible(true)}
              style={{
                width: height * 0.08,
                height: height * 0.08,
                borderRadius: 69,
                backgroundColor: Colors.primaryLight,
                justifyContent: "center",
                alignItems: "center",
                marginVertical: "5%",
              }}
            >
              <FontAwesome5 name="file" size={30} color={"white"} />
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
            </TouchableOpacity>
          </View>
          <View>
            <MyText content="Kapitel" semiBold size={height * 0.03} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: "5%",
              }}
            >
              {fillColors(colors)
                .slice(0, 4)
                .map((color) => (
                  <View
                    key={color}
                    style={{
                      width: height * 0.08,
                      height: height * 0.08,
                      borderRadius: 420,
                      backgroundColor: color.toString().startsWith("#")
                        ? color
                        : "#D1DFE1",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome5
                      name="file"
                      size={30}
                      color={
                        color.toString().startsWith("#") ? "white" : "grey"
                      }
                    />
                    <View
                      style={{
                        position: "absolute",
                        left: height * 0.055,
                        top: height * 0.055,
                        width: height * 0.028,
                        height: height * 0.028,
                        borderRadius: 420,
                        backgroundColor: color.toString().startsWith("#")
                          ? Colors.primaryDark
                          : "grey",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        name={
                          color.toString().startsWith("#") ? "check" : "lock"
                        }
                        color="white"
                        size={height * 0.02}
                      />
                    </View>
                  </View>
                ))}
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {fillColors(colors)
                .slice(4, 8)
                .map((color) => (
                  <View
                    key={color}
                    style={{
                      width: height * 0.08,
                      height: height * 0.08,
                      borderRadius: 420,
                      backgroundColor: color.toString().startsWith("#")
                        ? color
                        : "#D1DFE1",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome5
                      name="file"
                      size={30}
                      color={
                        color.toString().startsWith("#") ? "white" : "grey"
                      }
                    />
                    <View
                      style={{
                        position: "absolute",
                        left: height * 0.055,
                        top: height * 0.055,
                        width: height * 0.028,
                        height: height * 0.028,
                        borderRadius: 420,
                        backgroundColor: color.toString().startsWith("#")
                          ? Colors.primaryDark
                          : "grey",
                        justifyContent: "center",
                      }}
                    >
                      <Icon
                        name={
                          color.toString().startsWith("#") ? "check" : "lock"
                        }
                        color="white"
                        size={height * 0.02}
                      />
                    </View>
                  </View>
                ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ComicsModal;
