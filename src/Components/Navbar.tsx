import {Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar(){
    const { openCart, cartQuantity} = useShoppingCart()
    return <NavbarBs sticky="top" className="bg-white shadow-sm mb-1">
        <Container>
         <Nav className="me-auto">
         <Nav.Link to={'/'} as={NavLink}>
            Store
        </Nav.Link>
         <Nav.Link to={'/home'} as={NavLink}>
            Home
        </Nav.Link>
        <Nav.Link to={'/about'} as={NavLink}>
             About
        </Nav.Link>
         </Nav>
         <Button onClick={openCart} style={{border:"solid", padding:"3px",width: "3rem", height:"3rem", position:"relative"}}
         variant="outline"
         className="rounded-circle" >
         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>

         <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" 
         style={{color:"white", width:"1.5rem", height:"1.5rem", position:"absolute",
            bottom:"0",
            right:"0",
            transform:"translate(28%,29%)"
         }}>{cartQuantity}</div>
         </Button>
      </Container>
    </NavbarBs>
}