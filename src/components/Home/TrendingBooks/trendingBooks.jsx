import { useEffect, useState} from "react";
import SlickSlider from "../../SlickSlider/slider";
import axios from "axios";
import { LoadingView } from "../../../Utilities/utilities";



const TrendingBooks=()=>{

    const [TrendingBooksList,setTrendingBooksList] = useState([])
    const [loading,setLoading] = useState(false)


    const fetchBookData=async ()=>{
        setLoading(true)
        try{
            const booksData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=modi&filter=paid-ebooks&orderBy=newest&key=${import.meta.env.VITE_API_KEY}`)
            setTrendingBooksList(booksData.data.items)
            setLoading(false)
        }
        catch(error){
            console.log('error')
        }   
    }


    useEffect(()=>{fetchBookData()},[])

    return(
        <div>


            {loading ? <LoadingView /> : 
            TrendingBooksList.length > 0 ? <SlickSlider booksList={TrendingBooksList}  heading='Top Trending Books' /> : ''}
            
        </div>

    )
}




export default TrendingBooks