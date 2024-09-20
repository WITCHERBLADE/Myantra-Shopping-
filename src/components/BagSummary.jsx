import { useSelector } from "react-redux";


function BagSummary(){

const bag = useSelector(state => state.bag);

const FEES = 99;
let totalMRP = 0;
let totalDiscount = 0;

const items =  useSelector(state => state.items);


const finalItems = items.filter(item=>{
 const itemFound = bag.indexOf(item.id);
 return itemFound >= 0 ;
});

finalItems.forEach((bagitem)=>{
  totalMRP += bagitem.original_price;
  totalDiscount += bagitem.original_price - bagitem.current_price;

})

let finalPayment = totalMRP - totalDiscount + FEES;



function handleOrder(){
alert("Order is Placed");
}

  return(
    <div className="bag-summary">
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({bag.length} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹{FEES}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni" onClick={handleOrder}>PLACE ORDER</div>
  </button>
  </div>

  )
}

export default BagSummary;