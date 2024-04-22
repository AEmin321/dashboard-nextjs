import Image from "next/image";
import styles from "@/app/ui/dashboard/users/userDetails/userDetails.module.css";

const UserDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.userImg}
          src="/product.jpg"
          width={128}
          height={128}
          alt="profile image of a user"
        />
        Elif Kaya
      </div>
      <form className={styles.form}>
        <label htmlFor="">Username</label>
        <input type="text" name="username" placeholder="Elif Kaya" />
        <label htmlFor="">Email</label>
        <input type="email" name="email" placeholder="ElifKaya@gmail.com" />
        <label htmlFor="">Password</label>
        <input type="password" name="paassword" placeholder="johnny" />
        <label htmlFor="">Phone</label>
        <input type="text" name="phone" placeholder="+90552144000" />
        <label htmlFor="">Address</label>
        <input type="text" name="Address" placeholder="Konya" />
        <label htmlFor="isAdmin">Is Admin ?</label>
        <select name="isAdmin" id="isAdmin">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <label htmlFor="isActive">Is Active ?</label>
        <select name="isActive" id="isActive">
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <button>Update</button>
      </form>
    </div>
  );
};

export default UserDetails;
