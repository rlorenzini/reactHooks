import React, { useState, useEffect } from 'react';

export default function useAsyncFetch(url) {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return data;
}

//why can't we use async on useEffect? useEffect(async => .....)?
//useEffect exclusively returns a function while async exclusively returns a promise
//by returning a promise through useEffect, React freaks out and crashes
//therefore, inside of our custom useAsyncFetch function, we create an
//async functions to do the job while our hook returns just data 
