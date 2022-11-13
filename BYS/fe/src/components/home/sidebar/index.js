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
        Evrensel Belge Yönetim Sistemi ile doğruluma ve sorgulama hizmetlerine
        blok zincir altyapısı ekleyin !
      </div>
      <div className={styles.text2}>
        E-devlet mekanizmasından aldığı güç ile otoritelerin cüzdan adreslerini
        görün, belgelerinizi doğrulayın ve içeriğinin değişmediğinden emin olun.
      </div>
      <div>
        <button
          className={styles.button}
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
