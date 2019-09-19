import React, { useState,useEffect } from 'react';
//acts as the Redux store; create states and functions here
export const ComponentContext = React.createContext();

const ComponentProvider = props => {
  const [username, setUsername] = useState('');
  const [password, usePassword] = useState('');
  const [data,setData] = useState([]);

  function useFetchDataToJson() {

    useEffect(() => {
      fetch(data)
      .then(response => response.json())
      .then(data => setData(data));
    },[])
  }

  return (
    <ComponentContext.Provider
      value={{
        username,
        password,
        data,
        useFetchDataToJson
      }}
    >
      {props.children}
    </ComponentContext.Provider>
  )
}

export default ComponentProvider;
