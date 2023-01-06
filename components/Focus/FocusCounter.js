import React from "react";
import Svg, { Path, G, Rect, Circle } from "react-native-svg";

const FocusCounter = ({ count, width, machine, height }) => {
  console.log("width:", width, " height: ", height);
  return count == 0 ? (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      // width="505.387"
      // height="65.929"
      // viewBox="0 0 499.387 61.929"
      width={String(width)}
      height={String(height / 4)}
      viewBox="-1 4 406 48.929"
    >
      <G
        id="FokusBatterieStatus_Leer"
        data-name="FokusBatterieStatus Leer"
        transform="translate(-1504.807 -57.557)"
      >
        <G
          id="Battery_2"
          data-name="Battery 2"
          transform="translate(-1498.535 -2163.039)"
        >
          <Path
            id="Path_966"
            data-name="Path 966"
            d="M77.658,150.893H54.72A13.133,13.133,0,0,1,41.6,137.775V94.3A13.133,13.133,0,0,1,54.72,81.177H77.658A13.133,13.133,0,0,1,90.776,94.3v43.48a13.133,13.133,0,0,1-13.118,13.118M54.72,86.694a7.61,7.61,0,0,0-7.6,7.6v43.48a7.609,7.609,0,0,0,7.6,7.6H77.658a7.609,7.609,0,0,0,7.6-7.6V94.3a7.61,7.61,0,0,0-7.6-7.6Z"
            transform="translate(3344.817 2186.263) rotate(90)"
            fill="#2a4a4f"
          />
          <Path
            id="Path_967"
            data-name="Path 967"
            d="M90.468,76.751H70.828c-.907,0-1.643-.541-1.645-1.206V69.851c0-.666.738-1.2,1.645-1.206h19.64c.907,0,1.643.541,1.645,1.206v5.693c0,.666-.737,1.2-1.645,1.206"
            transform="translate(3338.382 2172.102) rotate(90)"
            fill="#2a4a4f"
          />
        </G>
        <G
          id="Battery_1"
          data-name="Battery 1"
          transform="translate(-1587.126 -2163.039)"
        >
          <Path
            id="Path_966-2"
            data-name="Path 966"
            d="M77.658,150.893H54.72A13.133,13.133,0,0,1,41.6,137.775V94.3A13.133,13.133,0,0,1,54.72,81.177H77.658A13.133,13.133,0,0,1,90.776,94.3v43.48a13.133,13.133,0,0,1-13.118,13.118M54.72,86.694a7.61,7.61,0,0,0-7.6,7.6v43.48a7.609,7.609,0,0,0,7.6,7.6H77.658a7.609,7.609,0,0,0,7.6-7.6V94.3a7.61,7.61,0,0,0-7.6-7.6Z"
            transform="translate(3344.817 2186.263) rotate(90)"
            fill="#2a4a4f"
          />
          <Path
            id="Path_967-2"
            data-name="Path 967"
            d="M90.468,76.751H70.828c-.907,0-1.643-.541-1.645-1.206V69.851c0-.666.738-1.2,1.645-1.206h19.64c.907,0,1.643.541,1.645,1.206v5.693c0,.666-.737,1.2-1.645,1.206"
            transform="translate(3338.382 2172.102) rotate(90)"
            fill="#2a4a4f"
          />
        </G>
        {/* HIER ANPASSEN JE NACH MACHINE */}
        <G id="Icons" transform="translate(1483 -523)">
          <Path
            id="Icon_ionic-md-snow"
            data-name="Icon ionic-md-snow"
            d="M25.038,16.192,24.6,14.576,20,15.81l-3.16-1.826L20,12.159l4.6,1.235.434-1.617-2.987-.8L25.07,9.234,23.814,7.063,20.853,8.774l.8-2.987-1.617-.434L18.8,9.956l-3.254,1.878V8.115l3.374-3.369L17.735,3.563,15.548,5.75V2.25H13.037V5.682L10.856,3.5,9.673,4.683l3.364,3.369v3.735L9.862,9.956l-1.235-4.6L7.01,5.787l.8,2.987L4.792,7.026,3.537,9.2,6.5,10.914l-2.987.8.434,1.617,4.6-1.235,3.275,1.889L8.548,15.878l-4.6-1.235L3.516,16.26l2.987.8L3.537,18.771l1.256,2.171L7.811,19.2l-.8,2.982,1.617.434,1.235-4.6,3.176-1.836v3.709L9.673,23.26l1.182,1.182,2.182-2.187v3.432h2.511V22.193l2.192,2.182,1.177-1.182-3.369-3.364V16.135L18.8,18.018l1.235,4.6,1.617-.434-.8-2.982,2.961,1.711,1.256-2.176-3.019-1.742Z"
            transform="translate(144.412 598.444)"
            fill="#2a4a4f"
          />
          <Path
            id="Icon_ionic-md-snow-2"
            data-name="Icon ionic-md-snow"
            d="M25.038,16.192,24.6,14.576,20,15.81l-3.16-1.826L20,12.159l4.6,1.235.434-1.617-2.987-.8L25.07,9.234,23.814,7.063,20.853,8.774l.8-2.987-1.617-.434L18.8,9.956l-3.254,1.878V8.115l3.374-3.369L17.735,3.563,15.548,5.75V2.25H13.037V5.682L10.856,3.5,9.673,4.683l3.364,3.369v3.735L9.862,9.956l-1.235-4.6L7.01,5.787l.8,2.987L4.792,7.026,3.537,9.2,6.5,10.914l-2.987.8.434,1.617,4.6-1.235,3.275,1.889L8.548,15.878l-4.6-1.235L3.516,16.26l2.987.8L3.537,18.771l1.256,2.171L7.811,19.2l-.8,2.982,1.617.434,1.235-4.6,3.176-1.836v3.709L9.673,23.26l1.182,1.182,2.182-2.187v3.432h2.511V22.193l2.192,2.182,1.177-1.182-3.369-3.364V16.135L18.8,18.018l1.235,4.6,1.617-.434-.8-2.982,2.961,1.711,1.256-2.176-3.019-1.742Z"
            transform="translate(233.926 598.444)"
            fill="#2a4a4f"
          />
        </G>
        <G
          id="Ornament_Left"
          data-name="Ornament Left"
          transform="translate(-1506 -2120)"
        >
          <Path
            id="Path_484"
            data-name="Path 484"
            d="M91.842,506.482H35.018a15.257,15.257,0,0,1,15.257-15.257H76.585A15.257,15.257,0,0,1,91.842,506.482Z"
            transform="translate(3517.352 2147.644) rotate(90)"
            fill="#2a4a4f"
          />
          <Rect
            id="Rectangle_149"
            data-name="Rectangle 149"
            width="13.241"
            height="84.596"
            transform="translate(3095.466 2204.453) rotate(90)"
            fill="#2a4a4f"
          />
          <G
            id="Ornament_Left_Color_Parts"
            data-name="Ornament Left Color Parts"
          >
            <Path
              id="Path_494"
              data-name="Path 494"
              d="M51.011,325.4c.187-7.925-9.56-23.708-20.217-29.313A47.871,47.871,0,0,1,6.411,266.175c-3.351-12.185.476-20.187,4.276-24.754,4.069-4.889,4.684-3.591,4.889-3.673l2.044,5.664c-.611.251-10.656,3.071-5.7,21.069a41.831,41.831,0,0,0,21.431,26.182c11.894,6.256,23.727,22.957,23.448,34.741C56.795,325.365,51,325.416,51.011,325.4Z"
              transform="translate(3336.213 2172.432) rotate(90)"
              fill="#a9d3eb"
            />
            <Path
              id="Path_489"
              data-name="Path 489"
              d="M87.705,291.855a4.387,4.387,0,0,1-1.048-.128l-15.8-3.871A5.6,5.6,0,0,1,66.9,282.3a5.135,5.135,0,0,1,1.868-4.1,4.334,4.334,0,0,1,3.726-.8L88.3,281.263a5.6,5.6,0,0,1,3.954,5.557,5.134,5.134,0,0,1-1.868,4.1,4.329,4.329,0,0,1-2.679.93"
              transform="translate(3359.496 2131.274) rotate(90)"
              fill="#a9d3eb"
            />
            <Path
              id="Path_491"
              data-name="Path 491"
              d="M87.705,323.855a4.387,4.387,0,0,1-1.048-.128l-15.8-3.871A5.6,5.6,0,0,1,66.9,314.3a5.135,5.135,0,0,1,1.868-4.1,4.331,4.331,0,0,1,3.726-.8L88.3,313.263a5.6,5.6,0,0,1,3.954,5.557,5.134,5.134,0,0,1-1.868,4.1,4.329,4.329,0,0,1-2.679.93"
              transform="translate(3375.926 2131.274) rotate(90)"
              fill="#a9d3eb"
            />
          </G>
          <Path
            id="Path_485"
            data-name="Path 485"
            d="M35.018,232.257H86.509c0,8.426-6.19,15.257-13.825,15.257H48.843C41.208,247.514,35.018,240.683,35.018,232.257Z"
            transform="translate(3336.387 2150.31) rotate(90)"
            fill="#2a4a4f"
          />
        </G>
        <G
          id="Ornament_Right"
          data-name="Ornament Right"
          transform="translate(-1230.937 -2120)"
        >
          <Path
            id="Path_484-2"
            data-name="Path 484"
            d="M91.842,506.482H35.018a15.257,15.257,0,0,1,15.257-15.257H76.585A15.257,15.257,0,0,1,91.842,506.482Z"
            transform="translate(3517.352 2147.644) rotate(90)"
            fill="#2a4a4f"
          />
          <Rect
            id="Rectangle_149-2"
            data-name="Rectangle 149"
            width="13.241"
            height="84.596"
            transform="translate(3095.466 2204.453) rotate(90)"
            fill="#2a4a4f"
          />
          <G
            id="Ornament_Right_Color_Parts"
            data-name="Ornament Right Color Parts"
          >
            <Path
              id="Path_494-2"
              data-name="Path 494"
              d="M51.011,325.4c.187-7.925-9.56-23.708-20.217-29.313A47.871,47.871,0,0,1,6.411,266.175c-3.351-12.185.476-20.187,4.276-24.754,4.069-4.889,4.684-3.591,4.889-3.673l2.044,5.664c-.611.251-10.656,3.071-5.7,21.069a41.831,41.831,0,0,0,21.431,26.182c11.894,6.256,23.727,22.957,23.448,34.741C56.795,325.365,51,325.416,51.011,325.4Z"
              transform="translate(3336.213 2172.432) rotate(90)"
              fill="#a9d3eb"
            />
            <Path
              id="Path_489-2"
              data-name="Path 489"
              d="M87.705,291.855a4.387,4.387,0,0,1-1.048-.128l-15.8-3.871A5.6,5.6,0,0,1,66.9,282.3a5.135,5.135,0,0,1,1.868-4.1,4.334,4.334,0,0,1,3.726-.8L88.3,281.263a5.6,5.6,0,0,1,3.954,5.557,5.134,5.134,0,0,1-1.868,4.1,4.329,4.329,0,0,1-2.679.93"
              transform="translate(3359.496 2131.274) rotate(90)"
              fill="#a9d3eb"
            />
            <Path
              id="Path_491-2"
              data-name="Path 491"
              d="M87.705,323.855a4.387,4.387,0,0,1-1.048-.128l-15.8-3.871A5.6,5.6,0,0,1,66.9,314.3a5.135,5.135,0,0,1,1.868-4.1,4.331,4.331,0,0,1,3.726-.8L88.3,313.263a5.6,5.6,0,0,1,3.954,5.557,5.134,5.134,0,0,1-1.868,4.1,4.329,4.329,0,0,1-2.679.93"
              transform="translate(3375.926 2131.274) rotate(90)"
              fill="#a9d3eb"
            />
          </G>
          <Path
            id="Path_485-2"
            data-name="Path 485"
            d="M35.018,232.257H86.509c0,8.426-6.19,15.257-13.825,15.257H48.843C41.208,247.514,35.018,240.683,35.018,232.257Z"
            transform="translate(3336.387 2150.31) rotate(90)"
            fill="#2a4a4f"
          />
        </G>
      </G>
    </Svg>
  ) : count == 1 ? (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={String(width)}
      height={String(height / 4)}
      viewBox="-1 4 406 48.929"
    >
      <G
        id="FokusBatterieStatus_Halb"
        data-name="FokusBatterieStatus Halb"
        transform="translate(-1916.307 -57.557)"
      >
        <G
          id="Battery_2"
          data-name="Battery 2"
          transform="translate(-1087.035 -2163.039)"
        >
          <Path
            id="Path_966"
            data-name="Path 966"
            d="M77.658,150.893H54.72A13.133,13.133,0,0,1,41.6,137.775V94.3A13.133,13.133,0,0,1,54.72,81.177H77.658A13.133,13.133,0,0,1,90.776,94.3v43.48a13.133,13.133,0,0,1-13.118,13.118M54.72,86.694a7.61,7.61,0,0,0-7.6,7.6v43.48a7.609,7.609,0,0,0,7.6,7.6H77.658a7.609,7.609,0,0,0,7.6-7.6V94.3a7.61,7.61,0,0,0-7.6-7.6Z"
            transform="translate(3344.817 2186.263) rotate(90)"
            fill="#2a4a4f"
          />
          <Path
            id="Path_967"
            data-name="Path 967"
            d="M90.468,76.751H70.828c-.907,0-1.643-.541-1.645-1.206V69.851c0-.666.738-1.2,1.645-1.206h19.64c.907,0,1.643.541,1.645,1.206v5.693c0,.666-.737,1.2-1.645,1.206"
            transform="translate(3338.382 2172.102) rotate(90)"
            fill="#2a4a4f"
          />
        </G>
        <G
          id="Battery_1"
          data-name="Battery 1"
          transform="translate(-1175.626 -2163.039)"
        >
          <Path
            id="Path_966-2"
            data-name="Path 966"
            d="M77.658,150.893H54.72A13.133,13.133,0,0,1,41.6,137.775V94.3A13.133,13.133,0,0,1,54.72,81.177H77.658A13.133,13.133,0,0,1,90.776,94.3v43.48a13.133,13.133,0,0,1-13.118,13.118M54.72,86.694a7.61,7.61,0,0,0-7.6,7.6v43.48a7.609,7.609,0,0,0,7.6,7.6H77.658a7.609,7.609,0,0,0,7.6-7.6V94.3a7.61,7.61,0,0,0-7.6-7.6Z"
            transform="translate(3344.817 2186.263) rotate(90)"
            fill="#2a4a4f"
          />
          <Path
            id="Path_967-2"
            data-name="Path 967"
            d="M90.468,76.751H70.828c-.907,0-1.643-.541-1.645-1.206V69.851c0-.666.738-1.2,1.645-1.206h19.64c.907,0,1.643.541,1.645,1.206v5.693c0,.666-.737,1.2-1.645,1.206"
            transform="translate(3338.382 2172.102) rotate(90)"
            fill="#2a4a4f"
          />
        </G>
        <G id="Fillstates" transform="translate(-1176.053 -2163.039)">
          <Path
            id="Path_968"
            data-name="Path 968"
            d="M87.568,173.473H65.626a4.3,4.3,0,0,1-4.285-4.285V126.6a4.3,4.3,0,0,1,4.285-4.285H87.568a4.3,4.3,0,0,1,4.285,4.285v42.586a4.3,4.3,0,0,1-4.285,4.285"
            transform="translate(3376.41 2176.128) rotate(90)"
            fill="#f5ce52"
          />
        </G>
        <G id="Icons" transform="translate(1894.5 -523)">
          <Path
            id="Icon_ionic-md-snow"
            data-name="Icon ionic-md-snow"
            d="M25.038,16.192,24.6,14.576,20,15.81l-3.16-1.826L20,12.159l4.6,1.235.434-1.617-2.987-.8L25.07,9.234,23.814,7.063,20.853,8.774l.8-2.987-1.617-.434L18.8,9.956l-3.254,1.878V8.115l3.374-3.369L17.735,3.563,15.548,5.75V2.25H13.037V5.682L10.856,3.5,9.673,4.683l3.364,3.369v3.735L9.862,9.956l-1.235-4.6L7.01,5.787l.8,2.987L4.792,7.026,3.537,9.2,6.5,10.914l-2.987.8.434,1.617,4.6-1.235,3.275,1.889L8.548,15.878l-4.6-1.235L3.516,16.26l2.987.8L3.537,18.771l1.256,2.171L7.811,19.2l-.8,2.982,1.617.434,1.235-4.6,3.176-1.836v3.709L9.673,23.26l1.182,1.182,2.182-2.187v3.432h2.511V22.193l2.192,2.182,1.177-1.182-3.369-3.364V16.135L18.8,18.018l1.235,4.6,1.617-.434-.8-2.982,2.961,1.711,1.256-2.176-3.019-1.742Z"
            transform="translate(144.412 598.444)"
            fill="#2a4a4f"
          />
          <Path
            id="Icon_ionic-md-snow-2"
            data-name="Icon ionic-md-snow"
            d="M25.038,16.192,24.6,14.576,20,15.81l-3.16-1.826L20,12.159l4.6,1.235.434-1.617-2.987-.8L25.07,9.234,23.814,7.063,20.853,8.774l.8-2.987-1.617-.434L18.8,9.956l-3.254,1.878V8.115l3.374-3.369L17.735,3.563,15.548,5.75V2.25H13.037V5.682L10.856,3.5,9.673,4.683l3.364,3.369v3.735L9.862,9.956l-1.235-4.6L7.01,5.787l.8,2.987L4.792,7.026,3.537,9.2,6.5,10.914l-2.987.8.434,1.617,4.6-1.235,3.275,1.889L8.548,15.878l-4.6-1.235L3.516,16.26l2.987.8L3.537,18.771l1.256,2.171L7.811,19.2l-.8,2.982,1.617.434,1.235-4.6,3.176-1.836v3.709L9.673,23.26l1.182,1.182,2.182-2.187v3.432h2.511V22.193l2.192,2.182,1.177-1.182-3.369-3.364V16.135L18.8,18.018l1.235,4.6,1.617-.434-.8-2.982,2.961,1.711,1.256-2.176-3.019-1.742Z"
            transform="translate(233.926 598.444)"
            fill="#2a4a4f"
          />
        </G>
        <G
          id="Ornament_Left"
          data-name="Ornament Left"
          transform="translate(-1094.5 -2120)"
        >
          <Path
            id="Path_484"
            data-name="Path 484"
            d="M91.842,506.482H35.018a15.257,15.257,0,0,1,15.257-15.257H76.585A15.257,15.257,0,0,1,91.842,506.482Z"
            transform="translate(3517.352 2147.644) rotate(90)"
            fill="#2a4a4f"
          />
          <Rect
            id="Rectangle_149"
            data-name="Rectangle 149"
            width="13.241"
            height="84.596"
            transform="translate(3095.466 2204.453) rotate(90)"
            fill="#2a4a4f"
          />
          <G
            id="Ornament_Left_Color_Parts"
            data-name="Ornament Left Color Parts"
          >
            <Path
              id="Path_494"
              data-name="Path 494"
              d="M51.011,325.4c.187-7.925-9.56-23.708-20.217-29.313A47.871,47.871,0,0,1,6.411,266.175c-3.351-12.185.476-20.187,4.276-24.754,4.069-4.889,4.684-3.591,4.889-3.673l2.044,5.664c-.611.251-10.656,3.071-5.7,21.069a41.831,41.831,0,0,0,21.431,26.182c11.894,6.256,23.727,22.957,23.448,34.741C56.795,325.365,51,325.416,51.011,325.4Z"
              transform="translate(3336.213 2172.432) rotate(90)"
              fill="#a9d3eb"
            />
            <Path
              id="Path_489"
              data-name="Path 489"
              d="M87.705,291.855a4.387,4.387,0,0,1-1.048-.128l-15.8-3.871A5.6,5.6,0,0,1,66.9,282.3a5.135,5.135,0,0,1,1.868-4.1,4.334,4.334,0,0,1,3.726-.8L88.3,281.263a5.6,5.6,0,0,1,3.954,5.557,5.134,5.134,0,0,1-1.868,4.1,4.329,4.329,0,0,1-2.679.93"
              transform="translate(3359.496 2131.274) rotate(90)"
              fill="#a9d3eb"
            />
            <Path
              id="Path_491"
              data-name="Path 491"
              d="M87.705,323.855a4.387,4.387,0,0,1-1.048-.128l-15.8-3.871A5.6,5.6,0,0,1,66.9,314.3a5.135,5.135,0,0,1,1.868-4.1,4.331,4.331,0,0,1,3.726-.8L88.3,313.263a5.6,5.6,0,0,1,3.954,5.557,5.134,5.134,0,0,1-1.868,4.1,4.329,4.329,0,0,1-2.679.93"
              transform="translate(3375.926 2131.274) rotate(90)"
              fill="#a9d3eb"
            />
          </G>
          <Path
            id="Path_485"
            data-name="Path 485"
            d="M35.018,232.257H86.509c0,8.426-6.19,15.257-13.825,15.257H48.843C41.208,247.514,35.018,240.683,35.018,232.257Z"
            transform="translate(3336.387 2150.31) rotate(90)"
            fill="#2a4a4f"
          />
        </G>
        <G
          id="Ornament_Right"
          data-name="Ornament Right"
          transform="translate(-819.437 -2120)"
        >
          <Path
            id="Path_484-2"
            data-name="Path 484"
            d="M91.842,506.482H35.018a15.257,15.257,0,0,1,15.257-15.257H76.585A15.257,15.257,0,0,1,91.842,506.482Z"
            transform="translate(3517.352 2147.644) rotate(90)"
            fill="#2a4a4f"
          />
          <Rect
            id="Rectangle_149-2"
            data-name="Rectangle 149"
            width="13.241"
            height="84.596"
            transform="translate(3095.466 2204.453) rotate(90)"
            fill="#2a4a4f"
          />
          <G
            id="Ornament_Right_Color_Parts"
            data-name="Ornament Right Color Parts"
          >
            <Path
              id="Path_494-2"
              data-name="Path 494"
              d="M51.011,325.4c.187-7.925-9.56-23.708-20.217-29.313A47.871,47.871,0,0,1,6.411,266.175c-3.351-12.185.476-20.187,4.276-24.754,4.069-4.889,4.684-3.591,4.889-3.673l2.044,5.664c-.611.251-10.656,3.071-5.7,21.069a41.831,41.831,0,0,0,21.431,26.182c11.894,6.256,23.727,22.957,23.448,34.741C56.795,325.365,51,325.416,51.011,325.4Z"
              transform="translate(3336.213 2172.432) rotate(90)"
              fill="#a9d3eb"
            />
            <Path
              id="Path_489-2"
              data-name="Path 489"
              d="M87.705,291.855a4.387,4.387,0,0,1-1.048-.128l-15.8-3.871A5.6,5.6,0,0,1,66.9,282.3a5.135,5.135,0,0,1,1.868-4.1,4.334,4.334,0,0,1,3.726-.8L88.3,281.263a5.6,5.6,0,0,1,3.954,5.557,5.134,5.134,0,0,1-1.868,4.1,4.329,4.329,0,0,1-2.679.93"
              transform="translate(3359.496 2131.274) rotate(90)"
              fill="#a9d3eb"
            />
            <Path
              id="Path_491-2"
              data-name="Path 491"
              d="M87.705,323.855a4.387,4.387,0,0,1-1.048-.128l-15.8-3.871A5.6,5.6,0,0,1,66.9,314.3a5.135,5.135,0,0,1,1.868-4.1,4.331,4.331,0,0,1,3.726-.8L88.3,313.263a5.6,5.6,0,0,1,3.954,5.557,5.134,5.134,0,0,1-1.868,4.1,4.329,4.329,0,0,1-2.679.93"
              transform="translate(3375.926 2131.274) rotate(90)"
              fill="#a9d3eb"
            />
          </G>
          <Path
            id="Path_485-2"
            data-name="Path 485"
            d="M35.018,232.257H86.509c0,8.426-6.19,15.257-13.825,15.257H48.843C41.208,247.514,35.018,240.683,35.018,232.257Z"
            transform="translate(3336.387 2150.31) rotate(90)"
            fill="#2a4a4f"
          />
        </G>
        <G id="Checkmarks" transform="translate(1892 -524.103)">
          <G
            id="Group_181"
            data-name="Group 181"
            transform="translate(-180.784 379.854)"
          >
            <Circle
              id="Ellipse_73"
              data-name="Ellipse 73"
              cx="8.365"
              cy="8.365"
              r="8.365"
              transform="translate(361.899 246.701)"
              fill="#fff"
            />
            <Path
              id="Icon_ionic-md-checkmark-Circle"
              data-name="Icon ionic-md-checkmark-Circle"
              d="M12.113,3.375a8.738,8.738,0,1,0,8.738,8.738A8.764,8.764,0,0,0,12.113,3.375Zm-1.794,13.4L5.841,12.294,7.1,11.038l3.227,3.227,6.81-6.81L18.39,8.711Z"
              transform="translate(358.375 242.883)"
              fill="#2a4a4f"
            />
          </G>
        </G>
      </G>
    </Svg>
  ) : (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={String(width)}
      height={String(height / 4)}
      // viewBox="-1 5 406 33.929"
      viewBox="-1 4 406 48.929"
    >
      <G
        id="FokusBatterieStatus_Voll"
        data-name="FokusBatterieStatus Voll"
        transform="translate(-1916.307 -57.557)"
      >
        <G
          id="Battery_2"
          data-name="Battery 2"
          transform="translate(-1087.035 -2163.039)"
        >
          <Path
            id="Path_966"
            data-name="Path 966"
            d="M77.658,150.893H54.72A13.133,13.133,0,0,1,41.6,137.775V94.3A13.133,13.133,0,0,1,54.72,81.177H77.658A13.133,13.133,0,0,1,90.776,94.3v43.48a13.133,13.133,0,0,1-13.118,13.118M54.72,86.694a7.61,7.61,0,0,0-7.6,7.6v43.48a7.609,7.609,0,0,0,7.6,7.6H77.658a7.609,7.609,0,0,0,7.6-7.6V94.3a7.61,7.61,0,0,0-7.6-7.6Z"
            transform="translate(3344.817 2186.263) rotate(90)"
            fill="#2a4a4f"
          />
          <Path
            id="Path_967"
            data-name="Path 967"
            d="M90.468,76.751H70.828c-.907,0-1.643-.541-1.645-1.206V69.851c0-.666.738-1.2,1.645-1.206h19.64c.907,0,1.643.541,1.645,1.206v5.693c0,.666-.737,1.2-1.645,1.206"
            transform="translate(3338.382 2172.102) rotate(90)"
            fill="#2a4a4f"
          />
        </G>
        <G
          id="Battery_1"
          data-name="Battery 1"
          transform="translate(-1175.626 -2163.039)"
        >
          <Path
            id="Path_966-2"
            data-name="Path 966"
            d="M77.658,150.893H54.72A13.133,13.133,0,0,1,41.6,137.775V94.3A13.133,13.133,0,0,1,54.72,81.177H77.658A13.133,13.133,0,0,1,90.776,94.3v43.48a13.133,13.133,0,0,1-13.118,13.118M54.72,86.694a7.61,7.61,0,0,0-7.6,7.6v43.48a7.609,7.609,0,0,0,7.6,7.6H77.658a7.609,7.609,0,0,0,7.6-7.6V94.3a7.61,7.61,0,0,0-7.6-7.6Z"
            transform="translate(3344.817 2186.263) rotate(90)"
            fill="#2a4a4f"
          />
          <Path
            id="Path_967-2"
            data-name="Path 967"
            d="M90.468,76.751H70.828c-.907,0-1.643-.541-1.645-1.206V69.851c0-.666.738-1.2,1.645-1.206h19.64c.907,0,1.643.541,1.645,1.206v5.693c0,.666-.737,1.2-1.645,1.206"
            transform="translate(3338.382 2172.102) rotate(90)"
            fill="#2a4a4f"
          />
        </G>
        <G id="Fillstates" transform="translate(-1176.053 -2163.039)">
          <Path
            id="Path_968"
            data-name="Path 968"
            d="M87.568,173.473H65.626a4.3,4.3,0,0,1-4.285-4.285V126.6a4.3,4.3,0,0,1,4.285-4.285H87.568a4.3,4.3,0,0,1,4.285,4.285v42.586a4.3,4.3,0,0,1-4.285,4.285"
            transform="translate(3376.41 2176.128) rotate(90)"
            fill="#f5ce52"
          />
          <Path
            id="Path_1043"
            data-name="Path 1043"
            d="M87.568,173.473H65.626a4.3,4.3,0,0,1-4.285-4.285V126.6a4.3,4.3,0,0,1,4.285-4.285H87.568a4.3,4.3,0,0,1,4.285,4.285v42.586a4.3,4.3,0,0,1-4.285,4.285"
            transform="translate(3465.41 2176.128) rotate(90)"
            fill="#f5ce52"
          />
        </G>
        <G id="Icons" transform="translate(1894.5 -523)">
          <Path
            id="Icon_ionic-md-snow"
            data-name="Icon ionic-md-snow"
            d="M25.038,16.192,24.6,14.576,20,15.81l-3.16-1.826L20,12.159l4.6,1.235.434-1.617-2.987-.8L25.07,9.234,23.814,7.063,20.853,8.774l.8-2.987-1.617-.434L18.8,9.956l-3.254,1.878V8.115l3.374-3.369L17.735,3.563,15.548,5.75V2.25H13.037V5.682L10.856,3.5,9.673,4.683l3.364,3.369v3.735L9.862,9.956l-1.235-4.6L7.01,5.787l.8,2.987L4.792,7.026,3.537,9.2,6.5,10.914l-2.987.8.434,1.617,4.6-1.235,3.275,1.889L8.548,15.878l-4.6-1.235L3.516,16.26l2.987.8L3.537,18.771l1.256,2.171L7.811,19.2l-.8,2.982,1.617.434,1.235-4.6,3.176-1.836v3.709L9.673,23.26l1.182,1.182,2.182-2.187v3.432h2.511V22.193l2.192,2.182,1.177-1.182-3.369-3.364V16.135L18.8,18.018l1.235,4.6,1.617-.434-.8-2.982,2.961,1.711,1.256-2.176-3.019-1.742Z"
            transform="translate(144.412 598.444)"
            fill="#2a4a4f"
          />
          <Path
            id="Icon_ionic-md-snow-2"
            data-name="Icon ionic-md-snow"
            d="M25.038,16.192,24.6,14.576,20,15.81l-3.16-1.826L20,12.159l4.6,1.235.434-1.617-2.987-.8L25.07,9.234,23.814,7.063,20.853,8.774l.8-2.987-1.617-.434L18.8,9.956l-3.254,1.878V8.115l3.374-3.369L17.735,3.563,15.548,5.75V2.25H13.037V5.682L10.856,3.5,9.673,4.683l3.364,3.369v3.735L9.862,9.956l-1.235-4.6L7.01,5.787l.8,2.987L4.792,7.026,3.537,9.2,6.5,10.914l-2.987.8.434,1.617,4.6-1.235,3.275,1.889L8.548,15.878l-4.6-1.235L3.516,16.26l2.987.8L3.537,18.771l1.256,2.171L7.811,19.2l-.8,2.982,1.617.434,1.235-4.6,3.176-1.836v3.709L9.673,23.26l1.182,1.182,2.182-2.187v3.432h2.511V22.193l2.192,2.182,1.177-1.182-3.369-3.364V16.135L18.8,18.018l1.235,4.6,1.617-.434-.8-2.982,2.961,1.711,1.256-2.176-3.019-1.742Z"
            transform="translate(233.926 598.444)"
            fill="#2a4a4f"
          />
        </G>
        <G
          id="Ornament_Left"
          data-name="Ornament Left"
          transform="translate(-1094.5 -2120)"
        >
          <Path
            id="Path_484"
            data-name="Path 484"
            d="M91.842,506.482H35.018a15.257,15.257,0,0,1,15.257-15.257H76.585A15.257,15.257,0,0,1,91.842,506.482Z"
            transform="translate(3517.352 2147.644) rotate(90)"
            fill="#2a4a4f"
          />
          <Rect
            id="Rectangle_149"
            data-name="Rectangle 149"
            width="13.241"
            height="84.596"
            transform="translate(3095.466 2204.453) rotate(90)"
            fill="#2a4a4f"
          />
          <G
            id="Ornament_Left_Color_Parts"
            data-name="Ornament Left Color Parts"
          >
            <Path
              id="Path_494"
              data-name="Path 494"
              d="M51.011,325.4c.187-7.925-9.56-23.708-20.217-29.313A47.871,47.871,0,0,1,6.411,266.175c-3.351-12.185.476-20.187,4.276-24.754,4.069-4.889,4.684-3.591,4.889-3.673l2.044,5.664c-.611.251-10.656,3.071-5.7,21.069a41.831,41.831,0,0,0,21.431,26.182c11.894,6.256,23.727,22.957,23.448,34.741C56.795,325.365,51,325.416,51.011,325.4Z"
              transform="translate(3336.213 2172.432) rotate(90)"
              fill="#f5ce52"
            />
            <Path
              id="Path_489"
              data-name="Path 489"
              d="M87.705,291.855a4.387,4.387,0,0,1-1.048-.128l-15.8-3.871A5.6,5.6,0,0,1,66.9,282.3a5.135,5.135,0,0,1,1.868-4.1,4.334,4.334,0,0,1,3.726-.8L88.3,281.263a5.6,5.6,0,0,1,3.954,5.557,5.134,5.134,0,0,1-1.868,4.1,4.329,4.329,0,0,1-2.679.93"
              transform="translate(3359.496 2131.274) rotate(90)"
              fill="#f5ce52"
            />
            <Path
              id="Path_491"
              data-name="Path 491"
              d="M87.705,323.855a4.387,4.387,0,0,1-1.048-.128l-15.8-3.871A5.6,5.6,0,0,1,66.9,314.3a5.135,5.135,0,0,1,1.868-4.1,4.331,4.331,0,0,1,3.726-.8L88.3,313.263a5.6,5.6,0,0,1,3.954,5.557,5.134,5.134,0,0,1-1.868,4.1,4.329,4.329,0,0,1-2.679.93"
              transform="translate(3375.926 2131.274) rotate(90)"
              fill="#f5ce52"
            />
          </G>
          <Path
            id="Path_485"
            data-name="Path 485"
            d="M35.018,232.257H86.509c0,8.426-6.19,15.257-13.825,15.257H48.843C41.208,247.514,35.018,240.683,35.018,232.257Z"
            transform="translate(3336.387 2150.31) rotate(90)"
            fill="#2a4a4f"
          />
        </G>
        <G
          id="Ornament_Right"
          data-name="Ornament Right"
          transform="translate(-819.437 -2120)"
        >
          <Path
            id="Path_484-2"
            data-name="Path 484"
            d="M91.842,506.482H35.018a15.257,15.257,0,0,1,15.257-15.257H76.585A15.257,15.257,0,0,1,91.842,506.482Z"
            transform="translate(3517.352 2147.644) rotate(90)"
            fill="#2a4a4f"
          />
          <Rect
            id="Rectangle_149-2"
            data-name="Rectangle 149"
            width="13.241"
            height="84.596"
            transform="translate(3095.466 2204.453) rotate(90)"
            fill="#2a4a4f"
          />
          <G
            id="Ornament_Right_Color_Parts"
            data-name="Ornament Right Color Parts"
          >
            <Path
              id="Path_494-2"
              data-name="Path 494"
              d="M51.011,325.4c.187-7.925-9.56-23.708-20.217-29.313A47.871,47.871,0,0,1,6.411,266.175c-3.351-12.185.476-20.187,4.276-24.754,4.069-4.889,4.684-3.591,4.889-3.673l2.044,5.664c-.611.251-10.656,3.071-5.7,21.069a41.831,41.831,0,0,0,21.431,26.182c11.894,6.256,23.727,22.957,23.448,34.741C56.795,325.365,51,325.416,51.011,325.4Z"
              transform="translate(3336.213 2172.432) rotate(90)"
              fill="#f5ce52"
            />
            <Path
              id="Path_489-2"
              data-name="Path 489"
              d="M87.705,291.855a4.387,4.387,0,0,1-1.048-.128l-15.8-3.871A5.6,5.6,0,0,1,66.9,282.3a5.135,5.135,0,0,1,1.868-4.1,4.334,4.334,0,0,1,3.726-.8L88.3,281.263a5.6,5.6,0,0,1,3.954,5.557,5.134,5.134,0,0,1-1.868,4.1,4.329,4.329,0,0,1-2.679.93"
              transform="translate(3359.496 2131.274) rotate(90)"
              fill="#f5ce52"
            />
            <Path
              id="Path_491-2"
              data-name="Path 491"
              d="M87.705,323.855a4.387,4.387,0,0,1-1.048-.128l-15.8-3.871A5.6,5.6,0,0,1,66.9,314.3a5.135,5.135,0,0,1,1.868-4.1,4.331,4.331,0,0,1,3.726-.8L88.3,313.263a5.6,5.6,0,0,1,3.954,5.557,5.134,5.134,0,0,1-1.868,4.1,4.329,4.329,0,0,1-2.679.93"
              transform="translate(3375.926 2131.274) rotate(90)"
              fill="#f5ce52"
            />
          </G>
          <Path
            id="Path_485-2"
            data-name="Path 485"
            d="M35.018,232.257H86.509c0,8.426-6.19,15.257-13.825,15.257H48.843C41.208,247.514,35.018,240.683,35.018,232.257Z"
            transform="translate(3336.387 2150.31) rotate(90)"
            fill="#2a4a4f"
          />
        </G>
        <G id="Checkmarks" transform="translate(1892 -524.103)">
          <G
            id="Group_181"
            data-name="Group 181"
            transform="translate(-180.784 379.854)"
          >
            <Circle
              id="Ellipse_73"
              data-name="Ellipse 73"
              cx="8.365"
              cy="8.365"
              r="8.365"
              transform="translate(361.899 246.701)"
              fill="#fff"
            />
            <Path
              id="Icon_ionic-md-checkmark-Circle"
              data-name="Icon ionic-md-checkmark-Circle"
              d="M12.113,3.375a8.738,8.738,0,1,0,8.738,8.738A8.764,8.764,0,0,0,12.113,3.375Zm-1.794,13.4L5.841,12.294,7.1,11.038l3.227,3.227,6.81-6.81L18.39,8.711Z"
              transform="translate(358.375 242.883)"
              fill="#2a4a4f"
            />
          </G>
          <G
            id="Group_659"
            data-name="Group 659"
            transform="translate(-92.784 379.854)"
          >
            <Circle
              id="Ellipse_73-2"
              data-name="Ellipse 73"
              cx="8.365"
              cy="8.365"
              r="8.365"
              transform="translate(361.899 246.701)"
              fill="#fff"
            />
            <Path
              id="Icon_ionic-md-checkmark-Circle-2"
              data-name="Icon ionic-md-checkmark-Circle"
              d="M12.113,3.375a8.738,8.738,0,1,0,8.738,8.738A8.764,8.764,0,0,0,12.113,3.375Zm-1.794,13.4L5.841,12.294,7.1,11.038l3.227,3.227,6.81-6.81L18.39,8.711Z"
              transform="translate(358.375 242.883)"
              fill="#2a4a4f"
            />
          </G>
        </G>
      </G>
    </Svg>
  );
};
export default FocusCounter;
