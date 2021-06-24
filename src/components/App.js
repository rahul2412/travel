import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Customers from './Customers';

function App() {
  const [customers, setCustomers] = useState(0);

  useEffect(() => {
    axios.get('https://intense-tor-76305.herokuapp.com/merchants')
      .then(response => {
        setCustomers(response.data)
      }).catch(error => console.log(error));
  }, []);

  return (
    <Customers customers={customers} />
  );
}

export default App