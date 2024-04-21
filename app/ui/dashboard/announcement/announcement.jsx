import React from "react";
import styles from "./announcement.module.css";
import { MdCampaign, MdPlayCircle } from "react-icons/md";

const Announcement = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <MdCampaign size={35} color="#00C58F" />
          <span className={styles.title}>Announcement</span>
        </div>
        <div className={styles.desc}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className={styles.btn}>
            <MdPlayCircle />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.header}>
          <MdCampaign size={35} color="#00C58F" />
          <span className={styles.title}>Announcement</span>
        </div>
        <div className={styles.desc}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className={styles.btn}>
            <MdPlayCircle />
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
