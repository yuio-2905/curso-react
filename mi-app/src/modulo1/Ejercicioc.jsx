//crear un componente layout para una aplicacion
import './ejercicioc.css'
const Ejercicioc = ({children})=>{
    return (
        <>
            <header>
                <h1 className="app_name">Mi App</h1>
                <nav>
                    <a href="#">menu1</a>
                    <a href="#">menu2</a>
                    <a href="#">menu3</a>
                    <a href="#">menu4</a>
                </nav>
            </header>
            <div className="mybody">
                {children}
            </div>
        </>
    );
};
export default Ejercicioc