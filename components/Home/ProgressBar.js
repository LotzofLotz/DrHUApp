import React, { useState, useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { Icon } from "react-native-elements";
import Colors from "../../constants/Colors";

const ProgressBar = ({ step, steps, color, name }) => {
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;
  const [width, setWidth] = useState(0);

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    if (step <= steps) {
      reactive.setValue(-width + (width * step) / steps);
    } else {
      reactive.setValue(0);
    }
  }, [step, steps, width]);

  return (
    <View
      onLayout={(e) => {
        const newWidth = e.nativeEvent.layout.width;
        setWidth(newWidth);
      }}
      style={{
        width: "100%",
        height: "100%",
        // overflow: "hidden",
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "94%",
          height: "88%",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          borderRadius: 7,
        }}
      >
        <View style={{ zIndex: 100 }}>
          <Icon size={34} color={Colors.primaryDark} name={name} />
        </View>

        <Animated.View
          style={{
            position: "absolute",
            transform: [{ translateX: animatedValue }],
            width: "100%",
            height: "100%",
            backgroundColor: step < steps ? color : Colors.yellow,
            borderRadius: 5,
          }}
        />
      </View>
    </View>
  );
};

export default ProgressBar;
