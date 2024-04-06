import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import styles from "./Layout.module.css";



function LayOut({children}) {
   const state=useSelector((store)=>store.cart)
  return (
   <>
   <header className={styles.header}>
    <Link to="/products">BotoShop</Link>
    <Link to="/checkout">
    <div>
    <PiShoppingCartSimpleBold/>
    { !!state.itemsCounter &&
    <span>{state.itemsCounter}</span>
     }
  </div>
    </Link>
    
   </header>
   {children}
   <footer className={styles.footer}>
    <p>Develop By zohrehGoodarzi with ❤ </p>
   </footer>
   </>
  )
}

export default LayOut;