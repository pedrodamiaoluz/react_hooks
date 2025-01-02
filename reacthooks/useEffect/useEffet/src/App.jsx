import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countB, setCountB] = useState(10)
  const [user, setUser] = useState()
  // 1 - useEffect utilizacao
  useEffect(() => {
    console.log("Roda a cada renderizacao")
  })

  // 2 - array de dependencias
  useEffect(() => {
    console.log("So roda ao incrementa o valor");
  }, [count]);

  // 3 - array de dep vazio
  useEffect(() => {
    console.log("so executa uma vez")
  }, [])

  // 4 - clean up function
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(`O incrementaor foi alterado ${count} vezes.`)
    }, 2000);

    return () => {
      clearTimeout(timer);
    }
  }, [count]);

  // 5 - fetch com useEffect
  useEffect(() => {
    fetch("https://api.github.com/users/pedrodamiaoluz")
      .then((res) => res.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <>
      <div>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Renderizar</button>
      </div>
      <p>{count}</p>
      <div>
        <button onClick={() => setCountB(prevCount => prevCount + 1)}>Renderizar B</button>
      </div>
      <p>{countB}</p>
      {user && (
        <div>
          <p>dados do usuario</p>
          <h1>Nome: {user.name}</h1>
          <img src={user.avatar_url} />
        </div>
      )}
    </>
  )
}

export default App
