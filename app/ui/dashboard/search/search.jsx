import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Search..." />
      <MdSearch size={20} />
    </div>
  );
};

export default Search;
