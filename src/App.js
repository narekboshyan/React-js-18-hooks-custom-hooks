import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
 const [name, setName] = useState();
 const [state, setState] = useState({
  name: "",
  selected: false,
 });

 useEffect(() => {
  console.log("The state has changed, useEffect runs!");
 }, [state.name, state.selected]);

 const handleAdd = () => setState((prevState) => ({ ...prevState, name }));
 const handleSelect = () =>
  setState((prevState) => ({ ...prevState, selected: true }));

 return (
  <div>
   <input type="text" onChange={(e) => setName(e.target.value)} />
   <button onClick={handleAdd}>Add Name</button>
   <button onClick={handleSelect}>Select</button>
   <br />
   {`{name:${state.name},
    selected:${state.selected.toString()}
 }`}
  </div>
 );
};

export default App;
