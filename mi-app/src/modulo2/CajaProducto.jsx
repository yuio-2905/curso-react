//componente para cada producto
import "./cajaproducto.css";

const CajaProducto = ({
	producto,
	seleccionador = null,
	eliminador = null,
	listado = true,
}) => {
	const handleClick = (evt) => {
		evt.preventDefault();
		if (listado) {
			if (seleccionador && seleccionador != null) seleccionador(producto);
		} else {
			if (eliminador && eliminador != null) eliminador(producto);
		}
	};
	return (
		<div className="caja_producto">
			<h1>{producto.nombre}</h1>
			<p>Precio: {producto.precio}</p>
			<button onClick={handleClick}>
				{listado ? "Agregar al Carrito" : "Quitar del Carrito"}
			</button>
		</div>
	);
};
export default CajaProducto;
