import './App.css';
import { useState } from 'react';
const axios = require('axios');

function App() {

    const [nome, setNome] = useState("");

    function saveName() {

        const data = { "Nome": nome };

        axios.post('http://localhost:3031/cadastrar', data)
            .then(function (response) {
                console.log(response);
                alert('Cadastrado com sucesso');
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    function eventHandler(e) {
        setNome(e.target.value);
    }

    return (
        <div className="App">
            <header className="App-header">
                <label>Digite seu nome:</label>
                <input type="text" placeholder="Digite seu nome" onBlur={(e) => eventHandler(e)} />
                <input type="button" value="Salvar" onClick={saveName} />
            </header>
        </div>
    );
}

export default App;
