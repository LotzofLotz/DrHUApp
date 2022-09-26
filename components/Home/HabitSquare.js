import React, { useEffect } from "react";
import { View, Dimensions, TouchableOpacity, Image } from "react-native";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import isThisWeek from "date-fns/isThisWeek";
import parseISO from "date-fns/parseISO";
import getWeek from "date-fns/getWeek";
import ProgressBar from "./ProgressBar";
import { AntDesign } from "@expo/vector-icons";
import { MyRecommendations } from "../Global/MyRecommendations";

const HabitSquare = ({
  habit,
  getHabits,
  setHabitInfosVisible,
  setCurrentHabit,
}) => {
  const width = Dimensions.get("window").width;

  // useEffect(() => {
  //   console.log(":::::", MyRecommendations[habit.value["Name"]]?.name);
  // }, []);

  const filterSessions = () => {
    const filtered = habit.value["Sessions"].filter((session) =>
      isThisWeek(parseISO(session), { weekStartsOn: 1 })
    );
    return filtered;
  };

  const addSession = async (name) => {
    try {
      const habit = await AsyncStorage.getItem("Habit_" + name);
      const parsed = JSON.parse(habit);
      parsed.Sessions.push(new Date());
      if (parsed.Amount - 1 == filterSessions().length) {
        const energy = await AsyncStorage.getItem("Energy");
        let newEnergy = parseInt(energy) + 1;
        parsed.PerfectWeeks.push(
          getWeek(new Date(), {
            weekStartsOn: 1,
          })
        );
        await AsyncStorage.setItem("Energy", newEnergy.toString());
      }
      await AsyncStorage.mergeItem("Habit_" + name, JSON.stringify(parsed));

      getHabits();
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    filterSessions();
  }, []);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        height: 0.44 * width,
        width: 0.44 * width,
        borderRadius: 30,
        // backgroundColor: "#F0F0F0",
        backgroundColor: "#F6F6F6", //?? imo zu weiß
        borderWidth: 3,
        // mit Shadow siehts imo besser aus
        elevation: 10,
        shadowColor: "#171717",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

        borderColor:
          filterSessions().length >= habit.value["Amount"]
            ? Colors.yellow
            : "#F6F6F6",
      }}
    >
      {habit.value["Recommended"] == true ? (
        <View
          style={{
            position: "absolute",
            left: 0.37 * width,
            bottom: 0.37 * width,
            width: 40,
            height: 40,
            borderRadius: 20,
            borderWidth: 1,
            borderColor: Colors.primaryDark,
            backgroundColor:
              MyRecommendations[habit.value["Name"]]?.category == "physisch"
                ? Colors.primaryLight
                : "#BF8CA2",
            // Colors.primaryLight,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/NAVBarLaborIcon.png")}
            style={{ width: "70%", height: "70%", resizeMode: "contain" }}
          />
        </View>
      ) : (
        <View />
      )}
      <TouchableOpacity
        onPress={() => addSession(habit.value["Name"])}
        onLongPress={() => {
          setCurrentHabit(habit), setHabitInfosVisible(true);
        }}
      >
        <View style={{ flex: 3 }}>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                left: "6%",
                height: "65%",
                width: "84%",
                borderRadius: 12,
                borderWidth: 7,
                borderColor: Colors.primaryDark,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProgressBar
                color={
                  habit.value["Recommended"] == true &&
                  MyRecommendations[habit.value["Name"]]?.category == "physisch"
                    ? Colors.primaryLight
                    : habit.value["Recommended"] == true &&
                      MyRecommendations[habit.value["Name"]]?.category ==
                        "psychisch"
                    ? "#BF8CA2"
                    : habit.value["Color"]
                  // habit.value["Color"]
                }
                steps={habit.value["Amount"]}
                step={filterSessions().length}
                name={habit.value["Icon"]}
              />
            </View>
            <View
              style={{
                left: "6%",
                height: "30%",
                width: "6%",
                backgroundColor: Colors.primaryDark,
                borderTopRightRadius: 4,
                borderBottomRightRadius: 4,
              }}
            />
          </View>
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            bottom: "10%",
          }}
        >
          <View
            style={{
              flex: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {habit?.value["Recommended"] == false ? (
              <MyText content={habit.value["Name"]} semiBold center />
            ) : (
              <MyText
                content={MyRecommendations[habit.value["Name"]]?.name}
                semiBold
                center
              />
            )}
          </View>
          <View style={{ flex: 0.8 }}>
            {/* <MyText content={habit.value["Amount"] + "x pro Woche"} size={15} /> */}
            <MyText
              content={
                filterSessions().length +
                "/" +
                habit.value["Amount"] +
                " x pro Woche"
              }
              size={15}
            />
          </View>
        </View>
      </TouchableOpacity>

      {filterSessions().length >= habit.value["Amount"] ? (
        <View
          style={{
            position: "absolute",
            top: 0.39 * width,
            backgroundColor: "white",
            borderRadius: 420,
          }}
        >
          <AntDesign name="checkcircle" size={34} color={Colors.yellow} />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

export default HabitSquare;
