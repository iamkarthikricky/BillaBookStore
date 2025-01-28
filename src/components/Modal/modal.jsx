import getSymbolFromCurrency from 'currency-symbol-map';
import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";


import DisplayQuantity from "../ItemQuantity/itemQuantity";
import './modal.css';


import { BookAuthors, BookInfo, BookTitle, ListPrice, ModalCloseBtn, ModalSubContainer, RetailPrice } from "./modalStyling";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/bookStoreRedux";

const ModalComponent=(props)=>{

    const{handleButtonClick} = props

    console.log(props)

    const isDark = useSelector((state)=>state.billaBookStore.isDark)

    const [bookInfo,setBookInfo] = useState([]);
    const [quantity,setBookQuantity] = useState(1);

    useEffect(()=>{
        const {bookDetails} = props
        setBookInfo(bookDetails)
    },[bookInfo])

    const dispatch = useDispatch();
    const cartList = useSelector((state)=>state.billaBookStore.cartList)


    const checkItem=(bookInfo)=>{

        const handleAddToCart = (item) => {
            dispatch(addToCart(item));
          };

        const isItemInCart = cartList.filter(eachItem=>eachItem.id === bookInfo.id)

                if(isItemInCart.length > 0){
                    return(
                        <div> 
                           <DisplayQuantity bookData={isItemInCart["0"]} />
                            <Link to='/cart'>
                                <button className="checkout-btn">Proceed to Checkout</button>
                            </Link>
                        </div>
                    )
                }
                else{
                    return(
                        <button className="cart-btn" onClick={handleAddToCart({...bookInfo,quantity})}>
                            <FaShoppingCart  className="me-1"/>
                                Add to Cart
                        </button>
                    )
                }
            }


    const renderPrice=(bookInfo,isDark)=>{
        const {saleInfo} = bookInfo
        const {listPrice,retailPrice} = saleInfo

        const isDiscounted = retailPrice.amount < listPrice.amount
        return (
            <div className="my-2">
                {isDiscounted ? <p><RetailPrice $isDark={isDark}>{getSymbolFromCurrency(retailPrice.currencyCode)} {retailPrice.amount}</RetailPrice>          <ListPrice style={{textDecoration:'line-through'}}  $isDark={isDark}>{getSymbolFromCurrency(retailPrice.currencyCode)} {listPrice.amount}</ListPrice></p> : <ListPrice  $isDark={isDark}>{getSymbolFromCurrency(retailPrice.currencyCode)} {listPrice.amount}</ListPrice>}
            </div>
        )
    }
       
                return(
                <div className="modal-container">
                        <ModalSubContainer $isDark={isDark}>
                            <ModalCloseBtn onClick={handleButtonClick}  $isDark={isDark}><IoClose /></ModalCloseBtn>
                            {Object.keys(bookInfo).length !== 0  && 
                                <div className="modal-content-container">
                                    <img src={bookInfo.volumeInfo.imageLinks.smallThumbnail} alt={bookInfo.id} className="book-img"/>
                                    <div className="modal-book-details">
                                        <BookTitle $isDark={isDark}>{bookInfo.volumeInfo.title}</BookTitle>
                                        <BookAuthors $isDark={isDark}>{bookInfo.authors}</BookAuthors>
                                        <BookInfo $isDark={isDark}>Published by: <span className="book-publisher">{bookInfo.volumeInfo.publisher}</span></BookInfo>
                                        {bookInfo.saleInfo.saleability === 'NOT_FOR_SALE' ? <p className="out-of-stock">Out of Stock</p> : (
                                            <div> 
                                                <p className="in-stock">Stock Available</p>
                                                {renderPrice(bookInfo,isDark)}
                                                {checkItem(bookInfo)}
                                            </div>)}
                                    </div>
                                </div>
                            }
                        </ModalSubContainer>
                </div>
                )
    }
export default ModalComponent