import styles from "./boxs.module.css";

export function Boxs() {
  return (
    <div className={styles.box}>
      <div className={styles.left}>
        <h2>Login</h2>
        <form className={styles.formLogin}>
          <input
            className={styles.input}
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            required
          />
          <input
            className={styles.input}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            className={styles.submit}
            type="submit"
            name="submit"
            id="submit"
            value="Login"
          />
        </form>
      </div>
      <div className={styles.right}>
        <a className={styles.rightLink} href="#">
          SignUp
        </a>
      </div>
    </div>
  );
}

export default Boxs;
