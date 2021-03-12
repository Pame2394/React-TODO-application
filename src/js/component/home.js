import React, { useState } from "react";
import { Button } from "bootstrap";
import { useEffect } from "react/cjs/react.production.min";
//create your first component
export function Home() {
	const [lista, setLista] = useState([]);
	const [tarea, setTarea] = useState("");
	const [contador, setContador] = useState(0);
	const agregar = () => {
		if (tarea == "") {
			alert("Digite la tarea que desea ingresar");
		} else {
			setLista([...lista, tarea]);
			//alert("Su tarea ha sido ingresada");
			setTarea("");
			setContador(contador + 1);
		}
	};
	const eliminar = i => {
		const nuevaTarea = [...lista];
		nuevaTarea.splice(i, 1);
		setLista(nuevaTarea);
		setContador(contador - 1);
		console.log(typeof contador);
	};
	return (
		<div
			className="text-center mt-5"
			style={{
				background: "#27f0e7",
				width: "30rem",
				border: "solid",
				margin: "auto",
				color: "white"
			}}>
			<input
				placeholder="Ingrese su tarea"
				onChange={e => setTarea(e.target.value)}
				value={tarea}></input>
			<button
				style={{
					background: "black",
					color: "white"
				}}
				onClick={agregar}>
				Agregar tarea
			</button>
			{lista.map((element, i) => {
				return (
					<li key={i}>
						{element}
						<button className="remove" onClick={() => eliminar(i)}>
							❎
						</button>
					</li>
				);
			})}
			<div style={{ background: "#fef99a", width: "4cm" }}>
				{contador} <strong>Total de tareas</strong>
			</div>
		</div>
	);
}
