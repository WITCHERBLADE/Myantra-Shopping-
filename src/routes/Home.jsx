import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem"
import HomePhoto from "../components/HomePhoto";

function Home(){
const items = useSelector(store =>store.items);

const newhome = items.filter((item)=>{
return item.id<=8;
});

console.log(items);

  return(
    <>
    {/* <HomePhoto /> */}
    <main>
   <div className="items-container">
   
   {newhome.map((item)=>{
return <HomeItem key={item.id} item={item}/>
   })}
    
    </div>
</main>
</>
  )
}

export default Home;