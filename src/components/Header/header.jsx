import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";

import { Link,useLocation} from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux/bookStoreRedux";

import "./header.css";

import {HeaderMainContainer,BookAuthor, BookTitle, HeaderUlList, IconsMainContainer } from "./headerStyle";
import ModalComponent from "../Modal/modal";

const RenderSearchData = (props) => {
  const { searchResult, isDark,handleModal} = props;
  const {volumeInfo} = searchResult;
  const { title, imageLinks,authors } = volumeInfo;

  return (
    <>
      <li className="list-item" onClick={()=>handleModal(searchResult,title)}>
        <div>
          <img src={imageLinks.smallThumbnail} className="small-thumbnail" alt={title} />
        </div>
        <div>
          <BookTitle $isDark={isDark}>{title}</BookTitle>
          <BookAuthor $isDark={isDark}>{authors}</BookAuthor>
        </div>
      </li>
  
    </>
  );
};


const UserInputComponent=(props)=>{

  const{isDark} = props
  const [userInput, setUserInput] = useState("");
  const [booksList, setBooksList] = useState([]);
  const [modalBooksData,setModalBooksData]=useState('');
  const [showComponent, setShowComponent] = useState(false);

  const UpdateUserInput=(event)=>{
    setUserInput(event.target.value)
  }

  const Location = useLocation()
  
  const handleModal = (e,title) => {
    setShowComponent(!showComponent);
    setModalBooksData(e);
    if(title !== undefined){
    document.getElementById('userInput').value = title;}
  };



  useEffect(() => {
    if (userInput !== '') {
      const fetchData = async () => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${userInput}`;
        const options = {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        };
        const response = await fetch(url, options);
        if (response.ok) {
          const fetchedData = await response.json();
          const updatedFetchedData = fetchedData.items.map((e) => (
            e.volumeInfo.imageLinks === undefined ? {...e,volumeInfo:{...e.volumeInfo,imageLinks:{smallThumbnail:'https://res.cloudinary.com/dlwydxzdi/image/upload/v1718362076/BookStore/Screenshot_2024-06-14_161048_3_y8ifxu.png'}}} : e
          ));
          setBooksList(updatedFetchedData);
        } else {
          console.log("error");
        }
      };
      fetchData();
    }
    else{
      setBooksList([])
    }
  }, [userInput]);

  return(
    <div className="search-bar-main-container"  >
        {Location.pathname !=='/cart' ? (
                <div>
                    <div className="search-container">
                      <input
                        id="userInput"
                        type="search"
                        className="search-input"
                        placeholder="Search by Book Title"
                        onChange={UpdateUserInput}
                        onMouseEnter={UpdateUserInput}
                      />
                      <div className="search-icon">
                        <IoSearchOutline />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="search-results-container">
                        {booksList.length <= 0 ? (
                          ""
                        ) : (
                          <HeaderUlList $isDark={isDark}>
                            {booksList.map((e) => (
                              <RenderSearchData key={e.id} searchResult={e} handleModal={handleModal} isDark={isDark} />
                            ))}
                          </HeaderUlList>
                        )}
                      </div>
                    </div>
                  </div>):''}
    </div>
  )
}



const Header = () => {
        const isDark = useSelector((state)=>state.billaBookStore.isDark)
        const cartList = useSelector((state)=>state.billaBookStore.cartList)
        const dispatch = useDispatch();
        return (
          <HeaderMainContainer $isDark={isDark}>
            <div className="container mx-auto">
             
                <div className="flex flex-row justify-between items-center">
                <Link to='/'>
                  <img src="https://res.cloudinary.com/dlwydxzdi/image/upload/v1718261757/BookStore/Billa_Book_Store-removebg-preview_1_zcokcc.png" alt="company-logo" className="website-logo" />
                </Link>  

                <div className="hidden lg:block">
                    <UserInputComponent isDark={isDark}/>
                </div>

                  <IconsMainContainer $isDark={isDark}>
                    <button className="theme-btn" onClick={()=>dispatch(toggleDarkMode())}>
                      {isDark ? (<MdLightMode className="header-icon" />) : (<MdDarkMode className="header-icon" />)}
                    </button>
                    <div className="icon-container">
                      <IoIosHeartEmpty className="header-icon" />
                      <button className="icon-btn">5</button>
                    </div>
                    <div className="icon-container">
                      <FaUser className="header-icon" />
                    </div>
                    <div className="icon-container">
                    <Link to='/cart' style={{color:'inherit'}}>
                      <FiShoppingBag className="header-icon" />
                      {cartList.length>0 ? <button className="icon-btn">{cartList.length}</button> : ''}
                      </Link>
                    </div>
                  </IconsMainContainer>
                </div>
                <div className="lg:hidden">
                    <UserInputComponent isDark={isDark}/>
                </div>
            </div>
          </HeaderMainContainer>
        )
};

export default Header;
