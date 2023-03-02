import './App.css'
import { Home } from './components/pages/Home'
import { Login } from './components/pages/Login'
import { Register } from './components/pages/Register'
import { NavBarMenu } from './components/NavBarMenu/index'


function App() {
  return (
    <div id="App">
      <Home />
      <Login />
      <Register />
      <NavBarMenu/>
    </div>
  )
}


export default App
