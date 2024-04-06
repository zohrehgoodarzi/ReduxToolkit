import BasketCart from "../Components/BasketCart";
import CheckOutEmpty from "../Components/CheckOutEmpty";
//import {useCart} from "../Context/CartContext";
import BasketSidebar from "../Components/BasketSidebar";
import styles from "./CheckOutPage.module.css";
import { useDispatch, useSelector } from "react-redux";


function CheckOutPage() {

  const state=useSelector((store)=>store.cart);

  const dispatch=useDispatch();


    if(!state.itemsCounter){
      return <CheckOutEmpty/>
    }
    
  return (
    
    <div className={styles.container}>
      <BasketSidebar state={state} />
      <div className={styles.products}>
        {state.selectedItems.map((product)=>(
          <BasketCart key={product.id} data={product} />
        ))}
      </div>
    </div>
  )
}

export default CheckOutPage