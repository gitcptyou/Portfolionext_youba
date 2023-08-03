'use client'
import store from "@/store";
import { Children } from "react";
import { Provider } from "react-redux"

// Composant pour lier le store a l'application, il est utilise dans le layout principal
const StoreProvider = () => {
    return (
       <Provider store={store}>
   {Children}
       </Provider>
    );
}

export default StoreProvider;