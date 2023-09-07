import React from "react";

const Loader = () => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{
      height: "calc(100vh - 209px)",
      width: "100%",
      zIndex: 100,
    }}
  >
    <svg width="100" height="100" viewBox="0 0 100 100">
      <path
        fill="#fff"
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </div>
);

export default Loader;
