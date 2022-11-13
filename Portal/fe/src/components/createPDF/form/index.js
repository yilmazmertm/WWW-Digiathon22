import React from "react";
import styles from "./style.module.css";

export default function Form({ setName, setSurname, name, surname }) {
  return (
    <div>
      <div className={styles.text}>Belge Oluşturma ve Doğrulama</div>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.input}>
            <div className={styles.selectTitle}>İsim</div>
            <div>
              <input onChange={(e) => setName(e.target.value)} value={name}></input>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.input}>
            <div className={styles.selectTitle}>Soyisim</div>
            <div>
              <input onChange={(e) => setSurname(e.target.value)} value={surname}></input>
            </div>
          </div>
        </div>
        <div className={styles.alert}></div>
      </div>
    </div>
  );
}
