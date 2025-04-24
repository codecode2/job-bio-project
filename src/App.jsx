import './App.css'
import Header from './components/header'
import ParticlesBackground from './components/ParticlesBackground'
import Tabs from './components/tabs'

function App() {
  return (
    <div className="app">
      <ParticlesBackground />
      <div className="content">
        <Header />
        <Tabs />
      </div>
    </div>
  )
}

export default App
