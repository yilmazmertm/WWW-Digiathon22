import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./form.module.css";
import { walletConnect } from "../../../utils/Web3Functions";

const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

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
            {wallet === "" ? (
              <button
                className={styles.button2}
                variant="contained"
                size="large"
                onClick={() => {
                  walletConnect().then((response) => setWallet(response));
                }}
              >
                Cüzdan Bağla
              </button>
            ) : (
              <p>{wallet}</p>
            )}
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
              <div>
                <input
                  type="file"
                  id="actual-btn"
                  onChange={(e) => setFile(e.target.files[0])}
                  hidden
                />
                <label htmlFor="actual-btn" className={styles.upload}>
                  Logo yükleyin
                </label>
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
