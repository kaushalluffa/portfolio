import React from "react";

const FirebaseIcon = ({ width = "40px", height = "40px" }) => {
  return (
    <svg
      width={width ?? "40px"}
      height={height ?? "40px"}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>file_type_firebase</title>
      <path
        d="M5.8,24.6l.17-.237L13.99,9.149l.017-.161L10.472,2.348a.656.656,0,0,0-1.227.207Z"
        style={{ fill: "#ffc24a" }}
      />
      <path
        d="M5.9,24.42l.128-.25L13.965,9.114,10.439,2.448a.6.6,0,0,0-1.133.206Z"
        style={{ fill: "#ffa712" }}
      />
      <path
        d="M16.584,14.01l2.632-2.7L16.583,6.289a.678.678,0,0,0-1.195,0L13.981,8.971V9.2Z"
        style={{ fill: "#f4bd62" }}
      />
      <path
        d="M16.537,13.9l2.559-2.62L16.537,6.4a.589.589,0,0,0-1.074-.047L14.049,9.082l-.042.139Z"
        style={{ fill: "#ffa50e" }}
      />
      <polygon
        points="5.802 24.601 5.879 24.523 6.158 24.41 16.418 14.188 16.548 13.834 13.989 8.956 5.802 24.601"
        style={{ fill: "#f6820c" }}
      />
      <path
        d="M16.912,29.756,26.2,24.577,23.546,8.246A.635.635,0,0,0,22.471,7.9L5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0"
        style={{ fill: "#fde068" }}
      />
      <path
        d="M26.115,24.534,23.483,8.326a.557.557,0,0,0-.967-.353L5.9,24.569l9.131,5.1a1.912,1.912,0,0,0,1.863,0Z"
        style={{ fill: "#fcca3f" }}
      />
      <path
        d="M16.912,29.6a1.927,1.927,0,0,1-1.878,0L5.876,24.522,5.8,24.6l9.233,5.155a1.927,1.927,0,0,0,1.878,0L26.2,24.577l-.023-.14Z"
        style={{ fill: "#eeab37" }}
      />
    </svg>
  );
};

export default FirebaseIcon;
