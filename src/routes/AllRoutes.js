import { Routes, Route} from "react-router-dom";
import {HomePage,Login, Register, ProductsList, ProductDetail, PageNotFound} from "../pages";
import {  } from "../pages/ProductDetail";


export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
              <Route path="/" element={ <HomePage title="Home Page"/> } />
              <Route path="products" element={ <ProductsList title="Explore eBooks"/> } />
              <Route path="products/:id" element={ <ProductDetail/> } />
              <Route path="login" element={ <Login /> } />
              <Route path="register" element={ <Register /> } />
              <Route path="*" element={ <PageNotFound title="Page Not Found"/> } />
        </Routes>
    </div>
  )
}