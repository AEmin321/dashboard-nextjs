import styles from "@/app/ui/dashboard/products/products.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import { MdAddBox } from "react-icons/md";

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <Search />
        <Link href="/dashboard/products/add">
          <button className={styles.addBtn}>
            <MdAddBox size={24} color="#00C28C" />
            Add New Product
          </button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Stock</td>
            <td>Created At</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  className={styles.productImg}
                  src="/product.jpg"
                  width={40}
                  height={40}
                  alt="product photo"
                />
                Apple ipod
              </div>
            </td>
            <td>Product description is not available.</td>
            <td>2000₺</td>
            <td>100</td>
            <td>12.12.2024</td>
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

export default Products;
