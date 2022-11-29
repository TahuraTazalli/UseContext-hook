import { useContext } from "react";
import { Context } from "./context";
import styles from "./login.module.css";

const Profile = () => {
  const { username } = useContext(Context);
  console.log(username);
  return (
    <div className={styles.profileHeader}>
      <h1>My Profile Name</h1>
      <h2>{username}</h2>
    </div>
  );
};
export default Profile;
