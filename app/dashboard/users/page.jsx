import Search from "@/app/ui/dashboard/search/search";
import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Image from "next/image";
import { MdAddBox } from "react-icons/md";
import { fetchUsers } from "@/app/lib/fetchData";

const Users = async ({ searchParams }) => {
  const query = searchParams?.q || "";
  const users = await fetchUsers(query);
  console.log(users);
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
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    className={styles.userImg}
                    src={user.img}
                    width={40}
                    height={40}
                    alt="profile photo"
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.isAdmin ? "Admin" : "Customer"}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className={styles.btns}>
                  <Link href="/dashboard/users/elif">
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
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default Users;
