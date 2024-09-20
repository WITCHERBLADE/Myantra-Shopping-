import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem"

function Shoes(){
  const items = useSelector(store =>store.items);

const newhome = items.filter((item)=>{
return (item.id>25 && item.id<=31);
});

console.log(items);
  return(
    <main>
   <div className="items-container">
   {newhome.map((item)=>{
return <HomeItem key={item.id} item={item}/>
   })}
    
    </div>
</main>
  )
}

export default Shoes;