//crear una fucnion que me seleccione un determinado producto
const Ejercicio3 = () => {
	const seleccionarProducto = (event,id, nombre, precio) => {
		console.info("producto seleccionado");
		console.info(event.target);
		console.info(id);
		console.info(nombre);
		console.info(precio);
		console.info(1.18 * precio);
	};
	return (
		<button onClick={(event) => selecionarProducto(event,25, "galleta oreo", 1.0)}>
			Seleccionar producto
		</button>
	);
};
export default Ejercicio3;
