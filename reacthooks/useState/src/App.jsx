import { useState } from 'react'
// Gerenciar o estado de algum valor
// getter setter

import './App.css'

function App() {
  const [name, setName] = useState("Pedro Damiao");
  const [number, setNumber] = useState(1);

  const changeNumber = () => {
    //Previous value
    setNumber((prevNumber) => prevNumber + 1);
  }

  return (
    <>
      <h2>Meu nome e: {name}</h2>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div>
        <p>Numero: {number}</p>
        <button onClick={changeNumber}>Mudar o numero</button>
      </div>
    </>
  )
}

export default App
