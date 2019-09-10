import React, { useState, useEffect } from 'react';

//useEffect replaces componentDidUpdate, componentDidMount, and
//componentDidUnmount all at once
//BE AWARE! By replacing all three, it IS all three
//it will cause an inf look with cDU if you are not cautious

function DataFetchHooks() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/links/")
    .then(response => response.json())
    .then(data => setData(data));
  }, []); //this array stops the inf loop of useEffect (cDU)

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
//open devTools and go to Network; check for a failed import of /links/

export default DataFetchHooks;
