import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const numberRef = useRef(0);

  const buttonRef = useRef()

  const oldCountRef = useRef();

  // Nao re rederiza o componente
  useEffect(() => {
    // setNumber((prevNumber) => prevNumber + 10);
    numberRef.current = Math.random()
  })
 
  // Referencia para o elemento de Dom
  useEffect(() => {
    console.log(buttonRef.current.click())
  }, [])

  // Referenciar do Valor anterior
  useEffect(() => {

    oldCountRef.current = count;

  }, [count])

  return (
    <>
     <h1>O number é: {number}</h1>
     <h1>Contador e: {count}</h1>
     <h2>O contador anterior era: {oldCountRef.current}</h2>
     <button ref={buttonRef} onClick={() => setCount((prevCount) => prevCount + 1)}>Adicionar</button>
     <h1>O numero do useRef é: {numberRef.current}</h1>
    </>
  )
}

export default App
