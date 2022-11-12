import React from "react";
import Container from "@mui/material/Container";
import { Typography, Button } from "@mui/material";
import styles from "./login.module.css"
export default function Form() {
  return (
    <>
      <div className={styles.container} fixed>
        <div className={styles.title}>İstanbul Üniversitesi</div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </div>
        <div className={styles.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </div>
        <div>
          <button
            className={styles.button}
            variant="contained"
            size="large"
          >
            E-Devlet ile Giriş Yap
          </button>
        </div>
      </div>
    </>
  );
}
