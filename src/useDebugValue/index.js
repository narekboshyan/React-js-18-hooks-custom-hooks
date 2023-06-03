import React, { Fragment, useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";

const DebugValue = () => {
 const [firstName, setFirstName] = useLocalStorage("firstName", "Narek");
 const [lastName, setLastName] = useState("Boshyan");
 return (
  <Fragment>
   <label>First:</label>
   <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
   <br />
   <label>Last:</label>
   <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
  </Fragment>
 );
};

export default DebugValue;
