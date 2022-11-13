import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blobToSHA256 } from "file-to-sha256";
import axios from "axios";
import { controlDocument } from "../../Utils/utils";
import styles from "./document.module.css";
const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

const theme = createTheme();

export default function DocumentFile({setData}) {
  const [docId, setDocId] = useState("");
  const [docHash, setDocHash] = useState("");
  const [file, setFile] = useState("");

  async function generateKey(file) {
    const hashTemp = await blobToSHA256(file);
    setDocHash(hashTemp);
  }

  return (
    <>
      <div style={{ marginLeft: "100px" }}>
        <div className={styles.text}>Belge Sorgula</div>
        <div className={styles.container}>
          <div className={styles.section}>
            <div className={styles.input}>
              <div className={styles.selectTitle}>Belge No</div>
              <div>
                <input onChange={(e) => setDocId(e.target.value)}></input>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.input}>
              <div>
                <input
                  type="file"
                  id="actual-btn"
                  onChange={(e) => {
                    generateKey(e.target.files[0]);
                    setFile(e.target.files[0]);
                  }}
                  hidden
                />
                <label htmlFor="actual-btn" className={styles.upload}>
                  Belge yükleyin
                </label>
              </div>
            </div>
          </div>

          {file && (
            <div>
              <div>
                <div>
                  <label className={styles.label}>
                    Yüklenen Dosya: {file.name}
                  </label>
                </div>
              </div>
            </div>
          )}

          <div>
            <button
              className={styles.button}
              variant="contained"
              size="large"
              onClick={() => controlDocument(docId, docHash, {setData})}
            >
              Onayla
            </button>
          </div>
          <div className={styles.alert}></div>
        </div>
      </div>
    </>
  );
}
