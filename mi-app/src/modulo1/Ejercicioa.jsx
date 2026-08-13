//vamos a crear un componente perfil que muestre: nombre, profesion, ciudad y una imagen
import img_perfil from "../assets/hahacat.jpg";
import "./ejercicioa.css";
const Ejercicioa = ({nombre,profesion="Profesion del usuario",ciudad="Ciudad del usuario"}) => {
  return (
    <div className="contenedor_perfil">
      <img className="perfil" src={img_perfil} alt="imagen del usuario" />
      <h1 className="texto nombre">{nombre}</h1>
      <h2 className="texto profesion">{profesion}</h2>
      <span className="texto">{ciudad}</span>
    </div>
  );
};

export default Ejercicioa;
