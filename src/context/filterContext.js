import { createContext, useContext } from "react";

const filterInitialState = {
    productList: [],
    onlyInStock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null,
}

const filterContext = createContext(filterInitialState);

export const FilterProvider = ({children}) => {
    const value = {
        productList: [1,2,3]
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