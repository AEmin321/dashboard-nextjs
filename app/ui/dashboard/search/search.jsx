"use client";
import React from "react";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const { replace } = useRouter();

  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams);
    if (e.target.value) {
      e.target.value.length > 1 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }
    replace(`${path}?${params}`);
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search..."
        onChange={handleChange}
      />
      <MdSearch size={20} />
    </div>
  );
};

export default Search;
