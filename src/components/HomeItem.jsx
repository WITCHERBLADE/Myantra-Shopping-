import {useDispatch, useSelector} from "react-redux";
import { bagActions } from "../store/bagSlice";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const HomeItem = ({item})=>{


 const bag = useSelector(state => state.bag);
const dispatch = useDispatch();

const element = bag.indexOf(item.id) >=0;

function handleRemoveItem(){
  dispatch(bagActions.RemoveFromBag(item.id));
}

  function handleclick(){
    dispatch(bagActions.AddtoBag(item.id)); 
  }
  return(
    <div className="item-container">
    <img className="item-image" src={item.image} alt="item image" style={{objectFit:"cover"}}/>
    <div className="rating">
        {/* {item.rating.stars} ⭐ | {item.rating.count} */}
    </div>
    <div className="company-name">{item.company}</div>
    <div className="item-name">{item.item_name}</div>
    <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
    </div>

  {!element ?  <button type="button" className="btn btn-add-bag btn-success" onClick={handleclick}><MdOutlineAddShoppingCart /> Add To Bag</button> :

 
<button type="button" className="btn btn-add-bag btn-danger" onClick={handleRemoveItem}><MdDeleteForever />Remove</button> }   
  </div>
  )
}

export default HomeItem;