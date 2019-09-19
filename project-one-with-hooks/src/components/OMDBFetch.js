import React, { useState,useEffect,useContext } from 'react';
import './styles/OMDBFetch.css';
// import ComponentProvider from './ComponentProvider';

function OMDBFetch() {

  const [data, setData] = useState({});

  useEffect(() => {
    fetch("http://www.omdbapi.com/?t=Spider-man&y=2019&apikey=a90050c8")
    .then(response => response.json())
    .then(data => setData(data))
  },[])
  console.log(data)


  return (
    <div>
    <br/>This is OMDBFetch
      <ul className = "omdbList">
        <li><img src={data.Poster}/></li>
        <li>Title: {data.Title}</li>
        <li>Released: {data.Released}</li>
        <li>Actors: {data.Actors}</li>
      </ul>
    </div>
  )
}

export default OMDBFetch;
