import Image from "next/image";
import styles from "@/app/ui/dashboard/users/userDetails/userDetails.module.css";
import { getSingleUser, updateUser } from "@/app/lib/actions";

const UserDetails = async ({ params }) => {
  const { id } = params;
  const user = await getSingleUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.userImg}
          src={user.img || "/product.jpg"}
          width={128}
          height={128}
          alt="profile image of a user"
        />
        {user.username}
      </div>
      <form className={styles.form} action={updateUser}>
        <input type="hidden" name="id" value={user.id} />
        <label htmlFor="">Username</label>
        <input type="text" name="username" placeholder={user.username} />
        <label htmlFor="">Email</label>
        <input type="email" name="email" placeholder={user.email} />
        <label htmlFor="">Password</label>
        <input type="password" name="paassword" placeholder={user.password} />
        <label htmlFor="">Phone</label>
        <input type="text" name="phone" placeholder={user.phone} />
        <label htmlFor="">Address</label>
        <input type="text" name="Address" placeholder={user.address} />
        <label htmlFor="isAdmin">Is Admin ?</label>
        <select name="isAdmin" id="isAdmin">
          <option value="true" selected={user.isAdmin}>
            Yes
          </option>
          <option value="false" selected={!user.isAdmin}>
            No
          </option>
        </select>
        <label htmlFor="isActive">Is Active ?</label>
        <select name="isActive" id="isActive">
          <option value="true" selected={user.isActive}>
            Yes
          </option>
          <option value="false" selected={!user.isActive}>
            No
          </option>
        </select>
        <button>Update</button>
      </form>
    </div>
  );
};

export default UserDetails;
