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
      <h1>The below data is loaded from an API:</h1>
      <p>{myData}</p>
    </div>
  );
}
