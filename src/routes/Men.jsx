import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem"

function Men(){
  const items = useSelector(store =>store.items);

  const newmen = items.filter((item)=>{
  return (item.id>8 && item.id<=14);
  });
  
  console.log(items);
    return(
      <main>
     <div className="items-container">
     {newmen.map((item)=>{
  return <HomeItem key={item.id} item={item}/>
     })}
      
      </div>
  </main>
    )
}

export default Men;