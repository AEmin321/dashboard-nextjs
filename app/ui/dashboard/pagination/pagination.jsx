"use client";
import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";
import styles from "./pagination.module.css";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const path = usePathname();
  const { replace } = useRouter();
  const params = new URLSearchParams(searchParams);
  const page = searchParams.get("page") || 1;
  const itemsPerPage = 5;

  const prevPage = itemsPerPage * (parseInt(page) - 1) > 0;
  const nextPage = itemsPerPage * (parseInt(page) - 1) + itemsPerPage < count;

  const handlePage = (type) => {
    type === "prevBtn"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${path}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.btn}
        disabled={!prevPage}
        onClick={() => handlePage("prevBtn")}
      >
        <MdArrowCircleLeft size={30} color="#818B89" />
      </button>
      <button
        className={styles.btn}
        disabled={!nextPage}
        onClick={() => handlePage("nextBtn")}
      >
        <MdArrowCircleRight size={30} color="#818B89" />
      </button>
    </div>
  );
};

export default Pagination;
