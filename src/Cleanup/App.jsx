import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const App = () => {
 const [user, setUser] = useState({});
 const id = useLocation().pathname.split("/")[2];

 useEffect(() => {
  const cancelToken = axios.CancelToken.source();
  axios
   .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
    cancelToken: cancelToken.token,
   })
   .then(({ data }) => {
    setUser(data);
   })
   .catch((err) => {
    if (axios.isCancel(err)) {
     console.log("CANCELLED");
    } else {
     console.log("DIFFERENT ERROR");
    }
   });

  return () => {
   cancelToken.cancel();
  };
 }, [id]);

 return (
  <div
   style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
   }}
  >
   <p>Name: {user.name}</p>
   <p>UserName: {user.username}</p>
   <p>Email: {user.email}</p>
   <Link to="/users/1">Fetch User 1 </Link>
   <Link to="/users/2">Fetch User 2 </Link>
   <Link to="/users/3">Fetch User 3 </Link>
  </div>
 );
};

export default App;
