import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";
import Image from "next/image";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <Image
          className={styles.productImg}
          src="/product.jpg"
          height={128}
          width={128}
          alt="place holder image of a product."
        />
      </div>
      <form className={styles.form} action={addProduct}>
        <input type="text" placeholder="Title" name="title" required />
        <input type="text" placeholder="Size" name="size" />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Description"
        ></textarea>
        <input type="text" placeholder="Color" name="color" />
        <select name="category" id="category">
          <option value="choose">Choose a Category</option>
          <option value="sun hats">Sun Hats</option>
          <option value="winter hats">Winter Hats</option>
        </select>
        <input type="number" placeholder="Price" name="price" />
        <input type="number" placeholder="Stock" name="stock" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
