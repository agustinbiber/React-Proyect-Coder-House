import {useState} from 'react';
import "./ItemCount.css";
import React from "react";

function ItemCount(stock) {

	const [contador, setContador] = useState(0);

	const handleRest = () => {
			setContador(contador - 1);
		};

	const handleSum = () => {
		setContador(contador + 1);
	};

	
	return (
		<div className='item-count'>
			<p> Stock: {stock.stock}</p>
            <button className='item-button'>Agregar al carro</button>
            <button className='item-button' disabled={contador === 0 ? true : false} onClick={handleRest}> - </button>
			<p> {contador} </p>
			<button className='item-button' disabled={contador === stock.stock ? true : false} onClick={handleSum}> + </button>
		</div>
	);
}

export default ItemCount;