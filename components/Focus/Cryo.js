import React from "react";
import Svg, { Path, Rect, G, ClipPath, Defs } from "react-native-svg";
import Colors from "../../constants/Colors";

const Cryo = (props) => {
  // const width = Dimensions.get("window").width * 0.5;
  // const height = Dimensions.get("window").height * 0.5;

  return (
    <Svg
      id="Component_29_1"
      // width="190.352"
      // height="362.898"
      width={props.small ? props.ratio * 50 : props.ratio * 90}
      height={props.small ? props.ratio * 100 : props.ratio * 200}
      // viewBox="0 0 190.352 362.898"
      viewBox={props.small ? "0 0 200 320" : "0 0 190.352 288"}
    >
      <Defs>
        <ClipPath id="clip-Path">
          <Rect
            id="Rectangle_148"
            data-name="Rectangle 148"
            width="190.352"
            height="362.898"
            fill="none"
          />
        </ClipPath>
        <ClipPath id="clip-Path-2">
          <Rect
            id="Rectangle_147"
            data-name="Rectangle 147"
            width="190.352"
            height="362.898"
            fill="#a9d3eb"
          />
        </ClipPath>
        <ClipPath id="clip-Path-3">
          <Rect
            id="Rectangle_146"
            data-name="Rectangle 146"
            width="30.301"
            height="243.249"
            fill="none"
          />
        </ClipPath>
      </Defs>
      <G
        id="Mask_Group_159"
        data-name="Mask Group 159"
        clip-Path="url(#clip-Path)"
      >
        <Rect
          id="Rectangle_144"
          data-name="Rectangle 144"
          width="159.663"
          height="223.76"
          transform="translate(15.733 124.765)"
          fill={props.completed ? Colors.yellow : "#a9d3eb"}
        />
        <G id="Group_158" data-name="Group 158">
          <G id="Group_157" data-name="Group 157" clip-Path="url(#clip-Path-2)">
            <G
              id="Group_156"
              data-name="Group 156"
              transform="translate(127.03 113.499)"
              opacity="0.41"
            >
              <G id="Group_155" data-name="Group 155">
                <G
                  id="Group_154"
                  data-name="Group 154"
                  clip-Path="url(#clip-Path-3)"
                >
                  <Rect
                    id="Rectangle_145"
                    data-name="Rectangle 145"
                    width="30.301"
                    height="243.249"
                    transform="translate(0)"
                    fill="#fff"
                  />
                </G>
              </G>
            </G>
            <Path
              id="Path_460"
              data-name="Path 460"
              d="M0,701.206H0a12.431,12.431,0,0,1,12.431-12.431h165.49a12.431,12.431,0,0,1,12.431,12.431Z"
              transform="translate(0 -343.163)"
              fill="#2a4a4f"
            />
            <Path
              id="Path_461"
              data-name="Path 461"
              d="M189.948,235.871h0A12.431,12.431,0,0,1,177.517,248.3H16.69A12.431,12.431,0,0,1,4.258,235.871Z"
              transform="translate(-2.121 -117.516)"
              fill="#2a4a4f"
            />
            <Path
              id="Path_462"
              data-name="Path 462"
              d="M191.045,512.258a19.817,19.817,0,0,0-18.8,13.75,68.844,68.844,0,0,1-131.06-.617,18.826,18.826,0,0,0-17.958-13.133v90.9h167.82Z"
              transform="translate(-11.571 -255.219)"
              fill="#2a4a4f"
            />
            <Path
              id="Path_463"
              data-name="Path 463"
              d="M190.922,171.851a87.041,87.041,0,0,0-169.5,0Z"
              transform="translate(-10.672 -52.137)"
              fill="#2a4a4f"
            />
            <Path
              id="Path_464"
              data-name="Path 464"
              d="M191.491,645.588H153.032v-52.8a13.046,13.046,0,0,1,13.046-13.046h12.366a13.046,13.046,0,0,1,13.046,13.046Z"
              transform="translate(-76.244 -288.841)"
              fill="#2a4a4f"
            />
            <Path
              id="Path_465"
              data-name="Path 465"
              d="M299.9,671.579H273.806V641.836a13.046,13.046,0,0,1,26.092,0Z"
              transform="translate(-136.416 -313.277)"
              fill="#63929c"
            />
            <Path
              id="Path_466"
              data-name="Path 466"
              d="M189.257,256.923H144V246.207a13.046,13.046,0,0,1,13.046-13.046h19.165a13.046,13.046,0,0,1,13.046,13.046Z"
              transform="translate(-71.744 -116.166)"
              fill="#63929c"
            />
            <Path
              id="Path_467"
              data-name="Path 467"
              d="M186.073,607.646h-7.437a5.346,5.346,0,0,1-5.346-5.346v-1.1a5.346,5.346,0,0,1,5.346-5.346h7.437a5.346,5.346,0,0,1,5.346,5.346v1.1a5.346,5.346,0,0,1-5.346,5.346"
              transform="translate(-86.337 -296.868)"
              fill={props.completed ? Colors.yellow : "#a9d3eb"}
            />
            <Path
              id="Path_468"
              data-name="Path 468"
              d="M43.595,233.32h0a5.346,5.346,0,1,1,5.346-5.346,5.346,5.346,0,0,1-5.346,5.346"
              transform="translate(-19.057 -110.918)"
              fill="#a9d3eb"
            />
            <Path
              id="Path_469"
              data-name="Path 469"
              d="M116.123,497.684a13.665,13.665,0,1,1-13.665,13.665,13.681,13.681,0,0,1,13.665-13.665m0-2.845a16.51,16.51,0,1,0,16.51,16.51,16.51,16.51,0,0,0-16.51-16.51"
              transform="translate(-49.629 -246.54)"
              fill="#fff"
            />
            <Path
              id="Path_470"
              data-name="Path 470"
              d="M177.26,452.78a6.673,6.673,0,1,1-6.673,6.673,6.68,6.68,0,0,1,6.673-6.673m0-2.845a9.518,9.518,0,1,0,9.518,9.518,9.518,9.518,0,0,0-9.518-9.518"
              transform="translate(-83.573 -224.168)"
              fill="#fff"
            />
            <Path
              id="Path_471"
              data-name="Path 471"
              d="M148.407,422.974a2.982,2.982,0,1,1-2.983,2.983,2.986,2.986,0,0,1,2.983-2.983m0-2.845a5.827,5.827,0,1,0,5.827,5.827,5.827,5.827,0,0,0-5.827-5.827"
              transform="translate(-71.037 -209.318)"
              fill="#fff"
            />
            <Path
              id="Path_472"
              data-name="Path 472"
              d="M246.7,391.878a13.665,13.665,0,1,1-13.665,13.665A13.681,13.681,0,0,1,246.7,391.878m0-2.845a16.51,16.51,0,1,0,16.51,16.51,16.51,16.51,0,0,0-16.51-16.51"
              transform="translate(-114.688 -193.825)"
              fill="#fff"
            />
            <Path
              id="Path_473"
              data-name="Path 473"
              d="M179.84,336.136a6.673,6.673,0,1,1-6.673,6.673,6.68,6.68,0,0,1,6.673-6.673m0-2.845a9.517,9.517,0,1,0,9.518,9.518,9.518,9.518,0,0,0-9.518-9.518"
              transform="translate(-84.858 -166.053)"
              fill="#fff"
            />
            <Path
              id="Path_474"
              data-name="Path 474"
              d="M118.472,313.555a2.982,2.982,0,1,1-2.983,2.983,2.986,2.986,0,0,1,2.983-2.983m0-2.845a5.827,5.827,0,1,0,5.827,5.827,5.827,5.827,0,0,0-5.827-5.827"
              transform="translate(-56.122 -154.803)"
              fill="#fff"
            />
            <Path
              id="Path_475"
              data-name="Path 475"
              d="M187.612,106.751H169.419V98.237a3.011,3.011,0,0,1,3.011-3.011H184.6a3.011,3.011,0,0,1,3.011,3.011Z"
              transform="translate(-84.408 -47.444)"
              fill="#63929c"
            />
            <Path
              id="Path_476"
              data-name="Path 476"
              d="M187.589,49.368H176.258V5.665a5.665,5.665,0,0,1,11.331,0Z"
              transform="translate(-87.816)"
              fill="#63929c"
            />
            <Path
              id="Path_477"
              data-name="Path 477"
              d="M102.584,120.777l-15.224,9.961L82.7,123.613a3.011,3.011,0,0,1,.871-4.168l10.186-6.664a3.011,3.011,0,0,1,4.168.871Z"
              transform="translate(-40.957 -55.945)"
              fill="#63929c"
            />
            <Path
              id="Path_478"
              data-name="Path 478"
              d="M72.159,77.516l-9.481,6.2L38.749,47.149a5.665,5.665,0,1,1,9.481-6.2Z"
              transform="translate(-18.845 -19.123)"
              fill="#63929c"
            />
            <Path
              id="Path_479"
              data-name="Path 479"
              d="M257.179,120.777l15.224,9.961,4.661-7.125a3.011,3.011,0,0,0-.871-4.168l-10.186-6.664a3.011,3.011,0,0,0-4.168.871Z"
              transform="translate(-128.132 -55.945)"
              fill="#63929c"
            />
            <Path
              id="Path_480"
              data-name="Path 480"
              d="M273.746,77.516l9.481,6.2,23.928-36.571a5.665,5.665,0,1,0-9.481-6.2Z"
              transform="translate(-136.386 -19.123)"
              fill="#63929c"
            />
            <Path
              id="Path_481"
              data-name="Path 481"
              d="M70.535,231.268a2.752,2.752,0,1,1-2.752-2.752,2.752,2.752,0,0,1,2.752,2.752"
              transform="translate(-32.4 -113.852)"
              fill="#a9d3eb"
            />
            <Path
              id="Path_482"
              data-name="Path 482"
              d="M85.761,231.268a2.752,2.752,0,1,1-2.752-2.752,2.752,2.752,0,0,1,2.752,2.752"
              transform="translate(-39.986 -113.852)"
              fill="#a9d3eb"
            />
            <Path
              id="Path_483"
              data-name="Path 483"
              d="M100.729,231.268a2.752,2.752,0,1,1-2.752-2.752,2.752,2.752,0,0,1,2.752,2.752"
              transform="translate(-47.444 -113.852)"
              fill={props.completed ? Colors.yellow : "#a9d3eb"}
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};

export default Cryo;
