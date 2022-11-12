import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeader, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import styles from "./byList.module.css";
import Logo from "../../../Asset/AdaletBakanligi.png";
export default function BysListCard(data) {
  return (
    <>
      {data.data.map((data, i) => {
        return (
          <div className={styles.container} key={i}>
            <div className={styles.header}>
              <div className={styles.horizontal}>
                <div className={styles.logo}>
                  <img src={data.logo_url} alt="logo" />
                </div>
                <div className={styles.title}>{data.name}</div>
              </div>
            </div>
            <div className={styles.content}>
              <div className={styles.section}>
                <div className={styles.text}>
                  EBDS: <span>{data.origin_code}</span>{" "}
                </div>
                <div className={styles.value}>
                  Cüzdan Adresi: <span>{data.wallet_address}</span>{" "}
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
      })}
    </>
  );
}
