import { useState } from "react";

const Toggle = () => {
  return <div className="alert alert-danger"> hello from toggle</div>;
};

const ToggleChallenge = () => {
  const [value, checkVal] = useState(false);
  function dd() {
    if (value) {
      checkVal(false);
      return;
    }
    checkVal(true);
  }

  return (
    <>
      <div>
        <button className="btn" onClick={dd}>
          Check
        </button>
        {value && <Toggle />}
      </div>
    </>
  );
};

export default ToggleChallenge;
