import React from "react";
import styles from "./card.module.css";
import { MdTrendingUp } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <MdTrendingUp />
        <span className={styles.topTxt}>Anything goes</span>
      </div>
      <div className={styles.center}>198.123</div>
      <div className={styles.bottom}>
        <span className={styles.positive}>+12%</span> January
      </div>
    </div>
  );
};

export default Card;
