import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../redux/bookStoreRedux";

const DisplayQuantity =(props)=>{
    const {bookData} = props

    const {quantity,id} = bookData


    const dispatch = useDispatch();

    const onClickIncrement=()=>{
        dispatch(incrementQuantity({id}))
    }

    const onClickDecrement=()=>{
        const newQuantity = quantity - 1
        if(newQuantity === 0){
            console.log('remove')
            dispatch(removeFromCart({id}))
        }
        else{
            dispatch(decrementQuantity({id}))
        }
    }


    return(
        <div className="flex flex-row items-center">
                  <button className="quantity-btn"><CiCircleMinus onClick={()=>onClickDecrement()}/></button>
                  <p className="quantity">{quantity}</p>
                  <button className="quantity-btn" onClick={()=>onClickIncrement()}><CiCirclePlus /></button>
        </div>
    )

    }
export default DisplayQuantity