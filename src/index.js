import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import ProductsProvider from './context/products-context'


// ReactDOM.render(
//   <ProductsProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ProductsProvider>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ProductsProvider >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductsProvider>);