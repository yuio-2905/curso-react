//creando un componente para ver los eventos en react
const Ejercicio1 = () => {
	function press2() {
		console.info("presionaste el boton 2");
	}
	const press3 = () => {
		console.info("presionaste en el boton 3");
	};
	return (
		<>
			<button
				onClick={(event) => {
					console.info("presionaste en el boton");
					console.info(event);
				}}
			>
				Presionar1
			</button>
			<button onClick={press2}>Presionar2</button>
			<button onClick={press3}>Presionar3</button>
		</>
	);
};
export default Ejercicio1;