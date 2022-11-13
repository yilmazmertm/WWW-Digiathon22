import React, { useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { Button } from "@mui/material";
import { blobToSHA256 } from "file-to-sha256";
import axios from "axios";
import style from "./style.module.css";

const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
    width: "1000px",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export default function DocumentPDF({ name, surname }) {
  const MyDocument = () => {
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Name: {name}</Text>
          </View>
          <View style={styles.section}>
            <Text>Surname: {surname}</Text>
          </View>
        </Page>
      </Document>
    );
  };

  async function generateKey() {
    api
      .get(`create-pdf/${name}/${surname}`, { responseType: "blob" })
      .then((response) => {
        const href = URL.createObjectURL(response.data);
        blobToSHA256(response.data).then((response) => {
          console.log(response);
          api
            .post("transact", {
              documentHash: response,
              name: name,
              surname: surname,
            })
            .then((res) => alert(`Belge oluşturuldu.`));
        });

        const link = document.createElement("a");
        link.href = href;
        link.setAttribute("download", "file.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
      });
  }

  return (
    <div>
      <div className={style.container}>
        <div>
          <button className={style.button} onClick={() => generateKey()}>
            Onayla ve İndir
          </button>
        </div>
      </div>
    </div>
  );
}
