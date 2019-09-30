import React from "react";
export const InfoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
  >
    <path
      fill="#A7A7BB"
      fillRule="evenodd"
      d="M7 0a7 7 0 1 1 0 14A7 7 0 0 1 7 0zm0 7c-.552 0-1 .398-1 .889v2.222c0 .491.448.889 1 .889s1-.398 1-.889V7.89C8 7.398 7.552 7 7 7zm0-3.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
    />
  </svg>
);
export const GraphIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
  >
    <g fill="none" fillRule="evenodd">
      <circle cx="11" cy="11" r="10" stroke="#DBDBE6" stroke-width="2" />
      <g fill="#DBDBE6" fillRule="nonzero" transform="translate(6.417 5.5)">
        <rect width="1.41" height="9.167" rx=".705" />
        <rect width="1.41" height="5.641" x="2.821" y="3.526" rx=".705" />
        <rect width="1.41" height="7.051" x="5.641" y="2.115" rx=".705" />
        <rect width="1.41" height="3.526" x="8.462" y="5.641" rx=".705" />
      </g>
    </g>
  </svg>
);

export const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="18"
    viewBox="0 0 6 11"
  >
    <path
      fill="#E74040"
      fillRule="evenodd"
      d="M3.686.374v6.23H5.53l-2.765 3.687L0 6.605h1.843V.374h1.843z"
    />
  </svg>
);

export const ArrowUp = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="18"
    viewBox="0 0 9 18"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill={props.isGrey ? "#a7a7bb" : "#00C972"}
        d="M9 6.48L4.68.72.36 6.48"
      />
      <path
        stroke={props.isGrey ? "#a7a7bb" : "#00C972"}
        strokeWidth="2.88"
        d="M4.68 17.362V3.6"
      />
    </g>
  </svg>
);

export const DeleteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="9"
    height="18"
    viewBox="0 0 9 18"
  >
    <g fill="none" fillRule="evenodd">
      <path fill="#00C972" d="M9 6.48L4.68.72.36 6.48" />
      <path stroke="#00C972" strokeWidth="2.88" d="M4.68 17.362V3.6" />
    </g>
  </svg>
);

export const AddIconGrey = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
  >
    <g fill="none" fillRule="evenodd">
      <circle cx="11" cy="11" r="11" fill="#F7F7F9" />
      <text
        fill="#56556C"
        fontFamily="Visuelt-Medium, Visuelt"
        fontSize="13"
        fontWeight="400"
      >
        <tspan x="8" y="16">
          +
        </tspan>
      </text>
    </g>
  </svg>
);

export const AddIconBlue = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="evenodd">
      <circle cx="11" cy="11" r="11" fill="#d4f9ff" />
      <text
        fill="#40d1e7"
        fontFamily="Visuelt-Medium, Visuelt"
        fontSize="13"
        fontWeight="400"
      >
        <tspan x="8" y="16">
          +
        </tspan>
      </text>
    </g>
  </svg>
);

export const CaretDownGray = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke="#A7A7BB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13.314 5l-5.657 5.657L2 5"
    />
  </svg>
);

export const MoreGray = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="4"
    height="22"
    viewBox="0 0 4 22"
  >
    <g fill="#A7A7BB" fillRule="nonzero" transform="rotate(90 2 2)">
      <circle cx="11" cy="2" r="2" />
      <circle cx="2" cy="2" r="2" />
      <circle cx="20" cy="2" r="2" />
    </g>
  </svg>
);

export const CaretDownBlue = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
  >
    <path
      fill="none"
      fill-rule="evenodd"
      stroke="#40D1E7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8 5L6 7 4 5"
    />
  </svg>
);

export const Wegift = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="102"
    height="31"
    viewBox="0 0 102 31"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#40D1E7"
        fillRule="nonzero"
        d="M15.299.12c4.06 0 7.825 1.609 10.65 4.53 2.824 2.921 4.413 6.737 4.413 10.85 0 4.113-1.53 7.929-4.413 10.85-2.884 2.862-6.65 4.471-10.71 4.471-4.06 0-7.825-1.55-10.708-4.471C1.706 23.429.118 19.613.118 15.5c0-4.113 1.588-7.929 4.472-10.91C7.473 1.73 11.239.12 15.299.12zM9.414 23.726c-.411-.12-1.118-.537-1.118-1.908V4.59a14.464 14.464 0 0 0-2.059 1.73 13.035 13.035 0 0 0-3.766 9.18c0 3.458 1.354 6.737 3.884 9.121 2.412 2.444 5.648 3.816 9.061 3.816 3.413 0 6.65-1.372 9.062-3.816a13.035 13.035 0 0 0 3.765-9.18c0-3.458-1.353-6.737-3.765-9.181a12.736 12.736 0 0 0-1.942-1.61v17.17c0 1.37-.706 1.788-1.118 1.907-.765.179-1.412-.179-2-1.014l-4.002-6.02-4.001 6.02c-.765 1.193-1.589 1.133-2 1.014zm10.65-4.054V3.458c-3-1.252-6.472-1.252-9.473-.06v16.275l2.766-4.292c.47-.716 1.177-1.133 1.942-1.133.764 0 1.47.417 1.941 1.133l2.825 4.292z"
      />
      <path
        fill="#24223A"
        d="M53.584 23.078h-2.64L47.96 12.863l-3.004 10.215h-2.64L38.568 8.812h2.831l2.353 9.967 2.927-9.967h2.64l2.927 9.986 2.353-9.986h2.735l-3.75 14.266zm9.68-8.503c-.639 0-1.196.18-1.675.542-.478.362-.768.904-.87 1.627h4.801c-.012-.673-.226-1.202-.64-1.589-.415-.387-.954-.58-1.617-.58zm4.743 4.014h-7.345c.025.811.293 1.436.803 1.873.51.438 1.148.656 1.913.656.561 0 1.052-.126 1.473-.38.42-.254.695-.634.822-1.141h2.315c-.191 1.166-.736 2.076-1.635 2.73-.9.652-1.93.979-3.09.979-1.39 0-2.582-.47-3.577-1.408-.995-.938-1.492-2.282-1.492-4.032 0-1.725.49-3.069 1.473-4.033.982-.963 2.187-1.445 3.615-1.445 1.365 0 2.493.447 3.386 1.34.893.895 1.34 2.172 1.34 3.833v1.028zm14.615-3.158v7.647h-2.487v-1.58c-.293.52-.794.974-1.501 1.36-.708.388-1.585.581-2.63.581-1.99 0-3.597-.72-4.821-2.159-1.225-1.44-1.837-3.218-1.837-5.335 0-.977.144-1.903.43-2.777a7.756 7.756 0 0 1 1.263-2.378c.555-.71 1.291-1.271 2.21-1.684.918-.412 1.957-.618 3.118-.618 1.721 0 3.15.444 4.285 1.332 1.135.887 1.791 2.136 1.97 3.747h-2.716c-.09-.799-.472-1.433-1.148-1.902-.676-.47-1.499-.704-2.468-.704-1.39 0-2.452.472-3.185 1.417-.733.945-1.1 2.134-1.1 3.567 0 1.509.392 2.72 1.177 3.633.784.913 1.852 1.37 3.204 1.37.995 0 1.843-.26 2.544-.78.701-.52 1.11-1.275 1.224-2.264h-4.208V15.43h6.676zm2.563-2.853h2.545v10.5h-2.545v-10.5zm-.076-1.389V8.317h2.697v2.872h-2.697zM102 23.078h-1.664c-1.084 0-1.894-.241-2.43-.723-.535-.482-.803-1.382-.803-2.701V14.86h-3.845v8.218h-2.544V14.86h-1.569v-2.282h1.569v-.57c0-1.32.268-2.22.803-2.702.536-.482 1.346-.723 2.43-.723h1.53v2.245h-1.148c-.42 0-.704.089-.851.266-.147.178-.22.444-.22.8v.684h3.845v-2.359l2.544-.704v3.063h2.104v2.282h-2.104v4.908c0 .355.073.621.22.799.147.177.43.266.851.266H102v2.245z"
      />
    </g>
  </svg>
);

export const PresentationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g fill="none" fillRule="evenodd" transform="translate(3 4)">
      <rect
        width="17.143"
        height="14.857"
        x=".571"
        y=".571"
        stroke="#A7A7BB"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        rx="1"
      />
      <path fill="#A7A7BB" d="M6.286 4l6.285 4-6.285 4z" />
    </g>
  </svg>
);

export const CaretDownGraySmall = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke="#56556C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8 5L6 7 4 5"
    />
  </svg>
);

export const DotBlueCircle = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
  >
    <circle cx="6" cy="6" r="4" fill="#00D4EA" fillRule="evenodd" />
  </svg>
);

export const EditIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke="#56556C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M16.636 5l2.91 2.91L9.363 18.09 5 19.546l1.455-4.363z"
    />
  </svg>
);

export const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#56556C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <path d="M5.5 9.5h14M18.5 6.5h-12a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-11a1 1 0 0 0-1-1zM8.5 4.5v2M16.5 4.5v2M12.5 4.5v2" />
    </g>
  </svg>
);

export const CaretDownMedium = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke="#56556C"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 6l-5 5-5-5"
    />
  </svg>
);

export const CaretLeftGray = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke="#A7A7BB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.485 13.485L3.828 7.828l5.657-5.656"
    />
  </svg>
);
export const CaretRightGray = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      fill="none"
      fillRule="evenodd"
      stroke="#A7A7BB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5.828 2.172l5.657 5.656-5.657 5.657"
    />
  </svg>
);
