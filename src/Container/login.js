import styles from "./login.module.css";
import { useContext } from "react";
import { Context } from "./context";
const Login = () => {
  const { setUsername, setShowprofile } = useContext(Context);
  const onChangeHandler = (text) => {
    setUsername(text);
  };
  return (
    <div className={styles.mainHeader}>
      <form className={styles.formHeader}>
        <input
          className={styles.loginHeader}
          type="text"
          placeholder="Please enter Username"
          onChange={(event) => onChangeHandler(event.target.value)}
        />
        <input
          className={styles.loginHeader}
          type="password"
          placeholder="Please enter Password"
        />
        <button
          className={styles.submit}
          onClick={() => {
            setShowprofile(true);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;
