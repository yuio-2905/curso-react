//crear un componente contador
import { useState } from "react";

const Ejercicio4 = () => {
	const [contador, setContador] = useState(0);
	const add = () => {
		setContador(contador + 1);
	};
	const rest = () => {
		setContador(contador - 1);
	};
	return (
		<>
			<p>Contador: {contador}</p>
			<button onClick={add}>+</button>
			<button onClick={rest}>-</button>
		</>
	);
};
export default Ejercicio4;
