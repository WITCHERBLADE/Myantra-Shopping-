import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem"

function Beauty(){
  const items = useSelector(store =>store.items);

  const newbeauty = items.filter((item)=>{
  return (item.id>31 && item.id<=37);
  });
  
  console.log(items);
    return(
      <main>
     <div className="items-container">
     {newbeauty.map((item)=>{
  return <HomeItem key={item.id} item={item}/>
     })}
      
      </div>
  </main>
    )
}

export default Beauty;