import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import {useSelector} from "react-redux";
import { DEFAULT_ITEMS } from "../components/items";

const Bag=()=>{
 const items =  useSelector(state => state.items);
 const bagItem = useSelector(state => state.bag);

const finalItems = items.filter(item=>{
  const itemFound = bagItem.indexOf(item.id);
  return itemFound >= 0 ;
})


  return(
    


    <main>
    <div className="bag-page">
    <div className="bag-items-container">
    {finalItems.map(item =>{
     return <BagItem key={item.id} item={item}/>
    })}
    </div>
      
      <BagSummary />
    

    </div>
  </main>


  
  )
}


export default Bag;