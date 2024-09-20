import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem"

function Women(){
  const items = useSelector(store =>store.items);

  const newomen = items.filter((item)=>{
    return (item.id>14 && item.id<=20);
    });

return(
  <main>
  <div className="items-container">
  {newomen.map((item)=>{
return <HomeItem key={item.id} item={item}/>
  })}
   
   </div>
</main>
)




  }

export default Women;