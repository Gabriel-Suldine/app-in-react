import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home'
import { Login } from './components/pages/Login'
import { Register } from './components/pages/Register'
import { NavBarMenu } from './components/NavBarMenu/index'
import { StateExemple } from './components/pages/StateExemple'
import { Gallery } from './components/Gallery'



function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register/>}>




          </Route>
        </Routes>
        <NavBarMenu />
      </BrowserRouter>

    </div>
  )
}



export default App
