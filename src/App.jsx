import { Navigate, Route, Routes } from "react-router-dom";
import LayOut from "./layout/LayOut";
import ProductsPage from "./Pages/ProductsPage";
import DetailsPage from "./Pages/DetailsPage";
import CheckOutPage from "./Pages/CheckOutPage";
import PageNotFound from "./Pages/PageNotFound";




function App() {
  
  return (
   // <CartProvider>
   // <ProductsProvider>
      <LayOut>
    <Routes>
      <Route index element={<Navigate to="/products" replace />}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/products/:id" element={<DetailsPage/>}/>
      <Route path="/checkout" element={<CheckOutPage/>}/>
      <Route path="/*" element={<PageNotFound/>}/>
    </Routes>
    </LayOut>
   // </ProductsProvider>
   // </CartProvider>
  )
}

export default App;
