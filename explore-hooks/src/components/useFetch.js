import React, { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState([]);

useEffect(() => {
  fetch(url)
  .then(response => response.json())
  .then(data => setData(data));
}, []); //DO NOT forget the magical infinite loop killing array

  return data;
}

export default useFetch;
//with this there should now be two errors under the Network tab in the
//developer tools; check for two 'localhost:3001/links/'
