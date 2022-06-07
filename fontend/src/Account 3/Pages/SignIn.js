import style from "./Pages.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UnloginNav from "../../Home/Components/UnloginNav/UnloginNav";

function SignIn(props) {
  const { auth, setAuth } = props;

  // useHistory版本已被useNavigate取代
  const navigate = useNavigate();
  return (
    <>
      <UnloginNav />
      <main className={style.main}>
        <h1 className={style.h1}>登入</h1>
        <p>用以下帳號繼續</p>
        <div className={style.google}>
          <a href="#">
            <img src={require("../images/google.png")} alt="google" />
          </a>
        </div>
        {/* <div className="google">
          <a href="#">
          <img src={require('../images/facebook.png')} />
          </a>
        </div> */}

        <hr className={style.hr} />
        <p>或用柴米帳號</p>
        <form className={style.form}>
          <label>帳號</label>
          <input type="text" />
          <label>密碼</label>
          <input type="password" />
          <Link to="/signin/identify">忘記密碼</Link>
        </form>
        <a href="Product/1">
          <button
            className={style.button}
            onClick={() => {
              setAuth(!auth);

              alert("登入成功");

              navigate("/account");
            }}
          >
            {auth ? "登出" : "登入"}
          </button>
        </a>

        <p>
          還不是會員嗎? <Link to="/signup">立即註冊</Link>
        </p>
      </main>
    </>
  );
}

export default SignIn;
