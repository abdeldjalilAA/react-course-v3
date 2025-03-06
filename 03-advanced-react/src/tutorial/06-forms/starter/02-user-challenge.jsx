import { useState } from "react";
import { data } from "./../../../data";

const UserChallenge = () => {
  const [users, setUsers] = useState(data);
  const [user, setUser] = useState("");
  const deleteUser = (id) => {
    const x = users.filter((e) => e.id !== id);
    console.log(x);
    return setUsers(x);
  };

  const onSubmiy = (e) => {
    e.preventDefault();
    if (!user) return;
    const ide = Date.now();
    const usere = { id: ide, name: user };
    setUsers([...users, usere]);
    setUser("");
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmiy}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {users.map((val) => {
        const { id, name } = val;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              className="btn"
              onClick={() => {
                deleteUser(id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
      <h1 key={user}>{user}</h1>

      {/* render users below */}
    </div>
  );
};
export default UserChallenge;
