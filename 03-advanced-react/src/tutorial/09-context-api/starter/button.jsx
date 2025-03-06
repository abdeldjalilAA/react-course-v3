import { useState } from "react";

export const Button = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  const login = () => {
    setUser({ name: "bob" });
  };
  return (
    <div>
      {user ? (
        <div className="user-container">
          <p>Hi There {user.name.toUpperCase()}</p>
          <button className="btn btn-block" onClick={logout}>
            LogOUT
          </button>
        </div>
      ) : (
        <button className="btn btn-block" onClick={login}>
          please login{" "}
        </button>
      )}
    </div>
  );
};
export default Button;
