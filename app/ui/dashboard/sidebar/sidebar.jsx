import React from "react";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import {
  MdDashboard,
  MdShoppingCart,
  MdGroup,
  MdReceiptLong,
  MdTrendingUp,
  MdPeople,
  MdAnalytics,
  MdSettings,
  MdHelp,
  MdLogout,
} from "react-icons/md";

const sideLinks = [
  {
    title: "MARKETING",
    links: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard fontSize="1.2rem" />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingCart fontSize="1.2rem" />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdGroup fontSize="1.2rem" />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdReceiptLong fontSize="1.2rem" />,
      },
    ],
  },
  {
    title: "ANALYTICS",
    links: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdTrendingUp fontSize="1.2rem" />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople fontSize="1.2rem" />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics fontSize="1.2rem" />,
      },
    ],
  },
  {
    title: "SYSTEM",
    links: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdSettings fontSize="1.2rem" />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelp fontSize="1.2rem" />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>MeWowDash.</div>
      <ul className={styles.list}>
        {sideLinks.map((part, index) => {
          return (
            <li key={index}>
              <div className={styles.part}>{part.title}</div>
              {part.links.map((item, index) => {
                return <MenuLink item={item} key={index} />;
              })}
            </li>
          );
        })}
      </ul>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <Image
            className={styles.userImage}
            src="/profile.jpg"
            width={40}
            height={40}
            alt="profile photo"
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>Elif</span>
            <span className={styles.role}>Admin</span>
          </div>
        </div>
        <button className={styles.logoutBtn}>
          <MdLogout fontSize="1.5rem" />
          <span className={styles.logoutTxt}>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
