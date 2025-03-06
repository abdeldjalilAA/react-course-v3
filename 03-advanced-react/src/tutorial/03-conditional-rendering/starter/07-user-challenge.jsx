import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const che = () => {
    setUser({ name: "ee" });
  };
  const chek = () => {
    setUser(null);
  };

  const Login = () => {
    return (
      <div>
        <h1 className=" alert-success">Login</h1>
        <p>{user.name}</p>
        <button className=" btn alert-danger" onClick={chek}>
          Logout
        </button>
      </div>
    );
  };

  const Logout = () => {
    return (
      <div>
        <h1 className="alert-danger">logout</h1>
        <p>you must to login in </p>
        <button className="btn alert-success" onClick={che}>
          Login
        </button>
      </div>
    );
  };

  return <>{user ? <Login /> : <Logout />}</>;
};

export default UserChallenge;
