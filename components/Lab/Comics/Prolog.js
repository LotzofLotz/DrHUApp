import React from "react";
import { ScrollView, Image } from "react-native";

const Prolog = ({ width }) => {
  return (
    <ScrollView>
      <Image // Prolog
        style={{ width: width, height: 710 * (width / 528) }}
        source={require("../../../assets/Comics/Prolog/prolog1.png")}
        // resizeMode="contain"
      />
      <Image
        style={{ width: width, height: 605 * (width / 531) }}
        source={require("../../../assets/Comics/Prolog/prolog2.png")}
        // resizeMode="contain"
      />
      <Image
        style={{ width: width, height: 817 * (width / 529) }}
        source={require("../../../assets/Comics/Prolog/prolog3.png")}
      />
      <Image
        style={{ width: width, height: 714 * (width / 527) }}
        source={require("../../../assets/Comics/Prolog/prolog4.png")}
        // resizeMode="contain"
      />
      <Image
        style={{ width: width, height: 499 * (width / 527) }}
        source={require("../../../assets/Comics/Prolog/prolog5.png")}
        resizeMode="contain"
      />
    </ScrollView>
  );
};

export default Prolog;
