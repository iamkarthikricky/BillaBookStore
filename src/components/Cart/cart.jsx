import BookStoreContext from "../../Context/BookStoreContext";
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './cart.css';
import { AddOnBtn, CartBookName, CartBookPublisher, CartEmptyHappyText, CartEmptyText } from "./cartStyling";

import { CiHeart } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { FiMinus,FiPlus } from "react-icons/fi";


const Cart=()=>{

    let onIncrementQuantity  = null
    let onDecrementQuantity  = null
    let removeFromCart = null

    const onItemQuantityIncrement =(e)=>{
        onIncrementQuantity(e.id)
    }

    
    const onItemQuantityDecrement=(e)=>{
        const newQuantity = e.quantity - 1
        if(newQuantity < 1){
            removeFromCart(e.id)
        }
        else{
            onDecrementQuantity(e.id)
        }
    }
   

    return(
        <BookStoreContext.Consumer>
            {value=>{
                var cartList = value.cartList
                var isDark = value.isDark
                removeFromCart = value.removeFromCart
                onDecrementQuantity = value.onDecrementQuantity
                onIncrementQuantity = value.onIncrementQuantity
             
                return(
                    <div className="cart-main-container">
                    <Header />
                    <div className="container">
                    <div className="row">
                   
                    {cartList.length === 0 ? (<div className="empty-cart-container">
                        <img src='https://res.cloudinary.com/dlwydxzdi/image/upload/v1720097212/BookStore/empty_cart-removebg-preview_c1zvld.png' className="empty-cart" alt="empty-cart"/>
                        <CartEmptyText $isDark={isDark}>Your cart is empty</CartEmptyText>
                        <CartEmptyHappyText $isDark={isDark}>Add Something to make me happy :)</CartEmptyHappyText>
                    </div>) : (
                        <div className="small-devices-view">
                            <p className="cart-sub-heading">Shopping Cart</p>
                            <div>
                                <ul className="cart-ul-list">
                                    {cartList.map(e=>(
                                        <li className="cart-flex-container" key={e.id}>
                                            <div>
                                                <img src={e.volumeInfo.imageLinks.smallThumbnail} alt={e.id} className="cart-img"/>
                                            </div>
                                            <div className="cart-content-container">
                                           
                                                <div className="add-on">
                                                
                                                    <AddOnBtn  $isDark={isDark}><CiHeart  /></AddOnBtn>
                                                    <AddOnBtn  $isDark={isDark}><MdDeleteOutline /></AddOnBtn>
                                                </div>
                                                <div className="book-details">
                                                    <CartBookName className="cart-book-name" $isDark={isDark}>{e.volumeInfo.title}</CartBookName>
            
                                                    <p className="cart-book-publisher">Publisher: <CartBookPublisher $isDark={isDark}>{e.volumeInfo.publisher}</CartBookPublisher></p>
                                                </div>
                                                <div className="price-container">
                                                    <div className="quantity-container">
                                                   
                                                    <FiMinus onClick={()=>onItemQuantityDecrement(e)}/>
                                                    <p>{e.quantity}</p>
                                                    <FiPlus onClick={()=>onItemQuantityIncrement(e) }/>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>)
                    }
                    </div>
                    </div>
                   
                    <Footer />
                    </div>
                )
            }}
        </BookStoreContext.Consumer>
    )
}

export default Cart