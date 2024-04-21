import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>HAmini</div>
      <div className={styles.desc}>© All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
