'use client';
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // create a state variable to store the data we get
  const [myData, setMyData] = useState(null);
  // get data from the server
  useEffect(() => {
    // fetch is built into the browser, so you don't need to install anything to use it
    // I'm sure it's easy to find copious information on how to use it on YouTube
    fetch("/api/example_api", {
      // the method is GET because we're getting data from the server
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => { 
        console.log(data);
        setMyData(data.myValue);
      });
  })
  return (
    <div>
      <h1>How to use an API in Next.js</h1>
      <h2>Step 1: set up next.js</h2>
      <p>create a next.js project with <code>npx create-next-app</code></p>
      <h2>Step 2: Create a File for your api Route</h2>
      <p>Look for the <code>/api</code> or <code>/src/api</code> folder in your project</p>
      <p>create a new folder within that folder.  Name it whatever you'd like the api route to be called. My example is called <code>example_api</code></p>
      <p>create a new file within that folder.  Name it <code>route.js</code> this name is mandatory just like "page.js" is mandatory for pages</p>
      <h2>Step 3: Write your API route</h2>
      <p>The thing that confused me most was the fact that you HAVE to name your functions after the HTTP method they handle</p>
      <p>Take a look at my api route at <code>src/api/example_api/route.js</code> to learn how to write a basic API route</p>
      <h2>Step 4: Use the API in your page</h2>
      <p>Once you create the API route, you just have to send a request to it from your page.  I'm using fetch, but you can use axios or whatever you'd like</p>

      <h2>Step 5: Display the data</h2>
      <p>Display or use the data in some way! The following text is filled out by the data we got from the server:</p>
      <h1>The server said: <b> {myData} </b></h1>
    </div>
  );
}
