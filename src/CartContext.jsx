import {createContext, useState} from "react";


export const CartContext = createContext({
    items: [],
    setItems: () => {},
});

const ProductContextProvider = ({ children }) => {

    const [items, setItems] = useState([]);

    return (
        <CartContext value={{
            items,
            setItems,
        }}>
            {children}
        </CartContext>
    );

};

export default ProductContextProvider;