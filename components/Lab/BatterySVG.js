import React, { useEffect } from "react";
import Svg, { Defs, G, Path, Rect } from "react-native-svg";
import Colors from "../../constants/Colors";

const BatterySVG = ({
  translate1,
  translate2,
  rotation,
  state,
  matrix,
  visible,
}) => {
  const translate =
    translate1 !== undefined
      ? "translate(" +
        translate1 +
        " " +
        translate2 +
        ")" +
        " rotate(" +
        rotation +
        ")"
      : matrix;

  return (
    // <Svg
    // // xmlns="http://www.w3.org/2000/svg"
    // // width="33"
    // // height="52.865"
    // // viewBox="0 0 33 52.865"
    // >
    <G id="Group_598" data-name="Group 598" transform={translate}>
      <Rect
        id="Rectangle_384"
        data-name="Rectangle 384"
        width="27"
        height="43"
        transform="translate(127.5 436.271)"
        opacity={visible !== undefined ? 0 : 1}
      />
      <G
        id="Group_260"
        data-name="Group 260"
        transform="translate(105.795 48.271)"
        // opacity={visible !== undefined ? 0 : 1}
      >
        <Rect //boppel
          id="Rectangle_219"
          data-name="Rectangle 219"
          width="16.052"
          height="7.729"
          rx="3.865"
          transform="translate(27.179 380.934)"
          fill={
            state == "empty" && visible === undefined
              ? "#63929c"
              : state == "empty" && visible !== undefined
              ? "#C8D6DA"
              : "#2a4a4f"
          }
        />
        <Path //BORDER
          id="Rectangle_220"
          data-name="Rectangle 220"
          d="M7,5A2,2,0,0,0,5,7V42a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2V7a2,2,0,0,0-2-2H7M7,0H26a7,7,0,0,1,7,7V42a7,7,0,0,1-7,7H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0Z"
          transform="translate(18.705 384.799)"
          fill={
            state == "empty" && visible === undefined
              ? "#63929c"
              : state == "empty" && visible !== undefined
              ? "#C8D6DA"
              : "#2a4a4f"
          }
        />
      </G>
      <Rect //FILL
        id="Rectangle_230"
        data-name="Rectangle 230"
        width="17"
        height="33"
        rx="2"
        transform="translate(132.5 441.271)"
        fill={
          state == "init"
            ? "#2a4a4f"
            : state == "filled"
            ? Colors.yellow
            : "#447681"
        }
        opacity={visible !== undefined && visible == false ? 0 : 1}
      />
    </G>
    // </Svg>
  );
};

export default BatterySVG;
