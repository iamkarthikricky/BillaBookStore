import { useEffect, useState} from "react";
import SlickSlider from "../../SlickSlider/slider";
import axios from "axios";
import { LoadingView } from "../../../Utilities/utilities";





const Magazines=()=>{

    const [MagazinesList,setMagazinesList] = useState([])
    const [loading,setLoading] = useState(false)

    const fetchMagazineData=async ()=>{
        setLoading(true)
        try{
            const magazinesData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=magazines&printType=books&filter=partial&key=${import.meta.env.VITE_API_KEY}`)
            setMagazinesList(magazinesData.data.items)
            setLoading(false)
        }
        catch(error){
            console.log('error')
        }   
    }

    useEffect(()=>{fetchMagazineData()},[])


    return(
        <div>
            {loading ? <LoadingView /> : 
            MagazinesList.length > 0 ? <SlickSlider booksList={MagazinesList}  heading='Top Selling Magazines' /> : ''}
            
        </div>

    )
}



export default Magazines