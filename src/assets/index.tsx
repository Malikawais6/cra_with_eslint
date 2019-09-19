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
    width="6"
    height="11"
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
