import React from "react";
import styles from "./login.module.css";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.container} fixed>
        <div className={styles.title}>Digiathon Kurumu</div>
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
            onClick={() => navigate("/create")}
          >
            E-Devlet ile Giriş Yap
          </button>
        </div>
      </div>
    </>
  );
}
