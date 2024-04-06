import styles from "./CheckOutEmpty.module.css";

function CheckOutEmpty() {
  return (
    <div className={styles.container}>

        <p> Unfortunately, your shopping cart is Empty!!!!!! :| </p>

        <div>

        <img src="https://tiktarh.com/wp-content/uploads/2022/02/Cptvct1001225www.tiktarh.com_.jpg" alt={"EmptyBasket"}/>

        </div> 
    </div>
  )
}

export default CheckOutEmpty;