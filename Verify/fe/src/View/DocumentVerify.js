import React, { useState } from "react";
import DocumentFile from "../Components/DocumentFile/DocumentFile";
import Card from "../Components/card";

export default function DocumentVerify() {
  const [data, setData] = useState(null);
  console.log(data);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          width: "600px",
          height: "100vh",
          background:
            "linear-gradient(267.27deg, rgb(79 100 110) 1.57%, rgb(44 46 52) 98.69%)",
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "sticky",
          top: 0,
        }}
      ></div>
      <div>
        <DocumentFile setData={setData} />
        {data !== null && <Card data={data} />}
      </div>
    </div>
  );
}
