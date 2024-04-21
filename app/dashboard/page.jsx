import React from "react";
import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Transactions from "../ui/dashboard/transactions/transactions";
import styles from "../ui/dashboard/dashboard.module.css";
import Announcement from "../ui/dashboard/announcement/announcement";

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Chart />
        <Transactions />
      </div>
      <div className={styles.announcement}>
        <Announcement />
      </div>
    </div>
  );
};

export default page;
