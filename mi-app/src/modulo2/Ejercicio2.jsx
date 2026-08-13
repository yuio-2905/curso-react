//manejar el evento sintetico de react
const Ejercicio2 = () => {
	const handleClick = (event) => {
		console.info(event.target);
		console.info(event.type);
		//window.alert("cuidado con el Click");
		const t = event.target;
		t.style.backgroundColor = "red";
	};
	return <button onClick={handleClick}>Presionar</button>;
};
export default Ejercicio2;
