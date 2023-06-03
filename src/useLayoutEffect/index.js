import React, { useState, useEffect, useLayoutEffect } from "react";

//* The purpose of useLayoutEffect is to perform immediate DOM mutations or read layout-related information before the browser has a chance to paint. It is a synchronous effect that runs after a render but before the browser updates the screen. If you perform asynchronous operations, such as API requests, within useLayoutEffect, it can lead to blocking behavior and potentially freeze the UI.

const ExampleComponent = () => {
 const [count, setCount] = useState(0);

 useEffect(() => {
  console.log("useEffect - Before DOM update");
  document.title = `Count: ${count}`;
  console.log("useEffect - After DOM update");
 });

 useLayoutEffect(() => {
  console.log("useLayoutEffect - Before DOM update");
  document.title = `Count: ${count}`;
  console.log("useLayoutEffect - After DOM update");
 });

 return (
  <div>
   <p>Count: {count}</p>
   <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
 );
};

export default ExampleComponent;

/* 
In this example, we have a simple component ExampleComponent that displays a count and a button. When the button is clicked, the count is incremented. Both useLayoutEffect and useEffect are used to update the document title with the current count value.

The difference between the two hooks lies in when they are executed.

useLayoutEffect is synchronous and runs immediately after the render but before the browser has a chance to paint anything on the screen. It allows you to make changes to the DOM synchronously, which means any updates performed within useLayoutEffect will be visible to the user before the browser has a chance to paint.

useEffect, on the other hand, is asynchronous and runs after the render is committed to the screen. It is scheduled in the browser's low-priority task queue, which means it runs after the browser has painted the screen. The updates performed within useEffect will not be visible immediately, as they will be applied during the next paint.

In the example, you'll notice that when you click the "Increment" button, the useLayoutEffect hook updates the document title immediately, and you'll see the console logs before and after the DOM update. However, the useEffect hook updates the document title asynchronously, and you'll see its console logs after the DOM update.

This example helps demonstrate the timing differences between useLayoutEffect and useEffect and how they can be used depending on whether you need synchronous or asynchronous behavior.


*/
