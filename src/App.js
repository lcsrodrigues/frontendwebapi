import './App.css';
import { useState, useEffect } from 'react';
const axios = require('axios');

function App() {

  const [lstNomes, setLstNomes] = useState([]);

  useEffect(() => {
    function getNomes() {

      axios.get('http://localhost:3031/listar', {
        headers: {
          'Content-Type': 'application/json',
        }
      })
        .then(function (response) {
          setLstNomes(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }

    getNomes();

  }, []);

  return (
    <div className="App">
      <header className="App-header">

        <ul>
          {
            lstNomes.length ?
              lstNomes.map(data => {
                return (
                  <li>{data.Nome}</li>
                )
              })
              :
              <li>A lista está vazia</li>
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
