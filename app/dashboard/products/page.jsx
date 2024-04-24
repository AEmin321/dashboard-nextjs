import styles from "@/app/ui/dashboard/products/products.module.css";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import Link from "next/link";
import Image from "next/image";
import Search from "@/app/ui/dashboard/search/search";
import { MdAddBox } from "react-icons/md";
import { fetchProducts } from "@/app/lib/fetchData";

const Products = async ({ searchParams }) => {
  const query = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, products } = await fetchProducts(query, page);
  if (!products) {
    return <div>Loading the data....</div>;
  }
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
          {products.map((product) => (
            <tr key={product._id}>
              <td>
                <div className={styles.product}>
                  <Image
                    className={styles.productImg}
                    src={product.img}
                    width={40}
                    height={40}
                    alt="product photo"
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>{product.price}₺</td>
              <td>{product.stock}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.btns}>
                  <Link href={`/dashboard/products/${product._id}`}>
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
      <Pagination count={count} />
    </div>
  );
};

export default Products;
