import React, { useState } from "react";
import Form from "../../components/createPDF/form";
import DocumentPDF from "../../components/createPDF/document";
export default function CreatePdf() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  return (
    <div>
      <Form setName={setName} setSurname={setSurname} />
      <DocumentPDF name={name} surname={surname} />
    </div>
  );
}
