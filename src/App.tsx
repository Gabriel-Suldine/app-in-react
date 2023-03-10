import './App.css'
import { Home } from './components/pages/Home'
import { Login } from './components/pages/Login'
import { Register } from './components/pages/Register'
import { NavBarMenu } from './components/NavBarMenu/index'
import { StateExemple } from './components/pages/StateExemple'
import { Gallery } from './components/Gallery'


function App() {
  return (
    <div id="App">
      <Gallery/> 
      <StateExemple />
    </div>
  )
}

/*  <Home />
      <Login />
      <Register />
      <NavBarMenu/> 
      */

export default App
