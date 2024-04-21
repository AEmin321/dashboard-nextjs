"use client";
import React from "react";
import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

const MenuLink = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        pathname === item.path && styles.active
      }`}
    >
      <span className={`${pathname === item.path && styles.activeIcon}`}>
        {item.icon}
      </span>
      {item.title}
    </Link>
  );
};

export default MenuLink;
