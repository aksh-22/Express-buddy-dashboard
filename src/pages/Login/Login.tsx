import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DotLoader from "react-spinners/DotLoader";
import { useState } from "react";

import { setData, setToken } from "src/store/reducer/userReducer";
import { setAuth } from "src/store/reducer/appReducer";

import Logo from "src/assets/image/expressBuddyLogo.png";
import { loginApi } from "src/api/auth.service";
import Button from "src/components/Button/Button";
import Input from "src/components/Input/Input";

const override = {
  display: "block",
  margin: "0 auto",
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: any) {
    try {
      setIsLoading(true);
      e.preventDefault();

      const formData: any = Object.fromEntries(new FormData(e.target));
      const data = await loginApi(formData);

      dispatch(setToken(data.access_token));
      dispatch(setData(formData));

      dispatch(setAuth(true));
      navigate("dashboard");

      // setTimeout(() => {
      //   dispatch(setAuth(true));
      //   navigate("dashboard");
      //   setIsLoading(false);
      // }, 5000);
    } catch (error: any) {
      setIsLoading(false);
    }
  }

  return (
    <>
      <ToastContainer />
      <form className={styles.form} onSubmit={handleSubmit}>
        <img className={styles.formLogo} src={Logo} alt="Logo" />
        <Input
          inputStyle="formPlaceholders"
          type="email"
          placeholder="Username"
          name="email"
          defaultValue="admin2@gmail.com"
        />
        <Input
          inputStyle="formPlaceholders"
          type="password"
          placeholder="Password"
          name="password"
          defaultValue="System@123"
        />
        <div className={styles.checkLabel}>
          <input className={styles.check} type="checkbox" />
          <label>Remember me</label>
        </div>
        <Button tabStyle="" btnStyle="formBtn" disabled={isLoading}>
          {isLoading ? (
            <DotLoader
              color="#fff"
              cssOverride={override}
              size={16}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : (
            "Login"
          )}
        </Button>
        <Link className={styles.formLink} to="">
          Forget your password?
        </Link>
      </form>
    </>
  );
}
