import React, { Fragment, useDeferredValue, useState } from "react";
import Products from "./Products";

const DifferedValue = () => {
 const [value, setValue] = useState("");

 const deferredValue = useDeferredValue(value);

 const isStale = deferredValue !== value;
 return (
  <Fragment>
   <input value={value} onChange={(e) => setValue(e.target.value)} />
   {isStale && <div>DIFFERENCE EXISTS</div>}
   <Products searchTerm={value} />
  </Fragment>
 );
};

export default DifferedValue;
