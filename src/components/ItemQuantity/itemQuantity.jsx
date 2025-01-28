import { CiCirclePlus,CiCircleMinus } from "react-icons/ci";
import BookStoreContext from "../../Context/BookStoreContext";
import { QuantityContainer } from "../Modal/modalStyling";

const DisplayQuantity =(props)=>{
    const {bookData} = props

    const {quantity,id} = bookData

    let onIncrementQuantity  = null
    let onDecrementQuantity  = null
    let removeFromCart = null


    const onClickIncrement=()=>{
        onIncrementQuantity(id)
    }

    const onClickDecrement=()=>{
        const newQuantity = quantity - 1
        if(newQuantity === 0){
            removeFromCart(id)
        }
        else{
            onDecrementQuantity(id)
        }
    }
   
        return (
            <BookStoreContext.Consumer>
                {value=>{     
                    var isDark = value.isDark
                    onIncrementQuantity = value.onIncrementQuantity
                    onDecrementQuantity=value.onDecrementQuantity
                    removeFromCart = value.removeFromCart
                    return(
                        <QuantityContainer $isDark={isDark}>
                                  <button className="quantity-btn"><CiCircleMinus onClick={onClickDecrement}/></button>
                                  <p className="quantity">{quantity}</p>
                                  <button className="quantity-btn" onClick={onClickIncrement}><CiCirclePlus /></button>
                        </QuantityContainer>
                    )
                }}
            </BookStoreContext.Consumer>
        )
    }
export default DisplayQuantity