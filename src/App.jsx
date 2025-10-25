import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import './styles/normalize.css'
function App() {
  return (
    <>
      <div className="top">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        Старовый сборка от <span>Эдил Мажитов!</span>
      </h1>
      <h2>
        ReactJS + <span>SCSS</span>  + Prettier
        <br />и сборщик проектов <span>Vite</span>
      </h2>
      <p>Готовый нормализация стилей через normalize</p>
    </>
  )
}

export default App
