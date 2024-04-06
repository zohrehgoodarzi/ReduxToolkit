import { useEffect, useState } from "react";
import Crd from "../Components/Crd";
import Loader from "../Components/Loader";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import { useSearchParams } from "react-router-dom";
import SearchBox from "../Components/SearchBox";
import Sidebar from "../Components/Sidebar";
import styles from "./ProductsPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";



function ProductsPage() {
  
  const dispatch=useDispatch();

  const {products,loading}=useSelector((store)=>store.product);

  const state=useSelector((store)=>store.product);
  
  console.log(products);
  console.log(state);
  
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();



  useEffect(()=>{
    dispatch(fetchProducts())
  },[]);

  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchParams));
  }, [products]);



  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />

      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loader />}
          {displayed.map((elem) => {
            return <Crd key={elem.id} data={elem} />;
          })}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductsPage;
