import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null,
}
const filterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const [state, dispatch] = useReducer(filterReducer, filterInitialState);

    function initialProductList(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        });
    }


    const value = {
        productList: state.productList, 
        initialProductList
    }
    return (
        <filterContext.Provider value={value}>
            {children}
        </filterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(filterContext);
    return context;
}
