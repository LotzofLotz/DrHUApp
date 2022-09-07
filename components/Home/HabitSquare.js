import React, { useEffect } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";
import { MyText } from "../Global/MyText";
import Colors from "../../constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import isThisWeek from "date-fns/isThisWeek";
import parseISO from "date-fns/parseISO";
import getWeek from "date-fns/getWeek";
import ProgressBar from "./ProgressBar";
import { AntDesign } from "@expo/vector-icons";

const HabitSquare = ({
  habit,
  getHabits,
  setHabitInfosVisible,
  setCurrentHabit,
}) => {
  const width = Dimensions.get("window").width;

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
        // console.log("this was the final step !!");
        const energy = await AsyncStorage.getItem("Energy");
        let newEnergy = parseInt(energy) + 1;
        console.log(
          "perfect week added : ",
          getWeek(new Date(), {
            weekStartsOn: 1,
          })
        );
        parsed.PerfectWeeks.push(
          getWeek(new Date(), {
            weekStartsOn: 1,
          })
        );
        // console.log("NEW ENERGY:", newEnergy);
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
        backgroundColor: "#F0F0F0",
        borderWidth: 3,
        //filterSessions().length >= habit.value["Amount"] ? 3 : 0,

        // elevation: 10,
        // shadowOffset: 10,
        // borderWidth: 3,
        borderColor:
          filterSessions().length >= habit.value["Amount"]
            ? Colors.yellow
            : "#F0F0F0",
      }}
    >
      <TouchableOpacity
        onPress={() => addSession(habit.value["Name"])}
        onLongPress={() => {
          console.log("currentHabit: " + habit.value["Name"]),
            setCurrentHabit(habit),
            setHabitInfosVisible(true);
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
              // bottom: "2%",
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
                color={habit.value["Color"]}
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
          <MyText content={habit.value["Name"]} semiBold />
          <MyText content={habit.value["Amount"] + "x pro Woche"} size={15} />
          <MyText
            content={filterSessions().length + "/" + habit.value["Amount"]}
            size={15}
          />
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
