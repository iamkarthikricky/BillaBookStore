
import Header from "../Header/header";
import EBooks from "./TrendingBooks/trendingBooks";
import "./home.css";

import { useSelector } from "react-redux";


import BestBooks from "./BestBooks/bestBooks";
import Magazines from "./Magazines/magazines";
import Footer from "../Footer/footer";



const Home=() => { 

  const isDark = useSelector((state)=>state.billaBookStore.isDark)

  return(
    <div className="home-main-container" style={{ backgroundColor: isDark ? "#000000" : "#ffffff" }}>
      <section className="home-section-container" style={{ backgroundColor: isDark ? "#000000" : "#ffffff" }}>
    <Header />
    <div className="container">
              <div className="row">
                <div className="col-12 gap-1.5">
                   <BestBooks />
    <Magazines />
    <EBooks /> 
   
                  </div>
                  </div>
   
    <br/> 
    </div>
    </section>
    <Footer /> 
  </div>
  )
}

export default Home;
