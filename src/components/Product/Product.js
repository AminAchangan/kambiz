import styles from './product.module.css';
import { BiTrash } from "react-icons/bi";
import React, { useContext, useEffect } from 'react';
const Product = ({ product, onChange, click, onDecrement, onDelete, onIncrement }) => {
    console.log("Product.js render");

    useEffect(() => {
        console.log("Product.js useEffect");
    }, [])

    return (
        <div className={styles.product} onClick={click}>
            <p>product name : {product.title}</p>
            <p>product price : {product.price}</p>
            <span className={styles.value}>{product.quantity}</span>

            <input type='text' className={styles.input} onChange={onChange} value={product.title} />

            <button className={`${styles.button} ${product.quantity === 1 && styles.remove
                }`} onClick={onDecrement}>
                {product.quantity > 1 ? "-" : <BiTrash />}
            </button>

            <button className={`${styles.button} ${styles.inc}`} onClick={onIncrement} >+</button>
            <button className={styles.button} onClick={onDelete}>delete</button>
        </div>
    );
}

export default Product;