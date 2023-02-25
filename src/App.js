import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { About } from './About'
import { NoMatch } from "./NoMatch"
import { Products } from "./Products"
import { Navbar } from "./Navbar"
export const App = () => {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="products" element={<Products/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </>
  )
}