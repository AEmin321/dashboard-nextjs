import React from "react";
import styles from "./transactions.module.css";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Recent Sales</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/profile.jpg"
                  width={40}
                  height={40}
                  alt="profile photo"
                />
                Elif
              </div>
            </td>
            <td>12/12/2024</td>
            <td>2200₺</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/profile.jpg"
                  width={40}
                  height={40}
                  alt="profile photo"
                />
                Elif
              </div>
            </td>
            <td>12/12/2024</td>
            <td>2200₺</td>
            <td>
              <span className={`${styles.status} ${styles.completed}`}>
                Completed
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/profile.jpg"
                  width={40}
                  height={40}
                  alt="profile photo"
                />
                Elif
              </div>
            </td>
            <td>12/12/2024</td>
            <td>2200₺</td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
