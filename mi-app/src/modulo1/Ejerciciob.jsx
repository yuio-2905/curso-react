//crear un componnente producto que muestre
// nombre, precio, descripcion, imagen y un boton de comprar
import img_producto from "../assets/images.jpg";
import "./ejerciciob.css";
const Ejerciciob = ({ nombre, precio, descripcion }) => {
  return (
    <div className="contenedor">
      <img src={img_producto} alt="imagen del producto" />
      <h1>Nombre: {nombre}</h1>
      <h3>Precio antes de impuestos: {precio}</h3>
      <h3>Precio despues de impuestos: {precio + precio * 0.18}</h3>
      {precio > 7 ? (
        <span className="caro">Caro</span>
      ) : (
        <span className="barato">barato</span>
      )}
      <p>{descripcion}</p>
      <button>Comprar</button>
    </div>
  );
};
export default Ejerciciob;
