import styles from "@/app/ui/login/login.module.css";
import { MdLogin } from "react-icons/md";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <h3>MeWowDash.</h3>
        </div>
        <form action="" className={styles.form}>
          <div className={styles.loginTxt}>Login</div>
          <input type="text" name="username" placeholder="Username" />
          <input type="password" name="password" placeholder="Password" />
          <button className={styles.loginBtn}>
            <MdLogin />
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
