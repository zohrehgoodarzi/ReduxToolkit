import { createQueryObject } from "../helper/helper";
import { FaListUl } from "react-icons/fa";
import styles from "./Sidebar.module.css";
import { categoreis } from "../constant/list";

function Sidebar({ query,setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName != "LI") return;
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={styles.sidebar}>
      <div>
      <FaListUl/>
        <p>Categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {categoreis.map((item)=>{
          return(
          <li key={item.id} className={item.type.toLowerCase()===query.category?styles.selected :null}
          >{item.type}</li>)
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
