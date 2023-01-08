import React, { useEffect } from "react";
import { View, Image, StatusBar, Platform, Dimensions } from "react-native";
import { MyText } from "./MyText";
import Colors from "../../constants/Colors";
import { Icon } from "react-native-elements";

const MyHeader = ({ title, energy, scrolled, design }) => {
  const height = Dimensions.get("window").height;
  const width = Dimensions.get("window").width;

  return (
    <View style={{ zIndex: 420 }}>
      <View
        style={{
          width: "100%",
          backgroundColor: "white",
          shadowColor: "#000",

          shadowOffset: {
            width: 0,
            height: scrolled ? 1 : 0,
          },
          shadowOpacity: scrolled ? 0.2 : 0,
          shadowRadius: scrolled ? 0.6 : 0,
          elevation: scrolled ? 10 : 0,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            // elevation: 10,
            marginHorizontal: "4%",
            justifyContent: "space-between",

            marginTop:
              Platform.OS === "ios"
                ? StatusBar.currentHeight + 25
                : StatusBar.currentHeight + 5,
            alignItems: "flex-end",
          }}
        >
          {/* {design == 1 ? ( */}
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 420,
                backgroundColor: Colors.primaryLight,
                justifyContent: "center",
                alignItems: "center",
                // bottom: 5,
              }}
            >
              {title == "Fokus" ? (
                <Icon name={"center-focus-weak"} size={32} color={"white"} />
              ) : title == "Labor" ? (
                <Image
                  source={require("../../assets/NAVBarLaborIcon.png")}
                  style={{
                    width: "60%",
                    height: "60%",
                    resizeMode: "contain",
                  }}
                />
              ) : (
                <Image
                  source={require("../../assets/BatterieiconNAVweiss.png")}
                  style={{
                    width: "60%",
                    height: "60%",
                    resizeMode: "contain",
                  }}
                />
              )}
            </View>
            <View
              style={{
                top: 2,
                left: 5,

                justifyContent: "center",
              }}
            >
              <MyText content={title} size={width * 0.06} semiBold />
            </View>
          </View>

          <View
            style={{
              bottom: 5,
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../../assets/Batterieicon_Currency_alt.png")}
              style={{ width: width * 0.08, height: width * 0.08, top: 2 }}
            />
            <MyText
              color={Colors.primaryDark}
              content={energy + "x"}
              bold
              size={width * 0.07}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default MyHeader;
