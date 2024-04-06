import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

import { shortenText } from "../helper/helper";
import  {removeItem, decrease, increase } from "../features/cart/cartSlice";
import styles from "./BasketCart.module.css";


function BasketCart({ data}) {
  const { image, title, quantity, price } = data;

  const dispatch=useDispatch();
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />

      <p>{shortenText(title)}</p>
      
      <span className={styles.price}>{price}$ </span>

      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}

        {quantity > 1 && (
          <button onClick={() => dispatch(decrease(data))}> - </button>
        )}

        <span>{quantity}</span>

        <button onClick={() => dispatch(increase(data))}> + </button>
      </div>
    </div>
  );
}

export default BasketCart;
