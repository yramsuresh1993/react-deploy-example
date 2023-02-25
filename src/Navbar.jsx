import { NavLink } from "react-router-dom"
export const Navbar = () => {
    const getColor=({isActive})=> {
        return {
            color: isActive ? "red": "black"
        }
    }
    return(
        <>
            <nav>
                <NavLink style={getColor} to="/">Home</NavLink>
                <NavLink style={getColor} to="about">About</NavLink>
                <NavLink style={getColor} to="products">Products</NavLink>
            </nav>
        </>
    )
}