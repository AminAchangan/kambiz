// import Product from "./components/Product/Product";
// import React, { useState } from 'react';
import React, { useState } from "react";

import ProductList from "./components/ProductList/ProductList";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/hoc/Wrapper";
import CounterProvider, {
  CounterContext,
} from "./components/Context/CounterProvider";
import CounterOne from "./components/Context/CounterOne";
import CounterRed from "./components/Reducer/CountReducer";

export const UserContext = React.createContext();
export const websiteContex = React.createContext();

const App = () => {
  const [products, setProducts] = useState([
    { title: "React.js", price: "99$", id: 1, quantity: 1 },
    { title: "Node.js", price: "89$", id: 2, quantity: 2 },
    { title: "JavaScript", price: "79$", id: 3, quantity: 3 },
  ]);

  const removeHandler = (id) => {
    const filteredProduct = products.filter((p) => p.id !== id);
    setProducts(filteredProduct);
  };

  const incrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    product.quantity++;

    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };

    if (product.quantity === 1) {
      const filteredProduct = products.filter((p) => p.id !== id);
      setProducts(filteredProduct);
    } else {
      const updatedProducts = [...products];
      product.quantity--;
      updatedProducts[index] = product;
      setProducts(updatedProducts);
    }
  };

  const changeHandler = (event, id) => {
    const index = products.findIndex((item) => item.id === id);
    //3. clone the selected index and update the quantity :
    const product = { ...products[index] };
    product.title = event.target.value;

    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };
  return (
    <>
      {/* <CounterProvider>
        <p>wellcome to context</p>
        <CounterOne />
      </CounterProvider> */}
      <NavBar totalItems={products.filter((p) => p.quantity > 0).length} />
      <ProductList
        products={products}
        onRemove={removeHandler}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
        onChange={changeHandler}
      />
    </>
  );
};

export default Wrapper(App, "container");

// // const App = () => {
// //     return (
// //         <div className="container" id="title">
// //             <h1>shopping App</h1>
// //             <Product name="React.js" price="99$" />
// //             <Product name="node.js" price="89$" />
// //             <Product name="JavaScript" price="79$">
// //                 <p>discount is 15%</p>
// //             </Product>
// //         </div>
// //     )
// // }

// // export default App;
// const App = () => {
//     const [products, setProducts] = useState([
//         { title: "React.js", price: "89$", id: 1 },
//         { title: "Node.js", price: "79$", id: 2 },
//         { title: "JavaScript", price: "69$", id: 3 }
//     ]);
//     const clickHandler = () => {
//         setProducts([
//             { title: "React.js", price: "79$", id: 1 },
//             { title: "Node.js", price: "69$", id: 2 },
//             { title: "JavaScript", price: "59$", id: 3 }
//         ])
//     };
//     return (
//         <div className="container" id="title">
//             <h1>shopping App</h1>
//             {products.map((product) => {
//                 return <Product name={product.title} price={product.price} key={product.id} />;
//             })}
//             <button onClick={clickHandler}>change price</button>
//         </div>
//     );
// }

// export default App;
// function App () {
//     return (
//         <div className="App">
//             <Product />
//         </div>
//     );
// }

// export default App;
