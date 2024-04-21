import { MdArrowCircleLeft, MdArrowCircleRight } from "react-icons/md";
import styles from "./pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn} disabled>
        <MdArrowCircleLeft size={30} color="#818B89" />
      </button>
      <button className={styles.btn}>
        <MdArrowCircleRight size={30} color="#818B89" />
      </button>
    </div>
  );
};

export default Pagination;
