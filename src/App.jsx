import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="./assets/a.pdf" download>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <a href='../public/a.pdf' download>Teste public</a>
      <a href='./assets/a.pdf' download>Teste assets</a>
      <a href='../a.pdf' download>Teste raiz</a>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
