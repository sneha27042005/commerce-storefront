import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    removeAllOfItem: () => {}, // Added to context definition
});

const ProductContextProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const updateItems = (update) => {
        localStorage.setItem("cart", JSON.stringify(update));
        setItems(update);
    }

    // Added removeAllOfItem function
    const removeAllOfItem = (id) => {
        if(items && items.length > 0){
            const updatedItems = items.filter(item => item.id !== id);
            updateItems(updatedItems);
        }
    }

    const addItemToCart = (item) => {
        if(items && items.length > 0){
            if(items.find((i) => i.id === item.id)){
                updateItems([
                    ...items.map((i) => {
                        if(i.id === item.id){
                            return {
                                ...i,
                                quantity: (i.quantity || 1) + 1,
                            }
                        }
                        return i;
                    }),
                ]);
                return;
            }
            updateItems([
                ...items,
                {
                    ...item,
                    quantity: 1,
                },
            ])
            return;
        }
        updateItems([
            {
                ...item,
                quantity: 1,
            }
        ]);
    }

    const removeItemFromCart = (id) => {
        if(items && items.length > 0){
            if(items.find((i) => i.id === id)){
                const updatedItems = items.map((i) => {
                    if(i.id === id){
                        return {
                            ...i,
                            quantity: (i.quantity || 1) - 1,
                        }
                    }
                    return i;
                }).filter((i) => i.quantity > 0);
                updateItems(updatedItems);
            }
        }
    }

    useEffect(() => {
        const getDataFromLocalStorage = () => {
            const itemsFromLocalStorage = localStorage.getItem('cart');
            if (itemsFromLocalStorage) {
                setItems(JSON.parse(itemsFromLocalStorage));
            }
        }

        getDataFromLocalStorage();
        window.addEventListener('storage', getDataFromLocalStorage)

        return () => {
            window.removeEventListener('storage', getDataFromLocalStorage)
        }
    }, [])

    return (
        <CartContext.Provider value={{
            items,
            addItemToCart,
            removeItemFromCart,
            removeAllOfItem, // Added to context provider
        }}>
            {children}
        </CartContext.Provider>
    );
};

export default ProductContextProvider;