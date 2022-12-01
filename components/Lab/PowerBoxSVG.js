import React, { useEffect, useState } from "react";
import Svg, { G, Path, Rect, Defs } from "react-native-svg";
import { TouchableOpacity, TouchableHighlight, View } from "react-native";
import Colors from "../../constants/Colors";
import BatterySVG from "./BatterySVG";
import TouchableOpacityG from "./TouchableOpacityG";

const PowerBoxSVG = ({ states, addBattery, slots, filled }) => {
  const pos0 = [67.394, -31.84, 0];
  const pos15 = [489.324, 26.591, 45];
  const pos3 = [748.599, 366.017, 90];
  const pos45 = [689.682, 789.604, 135];
  const pos6 = [349.394, 1045.222, 180];
  const pos75 = [-72.87, 987.594, -135];
  const pos9 = [-332.947, 647.702, -90];
  const pos105 = [-274.491, 224.239, -45];

  return (
    <View>
      {/* <TouchableOpacity onPress={() => addBattery()}> */}
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="236.237"
        height="236.237"
        viewBox="0 0 236.237 236.237"
      >
        <G
          id="Group_602"
          data-name="Group 602"
          transform="translate(-89.881 -389.484)"
        >
          <Path
            id="Path_571"
            data-name="Path 571"
            d="M580.2,477.387A118.119,118.119,0,1,1,462.078,359.268,118.119,118.119,0,0,1,580.2,477.387"
            transform="translate(-254.079 30.216)"
            fill="#447681"
          />
          {/* Start of BatteriesView */}

          {/* Battery auf 6 Uhr --- leer---  */}

          <BatterySVG //Battery0Uhr
            translate1={pos0[0]}
            translate2={pos0[1]}
            rotation={pos0[2]}
            state={states[0]}
          />
          <BatterySVG
            translate1={pos15[0]}
            translate2={pos15[1]}
            rotation={pos15[2]}
            state={states[1]}
          />
          <BatterySVG
            translate1={pos3[0]}
            translate2={pos3[1]}
            rotation={pos3[2]}
            state={states[2]}
          />
          <BatterySVG
            translate1={pos45[0]}
            translate2={pos45[1]}
            rotation={pos45[2]}
            state={states[3]}
          />
          <BatterySVG
            translate1={pos6[0]}
            translate2={pos6[1]}
            rotation={pos6[2]}
            state={states[4]}
          />
          <BatterySVG
            translate1={pos75[0]}
            translate2={pos75[1]}
            rotation={pos75[2]}
            state={states[5]}
          />
          <BatterySVG
            translate1={pos9[0]}
            translate2={pos9[1]}
            rotation={pos9[2]}
            state={states[6]}
          />
          <BatterySVG
            translate1={pos105[0]}
            translate2={pos105[1]}
            rotation={pos105[2]}
            state={states[7]}
          />

          <TouchableOpacityG onPress={() => addBattery()}>
            <G
              id="Group_282"
              data-name="Group 282"
              transform="translate(2.394 79)"
            >
              <Path
                id="Path_584"
                data-name="Path 584"
                d="M438.794,406.685a47.417,47.417,0,1,1-47.417-47.417,47.417,47.417,0,0,1,47.417,47.417"
                transform="translate(-185.376 21.332)"
                fill="red"
              />
            </G>
            <Rect
              id="Rectangle_322"
              data-name="Rectangle 322"
              width="16.052"
              height="7.729"
              rx="3.865"
              transform="translate(157.112 514.728) rotate(-90)"
              fill="#2a4a4f"
            />
            <Rect
              id="Rectangle_323"
              data-name="Rectangle 323"
              width="16.052"
              height="7.729"
              rx="3.865"
              transform="translate(251.946 514.728) rotate(-90)"
              fill="#2a4a4f"
            />
            <Rect
              id="Rectangle_324"
              data-name="Rectangle 324"
              width="16.052"
              height="7.729"
              rx="3.865"
              transform="translate(200.368 455.421)"
              fill="#2a4a4f"
            />
            <Rect
              id="Rectangle_325"
              data-name="Rectangle 325"
              width="16.052"
              height="7.729"
              rx="3.865"
              transform="translate(200.368 550.255)"
              fill="#2a4a4f"
            />
            <Rect
              id="Rectangle_326"
              data-name="Rectangle 326"
              width="16.052"
              height="7.729"
              rx="3.865"
              transform="translate(166.457 476.116) rotate(-45)"
              fill="#2a4a4f"
            />
            <Rect
              id="Rectangle_327"
              data-name="Rectangle 327"
              width="16.052"
              height="7.729"
              rx="3.865"
              transform="translate(233.515 543.174) rotate(-45)"
              fill="#2a4a4f"
            />
            <Rect
              id="Rectangle_328"
              data-name="Rectangle 328"
              width="16.052"
              height="7.729"
              rx="3.865"
              transform="translate(177.808 548.639) rotate(-135)"
              fill="#2a4a4f"
            />
            <Rect
              id="Rectangle_329"
              data-name="Rectangle 329"
              width="16.052"
              height="7.729"
              rx="3.865"
              transform="translate(244.865 481.581) rotate(-135)"
              fill="#2a4a4f"
            />
            <Path
              id="Path_571"
              data-name="Path 571"
              d="M423.956,399.266a40,40,0,1,1-40-40,40,40,0,0,1,40,40"
              transform="translate(-175.564 107.751)"
              fill="#63929c"
            />
            <G id="Batterieicon" transform="translate(188.507 483.801)">
              <Rect
                id="Rectangle_87"
                data-name="Rectangle 87"
                width="24.837"
                height="36.525"
                rx="4"
                transform="translate(18.263 2.382) rotate(30)"
                fill="none"
                stroke="#fff"
                stroke-miterlimit="10"
                stroke-width="3" // this should be it
              />
              <Path
                id="Path_227"
                data-name="Path 227"
                d="M11.935,5.826H.922A.9.9,0,0,1,0,4.959V.867A.9.9,0,0,1,.922,0H11.935a.9.9,0,0,1,.922.867V4.959a.9.9,0,0,1-.922.867"
                transform="translate(26.642 0) rotate(30)"
                fill="#fff"
              />
              <Rect
                id="Rectangle_88"
                data-name="Rectangle 88"
                width="15.324"
                height="26.817"
                rx="2"
                transform="translate(19.874 9.045) rotate(30)"
                fill={filled >= slots ? Colors.yellow : "#fff"}
              />
            </G>
          </TouchableOpacityG>
        </G>
      </Svg>
    </View>
  );
};

export default PowerBoxSVG;
