import Image from "next/image";
import styles from "@/app/ui/dashboard/products/productDetails/productDetails.module.css";
import { getSingleProduct, updateProduct } from "@/app/lib/actions";

const ProductDetails = async ({ params }) => {
  const { id } = params;
  const product = await getSingleProduct(id);
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
        {product.title}
      </div>
      <form className={styles.form} action={updateProduct}>
        <input type="hidden" name="id" value={product.id} />
        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder={product.title} />
        <label htmlFor="price">Price</label>
        <input type="text" name="price" placeholder={product.price} />
        <label htmlFor="color">Color</label>
        <input type="text" name="color" placeholder={product.color} />
        <label htmlFor="stock">Stock</label>
        <input type="text" name="stock" placeholder={product.stock} />
        <label htmlFor="size">Size</label>
        <input type="text" name="size" placeholder={product.size} />
        <label htmlFor="category">Category</label>
        <select name="category" id="category">
          <option value="summer" selected={product.category === "summer"}>
            Summer hats
          </option>
          <option value="winter" selected={product.category === "winter"}>
            Winter hats
          </option>
        </select>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="4"
          placeholder={product.desc}
        ></textarea>
        <button>Update</button>
      </form>
    </div>
  );
};

export default ProductDetails;
