import React from "react";
import styles from "./style.module.css";

export default function Card(data) {
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.horizontal}>
          <div className={styles.logo}>
            <img src={data.data.logo_url} alt="logo" />
          </div>
          <div className={styles.title}>{data.data.name}</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.text}>
            EBDS: <span>{data.data.origin_code}</span>{" "}
          </div>
          <div className={styles.value}>
            Cüzdan Adresi: <span>{data.data.wallet_address}</span>{" "}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.text}></div>
          <div className={styles.value}></div>
        </div>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}
