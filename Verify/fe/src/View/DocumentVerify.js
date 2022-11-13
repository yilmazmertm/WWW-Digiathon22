import React from "react";
import DocumentFile from "../Components/DocumentFile/DocumentFile";

export default function DocumentVerify() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          width: "600px",
          height: "100vh",
          background:
            "linear-gradient(267.27deg, rgb(79 100 110) 1.57%, rgb(44 46 52) 98.69%)",
        }}
      ></div>
      <DocumentFile />
    </div>
  );
}
