import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const handlevalue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const submitR = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({ name: "", email: "", password: "" });
  };
  return (
    <div>
      <form className="form" onSubmit={submitR}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={user.name}
            onChange={handlevalue}
            name="name"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={user.email}
            onChange={handlevalue}
            name="email"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={user.password}
            onChange={handlevalue}
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
