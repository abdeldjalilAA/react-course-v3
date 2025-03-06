import { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";
const UseEffectBasics = () => {
  const [value, setValue] = useState(null);
  const [errr, setErr] = useState(false);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const value = await response.json();
        setValue(value);
        console.log(value);
      } catch (error) {
        setErr(true);
        console.log(error);
      }
      setLoad(false);
    };
    fetchData();
  }, []);
  if (errr) {
    return <h5> there is an error</h5>;
  }
  if (load) {
    return <h5> Is Loading</h5>;
  }
  const { avatar_url, login } = value;
  return (
    <>
      <h1>
        ;;;;
        {login}
      </h1>
      <img src={avatar_url} alt="" />
    </>
  );
};
export default UseEffectBasics;
