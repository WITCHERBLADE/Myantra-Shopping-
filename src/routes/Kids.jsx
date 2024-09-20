import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem"

function Kids(){
  const items = useSelector(store =>store.items);

  const newkids = items.filter((item)=>{
    return (item.id>20 && item.id<=25);
    });

return(
  <main>
  <div className="items-container">
  {newkids.map((item)=>{
return <HomeItem key={item.id} item={item}/>
  })}
   
   </div>
</main>
)


}
export default Kids;