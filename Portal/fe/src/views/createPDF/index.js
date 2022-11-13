import React, { useState } from "react";
import Form from "../../components/createPDF/form";
import DocumentPDF from "../../components/createPDF/document";
export default function CreatePdf() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          width: "600px",
          height: "100vh",
          background:
            "linear-gradient(267.27deg, #3f3e50 1.57%, #157d5f 98.69%)",
        }}
      ></div>
      <div style={{marginLeft:"60px"}}>
        <Form setName={setName} setSurname={setSurname} />
        <DocumentPDF name={name} surname={surname} />
      </div>
    </div>
  );
}
