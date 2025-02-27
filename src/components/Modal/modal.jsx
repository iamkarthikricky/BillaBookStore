import { Modal } from "antd";
import getSymbolFromCurrency from "currency-symbol-map";
import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import styled from "styled-components";
import DisplayQuantity from "../ItemQuantity/itemQuantity";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/bookStoreRedux";

import "./modal.css";

export const StyledModal = styled(Modal)`
  border-radius: 10px !important;
  .ant-modal-content {
    background: ${({ darkMode }) => (darkMode ? "#1e1e1e" : "#fff")} !important;
    color: ${({ darkMode }) => (darkMode ? "#fff" : "#000")} !important;
    padding: 10 0 !important;
     
      display: flex;
      flex-direction: column;
      justify-content: space-between;
  }

  .ant-modal-body { 
    margin-top: 20px !important;
    background: ${({ darkMode }) => (darkMode ? "#1e1e1e" : "#fff")} !important;
   

  
  }

  .ant-modal-header {
    background: ${({ darkMode }) => (darkMode ? "#333" : "#fff")} !important;
    color: ${({ darkMode }) => (darkMode ? "#fff" : "#000")} !important;
  
  }


  .ant-modal-footer {
    background: ${({ darkMode }) => (darkMode ? "#222" : "#fff")} !important;
    
  }

  .ant-modal-close-x {
    color: ${({ darkMode }) => (darkMode ? "#fff" : "#000")} !important;
      padding:  0 !important;
    
  }
`;


const MyModal = ({ isOpen, onClose, bookDetails }) => {
  const isDark = useSelector((state) => state.billaBookStore.isDark);

  const [bookInfo, setBookInfo] = useState([]);
  const [quantity, setBookQuantity] = useState(1);

  useEffect(() => {
    setBookInfo(bookDetails);
  }, [bookDetails]);

  const dispatch = useDispatch();
  const cartList = useSelector((state) => state.billaBookStore.cartList);


  const checkItem = (bookInfo) => {
    const handleAddToCart = (item) => {
    
      dispatch(addToCart({bookData:item}));
    };

    const isItemInCart = cartList.filter(
      (eachItem) => eachItem.id === bookInfo.id
    );

    if (isItemInCart.length > 0) {
      return (
        <div className="flex flex-col items-start gap-2">
          <DisplayQuantity bookData={isItemInCart["0"]} />
          <Link to="/cart">
            <button className="checkout-btn">Proceed to Checkout</button>
          </Link>
        </div>
      );
    } else {
      return (
        <button
          className="cart-btn"
          onClick={()=>handleAddToCart({ ...bookInfo, quantity })}
        >
          <FaShoppingCart className="me-1" />
          Add to Cart
        </button>
      );
    }
  };




  const renderPrice = (bookInfo, isDark) => {
    const { saleInfo } = bookInfo;
    const { listPrice, retailPrice } = saleInfo;

    const isDiscounted = retailPrice.amount < listPrice.amount;

    return (
      <div className="my-2">
        {isDiscounted ? (
          <p>
            <p className="retail-price">
              {getSymbolFromCurrency(retailPrice.currencyCode)}{" "}
              {retailPrice.amount}
            </p>{" "}
            <p className="list-price"
              style={{ textDecoration: "line-through",color: isDark ? '#ffffff' : '#21313C' }}
             
            >
              {getSymbolFromCurrency(retailPrice.currencyCode)}{" "}
              {listPrice.amount}
            </p>
          </p>
        ) : (
          <p className="list-price" style={{color: isDark ? '#ffffff' : '#21313C' }}>
            {getSymbolFromCurrency(retailPrice.currencyCode)} {listPrice.amount}
          </p>
        )}
      </div>
    );
  };

  return (
    <StyledModal darkMode={isDark} open={isOpen} onCancel={onClose} footer={null}>
                            {Object.keys(bookInfo).length !== 0  && 
                                <div className="modal-content-container">
                                    <img src={bookInfo.volumeInfo.imageLinks.smallThumbnail} alt={bookInfo.id} className="book-img"/>
                                    <div className="modal-book-details flex flex-col gap-2">
                                        <h1 className="book-title" style={{color : isDark ? '#ffffff': '#21313c'}}>{bookInfo.volumeInfo.title}</h1>
                                        <p className="book-authors" style={{color : isDark ? '#ffffff':  '#889397'}}>{bookInfo.volumeInfo.authors}</p>
                                        <p className="book-authors" style={{color : isDark ? '#ffffff':  '#889397'}}>Published by: <span className="book-publisher">{bookInfo.volumeInfo.publisher}</span></p>
                                        {bookInfo.saleInfo.saleability === 'NOT_FOR_SALE' ? <p className="out-of-stock">Out of Stock</p> : (
                                            <div className="flex flex-col gap-2"> 
                                                <p className="in-stock">Stock Available</p>
                                                {renderPrice(bookInfo,isDark)}
                                                {checkItem(bookInfo)} 
                                            </div>)}
                                    </div>
                                </div>
                            }
    </StyledModal>
  );
};

export default MyModal;
