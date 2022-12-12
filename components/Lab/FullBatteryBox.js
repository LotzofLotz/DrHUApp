import React, { useEffect, useState } from "react";
import Svg, {
  G,
  Path,
  Rect,
  Defs,
  Circle,
  Text,
  TSpan,
} from "react-native-svg";
import { TouchableHighlight, View } from "react-native";
import { MyText } from "../Global/MyText";
import BatterySVG from "./BatterySVG";
import TouchableOpacityG from "./TouchableOpacityG";
import Colors from "../../constants/Colors";

const FullBatteryBox = ({
  states,
  addBattery,
  slots,
  filled,
  currentLevel,
}) => {
  const battery1 = "matrix(0.921, 0.391, -0.391, 0.921, 317.893, -112.018)";
  const battery2 = "matrix(0.719, 0.695, -0.695, 0.719, 532.378, -31.419)";
  const battery3 = "translate(710.398 129.407) rotate(66)";
  const battery4 = "matrix(-0.391, 0.921, -0.921, -0.391, 828.41, 617.14)";
  const battery5 = "matrix(-0.695, 0.719, -0.719, -0.695, 746.506, 832.912)";
  const battery6 = "translate(586.723 1011.947) rotate(156)";
  const battery7 = "matrix(-0.921, -0.391, 0.391, -0.921, 98.805, 1125.844)";
  const battery8 = "matrix(-0.719, -0.695, 0.695, -0.719, -115.768, 1045.71)";
  const battery9 = "translate(-294.051 885.305) rotate(-114)";
  const battery10 = "matrix(0.391, -0.921, 0.921, 0.391, -410.051, 398.344)";
  const battery11 = "matrix(0.695, -0.719, 0.719, 0.695, -330.158, 182.284)";
  const battery12 = "translate(-171.974 7.315) rotate(-24)";

  const pos0 = [67.394, -31.84, 0];
  const pos15 = [489.324, 26.591, 45];
  const pos3 = [748.599, 366.017, 90];
  const pos45 = [689.682, 789.604, 135];
  const pos6 = [349.394, 1045.222, 180];
  const pos75 = [-72.87, 987.594, -135];
  const pos9 = [-332.947, 647.702, -90];
  const pos105 = [-274.491, 224.239, -45];

  const [wing1Visible, setWing1Visible] = useState(false);
  const [wing2Visible, setWing2Visible] = useState(false);
  const [wing3Visible, setWing3Visible] = useState(false);
  const [wing4Visible, setWing4Visible] = useState(false);

  const setOpacities = (slots) => {
    if (slots > 8) {
      setWing1Visible(true);
    }
    if (slots > 11) {
      setWing2Visible(true);
    }
    if (slots > 14) {
      setWing3Visible(true);
    }
    if (slots > 17) {
      setWing4Visible(true);
    }
  };

  useEffect(() => {
    setOpacities(slots);
  }, []);

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="390.346"
      height="412.112"
      viewBox="0 0 390.346 412.112"
    >
      <G
        id="Stromkasten_SVG"
        data-name="Stromkasten SVG"
        transform="translate(-12.515 -286.269)"
      >
        <G id="Flügel_1" data-name="Flügel 1">
          <G id="Flügel_1_Kabel" data-name="Flügel 1 Kabel">
            <Path
              id="Path_737"
              data-name="Path 737"
              d="M12.694,88.361c-.1-14.539,7.735-19.146,14.031-22.847,5.083-2.988,7.964-4.915,8.085-9.755.144-5.753-6.921-9.267-15.1-13.336C10.738,37.963,3.842,30.517.988,20.706c-2.573-8.845.365-14.654,3.283-17.969C7.394-.812,7.867.131,8.024.071L9.593,4.183c-.469.182-8.181,2.229-4.38,15.294,2.315,7.959,7.9,14.749,16.454,19.006,9.131,4.541,17.756,8.831,17.542,17.386-.188,7.521-5.3,10.529-10.254,13.439-5.871,3.452-11.942,7.021-11.86,19.024Z"
              transform="translate(277.458 379.286) rotate(158)"
              fill={wing1Visible ? "#447681" : "#D1DFE1"}
            />
            <Path
              id="Path_730-4"
              data-name="Path 730"
              d="M12.694,88.361c-.1-14.539,7.735-19.146,14.031-22.847,5.083-2.988,7.964-4.915,8.085-9.755.144-5.753-6.921-9.267-15.1-13.336C10.738,37.963,3.842,30.517.988,20.706c-2.573-8.845.365-14.654,3.283-17.969C7.394-.812,7.867.131,8.024.071L9.593,4.183c-.469.182-8.181,2.229-4.38,15.294,2.315,7.959,7.9,14.749,16.454,19.006,9.131,4.541,17.756,8.831,17.542,17.386-.188,7.521-5.3,10.529-10.254,13.439-5.871,3.452-11.942,7.021-11.86,19.024Z"
              transform="translate(370.12 460) rotate(63)"
              fill={wing1Visible ? "#447681" : "#D1DFE1"}
            />
          </G>
          <Path
            id="Flügel_1_HG"
            data-name="Flügel 1 HG"
            d="M884.407,521.557l8.331-45.414a13.45,13.45,0,0,1,16.572-10.594c66.3,16.981,121.123,71.293,138.736,137.427a13.451,13.451,0,0,1-10.437,16.673l-45.331,8.761a13.438,13.438,0,0,1-15.417-9.346A122.2,122.2,0,0,0,893.9,536.885,13.438,13.438,0,0,1,884.407,521.557Z"
            transform="translate(-649.345 -149.82)"
            fill={wing1Visible ? "#447681" : "#D1DFE1"}
          />

          <BatterySVG
            matrix={battery1}
            state={states[8]}
            visible={wing1Visible}
          />
          <BatterySVG
            matrix={battery2}
            state={states[9]}
            visible={wing1Visible}
          />
          <BatterySVG
            matrix={battery3}
            state={states[10]}
            visible={wing1Visible}
          />
        </G>
        <G id="Flügel_3" data-name="Flügel 3">
          <G id="Flügel_3_Kabel" data-name="Flügel 3 Kabel">
            <Path
              id="Path_729-3"
              data-name="Path 729"
              d="M12.694,88.361c-.1-14.539,7.735-19.146,14.031-22.847,5.083-2.988,7.964-4.915,8.085-9.755.144-5.753-6.921-9.267-15.1-13.336C10.738,37.963,3.842,30.517.988,20.706c-2.573-8.845.365-14.654,3.283-17.969C7.394-.812,7.867.131,8.024.071L9.593,4.183c-.469.182-8.181,2.229-4.38,15.294,2.315,7.959,7.9,14.749,16.454,19.006,9.131,4.541,17.756,8.831,17.542,17.386-.188,7.521-5.3,10.529-10.254,13.439-5.871,3.452-11.942,7.021-11.86,19.024Z"
              transform="matrix(-0.276, -0.961, 0.961, -0.276, 38.937, 564.502)"
              fill={wing3Visible ? "#447681" : "#D1DFE1"}
            />
            <Path
              id="Path_730-2"
              data-name="Path 730"
              d="M12.694,88.361c-.1-14.539,7.735-19.146,14.031-22.847,5.083-2.988,7.964-4.915,8.085-9.755.144-5.753-6.921-9.267-15.1-13.336C10.738,37.963,3.842,30.517.988,20.706c-2.573-8.845.365-14.654,3.283-17.969C7.394-.812,7.867.131,8.024.071L9.593,4.183c-.469.182-8.181,2.229-4.38,15.294,2.315,7.959,7.9,14.749,16.454,19.006,9.131,4.541,17.756,8.831,17.542,17.386-.188,7.521-5.3,10.529-10.254,13.439-5.871,3.452-11.942,7.021-11.86,19.024Z"
              transform="matrix(-0.669, -0.743, 0.743, -0.669, 46.731, 594.154)"
              fill={wing3Visible ? "#447681" : "#D1DFE1"}
            />
            <Path
              id="Path_729-4"
              data-name="Path 729"
              d="M12.694,88.361c-.1-14.539,7.735-19.146,14.031-22.847,5.083-2.988,7.964-4.915,8.085-9.755.144-5.753-6.921-9.267-15.1-13.336C10.738,37.963,3.842,30.517.988,20.706c-2.573-8.845.365-14.654,3.283-17.969C7.394-.812,7.867.131,8.024.071L9.593,4.183c-.469.182-8.181,2.229-4.38,15.294,2.315,7.959,7.9,14.749,16.454,19.006,9.131,4.541,17.756,8.831,17.542,17.386-.188,7.521-5.3,10.529-10.254,13.439-5.871,3.452-11.942,7.021-11.86,19.024Z"
              transform="translate(166.146 682.908) rotate(-94)"
              fill={wing3Visible ? "#447681" : "#D1DFE1"}
            />
          </G>
          <Path
            id="Flügel_3_HG"
            data-name="Flügel 3 HG"
            d="M.222,56.434,8.553,11.02A13.45,13.45,0,0,1,25.126.425c66.3,16.981,121.123,71.293,138.736,137.427a13.451,13.451,0,0,1-10.437,16.673l-45.33,8.761a13.438,13.438,0,0,1-15.417-9.346A122.2,122.2,0,0,0,9.714,71.762,13.438,13.438,0,0,1,.222,56.434Z"
            transform="translate(181.178 698.38) rotate(180)"
            fill={wing3Visible ? "#447681" : "#D1DFE1"}
          />

          <BatterySVG
            matrix={battery8}
            state={states[14]}
            visible={wing3Visible}
          />
          <BatterySVG
            matrix={battery7}
            state={states[15]}
            visible={wing3Visible}
          />
          <BatterySVG
            matrix={battery9}
            state={states[16]}
            visible={wing3Visible}
          />
        </G>
        <G id="Flügel_2" data-name="Flügel 2">
          <G id="Flügel_2_Kabel" data-name="Flügel 2 Kabel">
            <Path
              id="Path_730-3"
              data-name="Path 730"
              d="M12.694,88.361c-.1-14.539,7.735-19.146,14.031-22.847,5.083-2.988,7.964-4.915,8.085-9.755.144-5.753-6.921-9.267-15.1-13.336C10.738,37.963,3.842,30.517.988,20.706c-2.573-8.845.365-14.654,3.283-17.969C7.394-.812,7.867.131,8.024.071L9.593,4.183c-.469.182-8.181,2.229-4.38,15.294,2.315,7.959,7.9,14.749,16.454,19.006,9.131,4.541,17.756,8.831,17.542,17.386-.188,7.521-5.3,10.529-10.254,13.439-5.871,3.452-11.942,7.021-11.86,19.024Z"
              transform="translate(267.237 677.582) rotate(153)"
              fill={wing2Visible ? "#447681" : "#D1DFE1"}
            />
            <Path
              id="Path_731-2"
              data-name="Path 731"
              d="M32.755,1.868c.115,2.262-11.76,10.665-18.322,12.264C7.239,15.887,3.036,19.021.747,22.878c-2.624,4.653,2.331,8.263,4.671,9.566,2.505,1.4,2.884,1.025,3.011,1.048l1.258-1.617c-.376-.072-8.6-3.378-5.551-8.515,1.857-3.129,5.2-6.485,12.064-8.159C23.523,13.417,36.454,5.189,36.283,1.825,36.132-1.132,32.657-.035,32.755,1.868Z"
              transform="matrix(-0.819, 0.574, -0.574, -0.819, 276.065, 637.641)"
              fill={wing2Visible ? "#447681" : "#D1DFE1"}
            />
            <Path
              id="Path_969"
              data-name="Path 969"
              d="M12.01,62.874c-.094-10.346,7.319-13.623,13.275-16.257,4.809-2.126,7.535-3.5,7.649-6.941.136-4.093-6.548-6.594-14.289-9.489C10.159,27.013,3.635,21.714.934,14.734-1.5,8.44,1.28,4.307,4.04,1.948,7-.578,7.443.093,7.592.05L9.076,2.976c-.444.13-7.74,1.586-4.144,10.883,2.191,5.663,7.47,10.5,15.567,13.524,8.639,3.231,16.8,6.284,16.6,12.371-.178,5.351-5.019,7.492-9.7,9.563-5.554,2.456-11.3,5-11.221,13.536Z"
              transform="matrix(-0.777, 0.629, -0.629, -0.777, 370.05, 539.16)"
              fill={wing2Visible ? "#447681" : "#D1DFE1"}
            />
          </G>
          <Path
            id="Flügel_2_HG"
            data-name="Flügel 2 HG"
            d="M.222,56.434,8.553,11.02A13.45,13.45,0,0,1,25.126.425c66.3,16.981,121.123,71.293,138.736,137.427a13.451,13.451,0,0,1-10.437,16.673l-45.33,8.761a13.438,13.438,0,0,1-15.417-9.346A122.2,122.2,0,0,0,9.714,71.762,13.438,13.438,0,0,1,.222,56.434Z"
            transform="translate(399.992 531.232) rotate(89)"
            fill={wing2Visible ? "#447681" : "#D1DFE1"}
          />

          <BatterySVG
            matrix={battery4}
            state={states[11]}
            visible={wing2Visible}
          />
          <BatterySVG
            matrix={battery5}
            state={states[12]}
            visible={wing2Visible}
          />
          <BatterySVG
            matrix={battery6}
            state={states[13]}
            visible={wing2Visible}
          />
        </G>

        <G id="Flügel_4" data-name="Flügel 4">
          <Path
            id="Flügel_4_HG"
            data-name="Flügel 4 HG"
            d="M.222,56.434,8.553,11.02A13.45,13.45,0,0,1,25.126.425c66.3,16.981,121.123,71.293,138.736,137.427a13.451,13.451,0,0,1-10.437,16.673l-45.33,8.761a13.438,13.438,0,0,1-15.417-9.346A122.2,122.2,0,0,0,9.714,71.762,13.438,13.438,0,0,1,.222,56.434Z"
            transform="translate(15.383 486.249) rotate(-91)"
            fill={wing4Visible ? "#447681" : "#D1DFE1"}
          />
          <G id="Flügel_4_Kabel" data-name="Flügel 4 Kabel">
            <Path
              id="Path_729"
              data-name="Path 729"
              d="M12.694,88.361c-.1-14.539,7.735-19.146,14.031-22.847,5.083-2.988,7.964-4.915,8.085-9.755.144-5.753-6.921-9.267-15.1-13.336C10.738,37.963,3.842,30.517.988,20.706c-2.573-8.845.365-14.654,3.283-17.969C7.394-.812,7.867.131,8.024.071L9.593,4.183c-.469.182-8.181,2.229-4.38,15.294,2.315,7.959,7.9,14.749,16.454,19.006,9.131,4.541,17.756,8.831,17.542,17.386-.188,7.521-5.3,10.529-10.254,13.439-5.871,3.452-11.942,7.021-11.86,19.024Z"
              transform="translate(111.182 349.443) rotate(-104)"
              fill={wing4Visible ? "#447681" : "#D1DFE1"}
            />
            <Path
              id="Path_731"
              data-name="Path 731"
              d="M30.258,2.575c.107,3.117-10.863,14.7-16.925,16.9A20.392,20.392,0,0,0,.69,31.528C-1.734,37.941,2.843,42.915,5,44.712c2.314,1.923,2.664,1.412,2.781,1.445l1.162-2.228C8.6,43.83,1,39.274,3.821,32.194A18.543,18.543,0,0,1,14.965,20.951C21.73,18.49,33.675,7.151,33.517,2.516,33.378-1.559,30.168-.048,30.258,2.575Z"
              transform="matrix(0.174, -0.985, 0.985, 0.174, 145.097, 416.501)"
              fill={wing4Visible ? "#447681" : "#D1DFE1"}
            />
            <Path
              id="Path_729-2"
              data-name="Path 729"
              d="M12.694,88.361c-.1-14.539,7.735-19.146,14.031-22.847,5.083-2.988,7.964-4.915,8.085-9.755.144-5.753-6.921-9.267-15.1-13.336C10.738,37.963,3.842,30.517.988,20.706c-2.573-8.845.365-14.654,3.283-17.969C7.394-.812,7.867.131,8.024.071L9.593,4.183c-.469.182-8.181,2.229-4.38,15.294,2.315,7.959,7.9,14.749,16.454,19.006,9.131,4.541,17.756,8.831,17.542,17.386-.188,7.521-5.3,10.529-10.254,13.439-5.871,3.452-11.942,7.021-11.86,19.024Z"
              transform="translate(143.47 336.474) rotate(-43)"
              fill={wing4Visible ? "#447681" : "#D1DFE1"}
            />
            <Path // über battery12
              id="Path_730"
              data-name="Path 730"
              d="M12.694,88.361c-.1-14.539,7.735-19.146,14.031-22.847,5.083-2.988,7.964-4.915,8.085-9.755.144-5.753-6.921-9.267-15.1-13.336C10.738,37.963,3.842,30.517.988,20.706c-2.573-8.845.365-14.654,3.283-17.969C7.394-.812,7.867.131,8.024.071L9.593,4.183c-.469.182-8.181,2.229-4.38,15.294,2.315,7.959,7.9,14.749,16.454,19.006,9.131,4.541,17.756,8.831,17.542,17.386-.188,7.521-5.3,10.529-10.254,13.439-5.871,3.452-11.942,7.021-11.86,19.024Z"
              transform="matrix(0.309, -0.951, 0.951, 0.309, 123.097, 384.456)"
              fill={wing4Visible ? "#447681" : "#D1DFE1"}
            />
          </G>
          <BatterySVG
            matrix={battery10}
            state={states[17]}
            visible={wing4Visible}
          />
          <BatterySVG
            matrix={battery11}
            state={states[18]}
            visible={wing4Visible}
          />
          <BatterySVG
            matrix={battery12}
            state={states[19]}
            visible={wing4Visible}
          />
        </G>
        <G
          id="Level_Indicator"
          data-name="Level Indicator"
          transform="translate(-86.64 -157.773)"
        >
          {/* <View>
            <MyText content="1" />
          </View> */}
          <Path
            id="Path_736"
            data-name="Path 736"
            d="M412.03,393.3a34.035,34.035,0,1,1-34.035-34.035A34.035,34.035,0,0,1,412.03,393.3"
            transform="translate(-86.355 84.774)"
            fill="#63929c"
          />
          <Path
            id="Path_732"
            data-name="Path 732"
            d="M397.964,386.27a27,27,0,1,1-27-27,27,27,0,0,1,27,27"
            transform="translate(-79.323 91.807)"
            fill="#2a4a4f"
          />

          <Path
            id="Indicator_Color"
            data-name="Indicator Color"
            d="M384.055,379.315a20.047,20.047,0,1,1-20.047-20.047,20.047,20.047,0,0,1,20.047,20.047"
            transform="translate(-72.368 98.762)"
            fill="#f5ce52"
          />
          {/* <Text
            x="20"
            y="40"
            text-anchor="middle"
            fontWeight="bold"
            fill="black"
          >
            New
          </Text> */}
        </G>
        <G id="Centerpiece">
          <Path //center background
            id="Path_571"
            data-name="Path 571"
            d="M580.2,477.387A118.119,118.119,0,1,1,462.078,359.268,118.119,118.119,0,0,1,580.2,477.387"
            transform="translate(-254.078 30.216)"
            fill="#447681"
          />

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

          {currentLevel < 3 ? (
            <TouchableOpacityG onPress={() => addBattery()}>
              {/* INCOMPLETE  */}

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
                  fill="#2a4a4f"
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
          ) : (
            <G>
              <G id="Batterieicon" transform="translate(156.507 454.801)">
                <G
                  id="Group_611"
                  data-name="Group 611"
                  transform="translate(-8414.612 -4739.106)"
                >
                  <G
                    id="Group_608"
                    data-name="Group 608"
                    transform="translate(0 125)"
                  >
                    <Path //zacken um kreis
                      id="Union_5"
                      data-name="Union 5"
                      d="M47.12-22.437A3.865,3.865,0,0,1,43.256-26.3q0-.182.017-.36a47.163,47.163,0,0,1-19.565-8.164,3.91,3.91,0,0,1-.279.311,3.864,3.864,0,0,1-5.465,0L12.078-40.4a3.864,3.864,0,0,1,0-5.465,3.9,3.9,0,0,1,.369-.325A47.162,47.162,0,0,1,4.481-65.742a3.888,3.888,0,0,1-.616.049A3.865,3.865,0,0,1,0-69.557V-77.88a3.864,3.864,0,0,1,3.865-3.865,3.887,3.887,0,0,1,.719.067,47.174,47.174,0,0,1,8.161-19.36,3.878,3.878,0,0,1-.668-.535,3.865,3.865,0,0,1,0-5.466l5.885-5.885a3.865,3.865,0,0,1,5.466,0,3.874,3.874,0,0,1,.574.731,47.158,47.158,0,0,1,19.377-7.973,3.869,3.869,0,0,1-.123-.97A3.865,3.865,0,0,1,47.12-125h8.322a3.865,3.865,0,0,1,3.865,3.865,3.872,3.872,0,0,1-.123.97,47.176,47.176,0,0,1,19.377,7.973,3.875,3.875,0,0,1,.574-.73,3.865,3.865,0,0,1,5.466,0l5.885,5.885a3.866,3.866,0,0,1,0,5.466,3.878,3.878,0,0,1-.667.535,47.174,47.174,0,0,1,8.161,19.36,3.887,3.887,0,0,1,.719-.067,3.865,3.865,0,0,1,3.865,3.865v8.322A3.865,3.865,0,0,1,98.7-65.693a3.892,3.892,0,0,1-.616-.049,47.161,47.161,0,0,1-7.966,19.551,3.9,3.9,0,0,1,.369.326,3.865,3.865,0,0,1,0,5.466L84.6-34.514a3.864,3.864,0,0,1-5.465,0,3.907,3.907,0,0,1-.28-.311,47.164,47.164,0,0,1-19.566,8.164q.016.178.017.359a3.864,3.864,0,0,1-3.865,3.865Z"
                      transform="translate(8415.112 4739.606)"
                      fill="#2a4a4f"
                      stroke="rgba(0,0,0,0)"
                      stroke-miterlimit="10"
                      stroke-width="1"
                    />
                    <Path //gelber streifen
                      id="Path_956"
                      data-name="Path 956"
                      d="M423.956,399.266a40,40,0,1,1-40-40,40,40,0,0,1,40,40"
                      transform="translate(8082.436 4266.937)"
                      fill="#f5ce52" //"#63929c"
                    />
                    <G
                      id="Group_606"
                      data-name="Group 606"
                      transform="translate(8075.691 4391.204)"
                    >
                      <Circle
                        id="Ellipse_73"
                        data-name="Ellipse 73"
                        cx="27.715"
                        cy="27.715"
                        r="27.715"
                        transform="translate(362.245 247.727)"
                        fill="#fff"
                      />
                      <Path //checkmark
                        id="Icon_ionic-md-checkmark-circle"
                        data-name="Icon ionic-md-checkmark-circle"
                        d="M32.328,3.375A28.953,28.953,0,1,0,61.281,32.328,29.038,29.038,0,0,0,32.328,3.375Zm-5.944,44.39L11.546,32.926l4.162-4.162L26.4,39.455,48.962,16.891l4.162,4.162Z"
                        transform="translate(358.375 242.883)"
                        fill="#2a4a4f"
                      />
                    </G>
                  </G>
                </G>
              </G>
            </G>
          )}
        </G>
      </G>
    </Svg>
  );
};

export default FullBatteryBox;
