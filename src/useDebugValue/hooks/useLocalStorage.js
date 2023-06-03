import { useDebugValue, useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
 const [value, setValue] = useState(() => {
  if (localStorage.getItem(key)) {
   return localStorage.getItem(key);
  }
  return defaultValue;
 });

 //  So useDebugValue now is debugging showing our custom hooks values, but it only works in custom hook values
 useDebugValue(value, (v) => getValueSlowly(v));

 useEffect(() => {
  localStorage.setItem(key, value);
 }, [key, value]);

 return [value, setValue];
};

const getValueSlowly = (value) => {
 for (let i = 0; i < 30000000000000000; i++) {
  return value;
 }
};
