import { Card, Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type StoreItemProps = {
    id:number 
    name:string
    description:string
    price:number
    imageUrl: string  
}

export function StoreItem({ id, name, description, price, imageUrl}: StoreItemProps) {
    const {getItemQuantity,increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id)
    return <Card>
        <Card.Img variant="top" src={imageUrl} height="200px" style={{objectFit: "cover", width:"100%", height:"300px" }} />
        <div style={{background:"rgb(255, 250, 243)"}}>
            {quantity === 0 ? (
                <Button onClick={()=> increaseCartQuantity(id)} style={{background:"white", color:"black", border:"solid",position:"relative", right:"-108px", top:"-20px"}}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg> Add to Cart</Button>
            ) : <div className="d-flex" >
                <Button style={{background:"orange", padding:"3px", border:"none", position:"relative", right:"-125px",
                    top:"-20px"
                }}>
                    <Button onClick={()=> decreaseCartQuantity(id)} style={{background:"orange", border:"none"}}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg></Button>
                   <span>{quantity}</span> 
                    <Button onClick={()=> increaseCartQuantity(id)}  style={{background:"orange",border:"none"}}><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg></Button>
                    </Button></div>}
        
      </div>
        <Card.Body style={{background:"rgb(255, 250, 243)"}} className="d-flex flex-column">
            <Card.Title >
                <p style={{color:"grey",}}>{name}</p>
                <p>{description}</p>
                <p style={{color:"orange"}}>{formatCurrency(price)}</p>

            </Card.Title>
        </Card.Body>
    </Card>
}