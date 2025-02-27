import { useRef, useState } from "react";


import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import './slider.css';

import { useSelector } from "react-redux";
import MyModal from "../Modal/modal";

import { Tooltip } from 'antd';



const SlickSlider=props=>{
  const {booksList,heading}=props


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookDetails,setBookDetails] = useState([]);

  const handleButtonClick = bookDetails => {
    console.log(bookDetails)
      setIsModalOpen(!isModalOpen);
      setBookDetails(bookDetails)
  };

  const sliderRef = useRef();


  const nextSlide = () => {
  sliderRef.current.slickNext();
  };

  const prevSlide = () => {
  sliderRef.current.slickPrev();
  };


  const ExternalButtons = ({ nextSlide, prevSlide }) => {
      return (
          <div>
          <button className="slick-btn" onClick={prevSlide}><FaAngleLeft /></button>
          <button className="slick-btn" onClick={nextSlide}><FaAngleRight /></button>
          </div>
      );
  }

  const settings = {
      speed: 200,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive:[
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1
          }
          },
          {
          breakpoint: 1332,
          settings: {
              slidesToShow: 4,
              slidesToScroll: 1
          }
          }

          
      ]
  };

  const isDark = useSelector((state)=>state.billaBookStore.isDark)

  return (
<div>
      <div className="trending-books-container my-4">
      <div className="flex flex-row justify-between items-center">
          <h1 className="slider-heading" style={{color: isDark ? "#f0f0f0":'#21313C'}}>{heading}</h1>
          <ExternalButtons nextSlide={nextSlide} prevSlide={prevSlide} />
      </div>
      <Slider  ref={sliderRef} {...settings}>
          {booksList.map(e=>(
                  <div className="trending-book-slide" key={e.id}>
                      <div className="overlay-container">
                      
                     
                           <Tooltip placement="topLeft" title={"Quick View"}>
                                        <button className="overlay-btn" onClick={()=>handleButtonClick(e)}><AiOutlineEye /></button>
                        </Tooltip>

                        <Tooltip placement="topLeft" title={"Favourite"}>
                        <button className="overlay-btn"><AiOutlineHeart /></button>
                        </Tooltip>
                      
                     
                      </div>
                      <div className="book-container">
                        <div className="stock-container">  {e.saleInfo.saleability === 'FOR_SALE' ? <p className="in-stock mt-0">In Stock</p> : <p className="out-of-stock mt-0">Out of Stock</p>}</div>
                          <img src={e.volumeInfo.imageLinks.smallThumbnail} alt={e.volumeInfo.title} />
                          <p className="slider-para" style={{color: isDark ? "#f0f0f0":'#21313C'}}>{e.volumeInfo.title}</p>
                       
            
                      </div>
                      <div>
                      </div>
              </div>
          ))}
      </Slider>
      
      </div>
      <MyModal isOpen={isModalOpen} onClose={()=>{setIsModalOpen(false)}} bookDetails={bookDetails}/>
          {/* {showComponent && <ModalComponent handleButtonClick={handleButtonClick} bookDetails={bookDetails}/>} */}
        </div>
        
  )


}


export default SlickSlider