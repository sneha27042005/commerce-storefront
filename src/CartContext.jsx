import {createContext, useEffect, useState} from "react";


export const CartContext = createContext({
    items: [],
    setItems: () => {},
});

const ProductContextProvider = ({ children }) => {

    const [items, setItems] = useState([]);

    const updateCart = (items) => {
        localStorage.setItem("cart", JSON.stringify(items));
        setItems(items);
    }

    useEffect(() => {
        const getDataFromLocalStorage = () => {
            const itemsFromLocalStorage = localStorage.getItem('cart');
            if (itemsFromLocalStorage) {
                setItems(JSON.parse(itemsFromLocalStorage));
            }
        }

        // Call it once on component mount
        getDataFromLocalStorage();

        // Set up the event listener for changes from other tabs/windows
        window.addEventListener('storage', getDataFromLocalStorage)

        return () => {
            window.removeEventListener('storage', getDataFromLocalStorage)
        }
    }, [])

    return (
        <CartContext.Provider value={{
            items,
            setItems: updateCart,
        }}>
            {children}
        </CartContext.Provider>
    );

};

export default ProductContextProvider;