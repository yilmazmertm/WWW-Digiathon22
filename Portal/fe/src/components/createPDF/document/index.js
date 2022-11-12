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
  const [hash, setHash] = useState("");
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

  async function generateKey(blob) {
    const hashTemp = await blobToSHA256(blob);
    setHash(hashTemp);
  }

  return (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="Doc">
        {({ blob }) => (
          <Button
            variant="contained"
            sx={{ mt: 4, width: "400px", mx: "auto" }}
            size="large"
            onClick={() => generateKey(blob)}
          >
            Onayla ve İndir
          </Button>
        )}
      </PDFDownloadLink>
    </div>
  );
}
