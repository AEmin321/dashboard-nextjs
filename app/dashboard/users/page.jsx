import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import { MdAddBox } from "react-icons/md";

const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Search />
        <Link href="/dashboard/users/add">
          <button className={styles.addBtn}>
            <MdAddBox size={24} color="#00C28C" />
            Add New User
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Users;
