import React, { useState } from "react";
import Form from "../../components/createPDF/form";
import DocumentPDF from "../../components/createPDF/document";
export default function CreatePdf() {
  const [name, setName] = useState("MERT");
  const [surname, setSurname] = useState("YILMAZ");
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          width: "600px",
          height: "100vh",
          background:
            "linear-gradient(267.27deg, rgb(69 69 72) 1.57%, #464276 98.69%)",
        }}
      ></div>
      <div style={{marginLeft:"60px"}}>
        <Form setName={setName} setSurname={setSurname} name={name} surname={surname} />
        <DocumentPDF name={name} surname={surname} />
      </div>
    </div>
  );
}
