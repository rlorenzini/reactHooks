import React, { useState, useEffect } from 'react';
import useFetch from './useFetch';
import useAsyncFetch from './useAsyncFetch';

function CustomDataFetchHooks(props) {
  // const data = useFetch("http://localhost:3001/links/");
  //using our custom hook, we can call an api with fewer lines of code
  const data = useAsyncFetch("http://localhost:3001/asynclinks/");
  //comment out which one you are not using to test the other
  //both appear under network tab as links or asynclinks

  return (
    <div>
     <ul>
       {data.map(el => (
         <li key={el.id}>{el.title}</li>
       ))}
     </ul>
    </div>
  );
}

export default CustomDataFetchHooks;
//reminder: you can still do export default function CDFH and do not need
//to separate them like I have been doing
