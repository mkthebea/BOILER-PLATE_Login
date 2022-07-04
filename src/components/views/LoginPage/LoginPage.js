import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    let body = {
      email: Email,
      password: Password,
    };
    dispatch(loginUser(body)).then((response) => {
      // 로그인 성공 시 랜딩 페이지로 이동
      if (response.payload.loginSuccess) {
        props.history.push("/"); // 리액트에서 페이지 이동을 하는 방법
      } else {
        alert("Error");
      }
    });

    // redux 안쓸 때
    // Axios.post("/api/user/login", body).then((response) => {
    //   //처리
    // });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={onSubmitHandler}>
        <label>Email</label>
        <input type="email" value={Email} onChange={onEmailHandler} />
        <label>Password</label>
        <input type="password" value={Password} onChange={onPasswordHandler} />

        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
