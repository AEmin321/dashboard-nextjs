import Sidebar from "../ui/dashboard/sidebar/sidebar";
import Navbar from "../ui/dashboard/navbar/navbar";
import Footer from "../ui/dashboard/footer/footer";
import styles from "../ui/dashboard/dashboard.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sideMenu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
