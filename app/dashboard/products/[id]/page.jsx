import Image from "next/image";
import styles from "@/app/ui/dashboard/products/productDetails/productDetails.module.css";

const ProductDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.productImg}
          src="/product.jpg"
          width={128}
          height={128}
          alt="profile image of a user"
        />
        Summer Hat
      </div>
      <form className={styles.form}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="Hat" />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" placeholder="500₺" />
        <label htmlFor="color">Color</label>
        <input type="text" name="color" placeholder="Red" />
        <label htmlFor="stock">Stock</label>
        <input type="text" name="stock" placeholder="33" />
        <label htmlFor="size">Size</label>
        <input type="text" name="size" placeholder="M" />
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          <option value="summer">Summer hats</option>
          <option value="winter">Winter hats</option>
        </select>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="4"
          placeholder="Description"
        ></textarea>
        <button>Update</button>
      </form>
    </div>
  );
};

export default ProductDetails;
