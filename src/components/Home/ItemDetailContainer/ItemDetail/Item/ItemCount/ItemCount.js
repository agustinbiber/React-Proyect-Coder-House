import {useContext, useState} from 'react';
import "./ItemCount.css";
import React from "react";
import { CartContext } from '../../../../../../context/CartContext';
import { Link } from 'react-router-dom';

function ItemCount(item) {

	const [contador, setContador] = useState(0);
	const { addToCart } = useContext(CartContext);

	const handleRest = () => {
			setContador(contador - 1);
		};

	const handleSum = () => {
		setContador(contador + 1);
	};

	const addItemToCart = () => {
		const itemToAdd = {id: item.id, name: item.name, price: item.price, quantity: contador};
		// addToCart({name: "hola", id: 1222, price: 20}); FUNCIONA
		addToCart(itemToAdd);
		alert("Added item with Id:" + itemToAdd.id + " " + itemToAdd.name + " " + itemToAdd.price);
	}
	
	return (
		<div className='item-count'>
			<p> Stock: {item.stock}</p>
            <Link to={"/"}><button className='item-button' disabled={contador < 1 ? true : false} onClick={addItemToCart}>Agregar al carro</button></Link>
            <button className='item-button' disabled={contador === 0 ? true : false} onClick={handleRest}> - </button>
			<p> {contador} </p>
			<button className='item-button' disabled={contador === item.stock ? true : false} onClick={handleSum}> + </button>
		</div>
	);
}

export default ItemCount;