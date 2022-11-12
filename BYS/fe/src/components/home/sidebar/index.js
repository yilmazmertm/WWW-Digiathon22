import React from "react";
import Container from "@mui/material/Container";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./sidebar.module.css";
export default function SiderBar() {
  const navigate = useNavigate();
  return (
    <div className={styles.container} fixed>
      <div className={styles.title}>Evrensel Belge Yönetim Sistemi</div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </div>
      <div className={styles.text2}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </div>
      <div>
        <button className={styles.button}
          variant="contained"
          size="large"
          onClick={() => navigate("/info")}
        >
          E-Devlet ile Giriş Yap
        </button>
      </div>
    </div>
  );
}
