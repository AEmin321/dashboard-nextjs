import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";
import Image from "next/image";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <div className={styles.userContainer}>
        <Image
          className={styles.userImg}
          src="/product.jpg"
          height={128}
          width={128}
          alt="place holder image of a user."
        />
      </div>
      <form className={styles.form} action="#">
        <input type="text" placeholder="Username" name="username" required />
        <input type="email" placeholder="Email" name="email" required />
        <input
          type="password"
          placeholder="Password"
          name="password"
          required
        />
        <input type="phone" placeholder="Phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value="false">Is Admin ?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value="true">Is Active ?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <textarea
          name="address"
          id="address"
          cols="30"
          rows="10"
          placeholder="Address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
