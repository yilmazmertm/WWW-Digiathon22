import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Bg from "../../../Asset/bg.jpg";
import styles from "./form.module.css";
const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

const theme = createTheme();

export default function Form() {
  const [wallet, setWallet] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const formData = new FormData();
  const navigate = useNavigate();

  const submitForm = () => {
    formData.append("authorityName", name);
    formData.append("authorityLogo", file);
    formData.append("authorityWalletAddress", wallet);
    api
      .post("create-authority", formData)
      .then(() => navigate("/"))
      .catch((e) => console.error(e));
  };

  return (
    <>
      <div>
        <div className={styles.text}>Bilgilerim</div>
        <div className={styles.container}>
          <div className={styles.section}>
            <div className={styles.input}>
              <div className={styles.selectTitle}>Cüzdan Adresi</div>
              <div>
                <input onChange={(e) => setWallet(e.target.value)}></input>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.input}>
              <div className={styles.selectTitle}>İsim</div>
              <div>
                <input onChange={(e) => setName(e.target.value)}></input>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.input}>
              <div className={styles.selectTitle}>Logo</div>
              <div>
                <input
                  type={"file"}
                  onChange={(e) => setFile(e.target.files[0])}
                ></input>
              </div>
            </div>
          </div>
          <div>
            <button
              className={styles.button}
              variant="contained"
              size="large"
              onClick={submitForm}
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
