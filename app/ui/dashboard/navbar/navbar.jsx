"use client";
import React from "react";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import { MdChat, MdNotifications, MdPublic, MdSearch } from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <input className={styles.input} type="text" placeholder="Search..." />
          <MdSearch size={20} />
        </div>
        <div className={styles.links}>
          <div>
            <MdChat size={20} />
          </div>
          <div>
            <MdNotifications size={20} />
          </div>
          <div>
            <MdPublic size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
