import { useState } from "react";
import CajaProducto from "./CajaProducto";
import "./ejercicio5.css";

//crear un carrito de compras
const Ejercicio5 = () => {
	const [productos, setProductos] = useState([
		{ id: 1, nombre: "producto 1", precio: 12.5 },
		{ id: 2, nombre: "producto 2", precio: 2.5 },
		{ id: 3, nombre: "producto 3", precio: 10.5 },
		{ id: 4, nombre: "producto 4", precio: 6.5 },
		{ id: 5, nombre: "producto 5", precio: 1 },
		{ id: 6, nombre: "producto 6", precio: 12 },
		{ id: 7, nombre: "producto 7", precio: 15 },
	]);
	const [carrito, setCarrito] = useState([]);
	const handleSelecionador = (producto) => {
		console.info("mandando la seleccion de productos");
		const nuevos_productos = productos.filter((p) => p.id !== producto.id);
		const nuevo_carrito = [producto, ...carrito];
		setProductos(nuevos_productos);
		setCarrito(nuevo_carrito);
	};
	const handleEliminador = (producto) => {
		const nuevos_productos = [...productos, producto];
		const nuevo_carrito = carrito.filter((p) => p.id !== producto.id);
		setProductos(nuevos_productos);
		setCarrito(nuevo_carrito);
	};
	return (
		<div className="contenedor_lista">
			<div className="lista">
				<h2>Lista de productos</h2>
				{productos.map((producto) => (
					<CajaProducto
						key={producto.id}
						producto={producto}
						seleccionador={handleSelecionador}
					/>
				))}
			</div>
			<div className="lista">
				<h2>Carrito de compras</h2>
				{carrito.map((producto) => (
					<CajaProducto
						key={producto.id}
						producto={producto}
						listado={false}
						eliminador={handleEliminador}
					/>
				))}
			</div>
		</div>
	);
};
export default Ejercicio5;
