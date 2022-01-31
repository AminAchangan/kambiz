import { useState } from "react";

const HookObject = () => {
  const [userData, setUserData] = useState({ firstName: "", lastName: "" });

  const firstNameHandler = (e) => {
    // console.log(e.target.value)
    setUserData({ ...userData, firstName: e.target.value });
  };
  const lastNameHandler = (e) => {
    // console.log(e.target.value)
    setUserData({ ...userData, lastName: e.target.value });
  };

  return (
    <form>
      <input
        type="text"
        value={userData.firstName}
        onChange={firstNameHandler}
      />
      <input type="text" value={userData.lastName} onChange={lastNameHandler} />
      <h2>my firstname is {userData.firstName}</h2>
      <h2>my lastname is {userData.lastName}</h2>
    </form>
  );
};

export default HookObject;
