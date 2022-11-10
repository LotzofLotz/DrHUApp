import React from "react";
import Svg, { Path, Rect, G, Circle } from "react-native-svg";
import Colors from "../../constants/Colors";

const Breath = (props) => {
  return (
    <Svg
      //  width="132.156" height="372.206"
      width={props.small ? props.ratio * 50 : props.ratio * 70}
      height={props.small ? props.ratio * 90 : props.ratio * 180}
      viewBox={props.small ? "0 0 132.156 372.206" : "0 0 132.156 372.206"}
    >
      <G
        id="Group_192"
        data-name="Group 192"
        transform="translate(-3366.54 -367.978)"
      >
        <Rect
          id="Rectangle_165"
          data-name="Rectangle 165"
          width="12.275"
          height="233.214"
          transform="translate(3425.939 503.015)"
          fill="#2a4a4f"
        />
        <Path
          id="Rectangle_166"
          data-name="Rectangle 166"
          d="M22.508,0h0a0,0,0,0,1,0,0V93.044a0,0,0,0,1,0,0h0A22.508,22.508,0,0,1,0,70.536V22.508A22.508,22.508,0,0,1,22.508,0Z"
          transform="translate(3478.599 717.676) rotate(90)"
          fill="#2a4a4f"
        />
        <Path
          id="Path_507"
          data-name="Path 507"
          d="M3598.831,437.051l-3.681-5.366c.229-.157,23.023-16.016,26.1-34.129a21.893,21.893,0,0,0-4.3-17.345c-6.3-8.6-14.416-5.381-17.615-3.6-7.825,4.359-13.913,14.694-10.5,23.13l-6.033,2.439c-4.853-12,3.16-25.568,13.368-31.254,9.659-5.38,19.633-3.3,26.032,5.439a28.459,28.459,0,0,1,5.461,22.3C3624.111,419.5,3599.862,436.344,3598.831,437.051Z"
          transform="translate(-129.399)"
          fill="#63929c"
        />
        <Path
          id="Path_508"
          data-name="Path 508"
          d="M3468.56,872.876l-7.051-10.2c2.653-1.834,11.932-11.869,10.146-21.488-1.7-9.179-13.39-16.644-33.794-21.588-34.7-8.41-53.268-19.222-56.75-33.055-2.189-8.7,1.607-17.51,11.285-26.188l8.277,9.231c-4.112,3.687-8.757,9.1-7.54,13.931,1.006,4,7.664,14.344,47.648,24.033,25.873,6.27,40.361,16.826,43.062,31.374C3486.723,854.43,3474.554,868.732,3468.56,872.876Z"
          transform="translate(-8.416 -236.371)"
          fill={props.completed ? Colors.yellow : "#8cbf9b"}
        />
        <Path
          id="Path_509"
          data-name="Path 509"
          d="M3493.7,468.686c-2.89-8.945-6.887-10.138-9.207-9.954a3.043,3.043,0,0,1-2.95-1.7,136.457,136.457,0,0,0-7.594-13.486c-8.781-13.283-16.507-17.2-43.317-17.2s-34.537,3.922-43.318,17.2a136.608,136.608,0,0,0-7.594,13.486,3.043,3.043,0,0,1-2.95,1.7c-2.32-.184-6.317,1.009-9.207,9.954-3.646,11.286,3.432,21.691,5.7,24.626a3.072,3.072,0,0,1,.641,1.934c-.116,6.484-.431,39.409,4.794,49.112,3.531,6.558,11.3,11.5,13.989,13.067a3.062,3.062,0,0,1,1.319,1.546c1.679,4.347,8.775,21.174,18.243,21.71,10.179.576,10.52-2.756,18.259-3.017.082,0,.169,0,.251,0,7.739.262,8.08,3.594,18.258,3.017,9.468-.536,16.565-17.362,18.244-21.71a3.062,3.062,0,0,1,1.32-1.546c2.69-1.57,10.458-6.509,13.989-13.067,5.225-9.7,4.91-42.628,4.794-49.112a3.064,3.064,0,0,1,.641-1.934C3490.271,490.376,3497.349,479.972,3493.7,468.686Z"
          transform="translate(0 -35.158)"
          fill="#2a4a4f"
        />
        <Path
          id="Path_510"
          data-name="Path 510"
          d="M3504.162,553.459c-5.634-9.624-15.174-6.494-19.386-4.465a14.651,14.651,0,0,1-5.345,1.4,218.526,218.526,0,0,1-29.971.055,14.613,14.613,0,0,1-5.177-1.34c-4.365-2.027-14.426-5.267-20.1,4.424-7.387,12.621-5.233,40.94,5.233,62.179,9.344,18.964,15.008,28.357,22.468,26.428a14.165,14.165,0,0,1,6.134-.3,51.362,51.362,0,0,0,6.027.784,38.324,38.324,0,0,0,6.108-.748,15.346,15.346,0,0,1,6.708.145c7.39,1.936,12.723-7.425,22.068-26.389C3509.4,594.4,3511.55,566.08,3504.162,553.459Z"
          transform="translate(-32.096 -107.747)"
          fill={props.completed ? Colors.yellow : "#8cbf9b"}
        />
        <Path
          id="Path_511"
          data-name="Path 511"
          d="M3525.825,597.736c-7.682-19.492-17.743-36.174-32.892-46.851a217.255,217.255,0,0,1-23.141-.313,14.617,14.617,0,0,1-5.178-1.34c-2.468-1.146-6.756-2.678-11.043-2.044,27.715,15.6,63.9,65.106,58.761,82,2.09-3.729,4.357-8.216,6.929-13.435A92.933,92.933,0,0,0,3525.825,597.736Z"
          transform="translate(-52.428 -107.867)"
          fill="#fff"
          opacity="0.68"
        />
        <Path
          id="Rectangle_167"
          data-name="Rectangle 167"
          d="M15.494,0h0A15.494,15.494,0,0,1,30.987,15.494V31.038a6.105,6.105,0,0,1-6.105,6.105H6.105A6.105,6.105,0,0,1,0,31.038V15.494A15.494,15.494,0,0,1,15.494,0Z"
          transform="translate(3415.995 499.605)"
          fill="#2a4a4f"
        />
        <Rect
          id="Rectangle_168"
          data-name="Rectangle 168"
          width="15.939"
          height="23.427"
          rx="7.969"
          transform="matrix(0.796, -0.606, 0.606, 0.796, 3371.199, 421.255)"
          fill="#63929c"
        />
        <Rect
          id="Rectangle_169"
          data-name="Rectangle 169"
          width="15.939"
          height="23.427"
          rx="7.969"
          transform="matrix(-0.796, -0.606, 0.606, -0.796, 3476.843, 439.897)"
          fill="#63929c"
        />
        <Rect
          id="Rectangle_170"
          data-name="Rectangle 170"
          width="26.78"
          height="31.859"
          rx="12"
          transform="translate(3418.098 388.073)"
          fill="#63929c"
        />
        <G
          id="Group_186"
          data-name="Group 186"
          transform="translate(3374.385 512.344)"
        >
          <Rect
            id="Rectangle_171"
            data-name="Rectangle 171"
            width="23.703"
            height="13.614"
            rx="3.534"
            transform="matrix(0.636, 0.772, -0.772, 0.636, 10.506, 4.334)"
            fill="#63929c"
          />
          <Rect
            id="Rectangle_172"
            data-name="Rectangle 172"
            width="30.155"
            height="5.554"
            rx="2.777"
            transform="translate(10.692 0) rotate(50.508)"
            fill="#63929c"
          />
        </G>
        <G
          id="Group_187"
          data-name="Group 187"
          transform="translate(3394.036 617.932)"
        >
          <Rect
            id="Rectangle_173"
            data-name="Rectangle 173"
            width="23.703"
            height="13.614"
            rx="3.534"
            transform="translate(25.58 8.658) rotate(129.492)"
            fill="#63929c"
          />
          <Rect
            id="Rectangle_174"
            data-name="Rectangle 174"
            width="30.155"
            height="5.554"
            rx="2.777"
            transform="translate(29.87 8.012) rotate(129.492)"
            fill="#63929c"
          />
        </G>
        <G
          id="Group_188"
          data-name="Group 188"
          transform="translate(3440.683 617.932)"
        >
          <Rect
            id="Rectangle_175"
            data-name="Rectangle 175"
            width="23.703"
            height="13.614"
            rx="3.534"
            transform="translate(14.795 0) rotate(50.508)"
            fill="#63929c"
          />
          <Rect
            id="Rectangle_176"
            data-name="Rectangle 176"
            width="30.155"
            height="5.554"
            rx="2.777"
            transform="translate(4.286 4.48) rotate(50.508)"
            fill="#63929c"
          />
        </G>
        <G
          id="Group_189"
          data-name="Group 189"
          transform="translate(3458.246 510.795)"
        >
          <Rect
            id="Rectangle_177"
            data-name="Rectangle 177"
            width="23.703"
            height="13.614"
            rx="3.534"
            transform="matrix(-0.636, 0.772, -0.772, -0.636, 29.87, 12.992)"
            fill="#63929c"
          />
          <Rect
            id="Rectangle_178"
            data-name="Rectangle 178"
            width="30.155"
            height="5.554"
            rx="2.777"
            transform="translate(23.464 3.532) rotate(129.492)"
            fill="#63929c"
          />
        </G>
        <G
          id="Group_191"
          data-name="Group 191"
          transform="translate(3397.23 626.052)"
        >
          <Rect
            id="Rectangle_179"
            data-name="Rectangle 179"
            width="39.59"
            height="82.326"
            transform="translate(15.105 14.745)"
            fill="#2a4a4f"
          />
          <G
            id="Group_190"
            data-name="Group 190"
            transform="translate(20.883 17.024)"
            style="isolation: isolate"
          >
            <Path
              id="Path_512"
              data-name="Path 512"
              d="M3523.418,1061.075l-3.52,4.194,3.769,3.483-3.617,3.641,3.769,3.483-3.617,3.641,3.769,3.483-3.617,3.642,3.769,3.485-3.617,3.642,3.769,3.484-3.617,3.642,3.769,3.485-3.617,3.642,3.769,3.484-3.617,3.642,3.769,3.484-3.617,3.643,3.769,3.487-3.617,3.643,3.769,3.488-3.53,3.045.494,2.362-1.063-3.735-1.333,3.647-1.062-3.735-1.331,3.648-1.062-3.735-1.333,3.648-1.062-3.735-1.333,3.648-1.062-3.735-1.334,3.648-1.063-3.736-1.334,3.648-1.064-3.735-1.334,3.648-1.063-3.735-1.334,3.647-1.064-3.735-1.335,3.648-1.066-3.735-3.019,2.395,3.6-4.083-3.691-3.494,3.7-3.488-3.691-3.495,3.7-3.489-3.691-3.495,3.7-3.489-3.691-3.5,3.7-3.489-3.691-3.5,3.7-3.49-3.691-3.5,3.7-3.489-3.691-3.5,3.7-3.489-3.69-3.5,3.7-3.49-3.691-3.5,3.7-3.49-3.691-3.5,3.61-2.934-.685-2.434,1.207,3.666,1.03-3.72,1.207,3.666,1.029-3.72,1.206,3.666,1.031-3.719,1.206,3.666,1.031-3.72,1.207,3.666,1.032-3.72,1.207,3.666,1.031-3.719,1.208,3.666,1.032-3.72,1.207,3.666,1.032-3.72,1.208,3.666,1.032-3.72,1.462,3.643Z"
              transform="translate(-3496.254 -1059.875)"
              fill={props.completed ? Colors.yellow : "#8cbf9b"}
            />
          </G>
          <Rect
            id="Rectangle_180"
            data-name="Rectangle 180"
            width="54.78"
            height="31.463"
            rx="3.534"
            transform="translate(62.236 31.463) rotate(-180)"
            fill="#63929c"
          />
          <Rect
            id="Rectangle_181"
            data-name="Rectangle 181"
            width="69.692"
            height="12.836"
            rx="3.534"
            transform="translate(69.692 99.949) rotate(180)"
            fill="#63929c"
          />
        </G>
        <Rect
          id="Rectangle_182"
          data-name="Rectangle 182"
          width="16.93"
          height="31.859"
          rx="8.465"
          transform="translate(3423.331 494.578)"
          fill="#63929c"
        />
        <Path
          id="Path_513"
          data-name="Path 513"
          d="M3435.183,872.876c-5.993-4.144-18.164-18.445-15.285-33.949,2.7-14.548,17.19-25.1,43.062-31.374,39.984-9.689,46.641-20.035,47.648-24.033,1.217-4.835-3.428-10.244-7.54-13.931l8.277-9.23c9.678,8.678,13.475,17.489,11.285,26.187-3.482,13.833-22.045,24.645-56.75,33.055-20.4,4.944-32.089,12.409-33.793,21.588-1.786,9.619,7.493,19.654,10.146,21.488Z"
          transform="translate(-31.882 -236.371)"
          fill="#63929c"
        />
        <Circle
          id="Ellipse_74"
          data-name="Ellipse 74"
          cx="6.418"
          cy="6.418"
          r="6.418"
          transform="translate(3425.378 400.996)"
          fill="#bf8ca2"
          style="isolation: isolate"
        />
        <Circle
          id="Ellipse_75"
          data-name="Ellipse 75"
          cx="4.174"
          cy="4.174"
          r="4.174"
          transform="translate(3427.622 499.605)"
          fill={props.completed ? Colors.yellow : "#8cbf9b"}
          style="isolation: isolate"
        />
      </G>
    </Svg>
  );
};

export default Breath;