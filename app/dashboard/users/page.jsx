import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
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
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Role</td>
            <td>Created At</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <img
                  className={styles.userImg}
                  src="/profile.jpg"
                  width={40}
                  height={40}
                  alt="profile photo"
                />
                Elif Kaya
              </div>
            </td>
            <td>Elifkaya@gmail.com</td>
            <td>Admin</td>
            <td>12.12.2024</td>
            <td>Active</td>
            <td>
              <div className={styles.btns}>
                <Link href="/">
                  <button className={`${styles.btn} ${styles.more}`}>
                    More
                  </button>
                </Link>
                <Link href="/">
                  <button className={`${styles.btn} ${styles.remove}`}>
                    Remove
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Users;
