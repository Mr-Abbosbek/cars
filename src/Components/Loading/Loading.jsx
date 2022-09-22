import React from "react";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
const override = {
  marginTop: "25px"
};
function Loading() {
  let [loading] = useState(true);
  let [color] = useState("black");
  return (
    <div style={{height: "100vh", marginTop: "-130px"}} className="w-100 d-flex justify-content-center align-items-center position-absolute bg-white">
      <h1 className="d-flex align-items-center ">
        Loading{" "}
        <PulseLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={8}
        />
      </h1>
    </div>
  );
}

export default Loading;
