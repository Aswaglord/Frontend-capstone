import { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/login", {
      method: "POST",
      body: JSON.stringify({
        userName: username,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Logged In") {
          props.setIsAuthenticated(true);
        } else {
          props.setIsAuthenticated(false);
          alert("incorrect password");
        }
      })
      .catch((err) => console.error("Login Error", err));
  }

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username or Email"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
