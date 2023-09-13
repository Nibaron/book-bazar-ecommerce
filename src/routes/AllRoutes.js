import { Routes, Route} from "react-router-dom";
import {HomePage,ProductsList, PageNotFound} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
              <Route path="/" element={ <HomePage title="Home"/> } />
              <Route path="/products" element={ <ProductsList title="Products"/> } />
              <Route path="*" element={ <PageNotFound title="Page Not Found"/> } />
        </Routes>
    </div>
  )
}