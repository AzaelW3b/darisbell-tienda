import { useState } from "react"
import Video from "../assets/bg_video.mp4"

const Header = () => {
    const [menuAbierto, setMenuAbierto] = useState(false)

    const abrirMenu = () => {
        setMenuAbierto(true)
    };

    const cerrarMenu = () => {
        setMenuAbierto(false)
    }

    return (
        <>
            <header className="encabezado">
                <div style={{ position: "fixed", width: "100%" }} className="contenedor-navegacion">
                    <div className="contenido-navegacion contenedor">
                        <div className="logo">
                            <h2>{"Anabella's"} <span className="verde">Sh</span><span className="op">op</span></h2>
                        </div>
                        <nav className={`navegacion ${menuAbierto ? '' : 'ocultar'}`}>
                            <a href="#">Inicio</a>
                            <a href="#nosotros">Sobre Nosotros</a>
                            <a href="#menu">Menú</a>
                            <a href="#tienda">Tienda</a>
                            <a href="#contacto">Contacto</a>
                            <button className="btn-cerrar" onClick={cerrarMenu}>x</button>
                        </nav>
                        <div className="hamburguesa" onClick={abrirMenu}>
                            <span></span><span></span><span></span>
                        </div>

                    </div>
                </div>
                <div className="contenido-header">
                    <div className="contenedor-encabezado">
                        <div className="texto-encabezado">
                            <h2>Visítanos!</h2>
                            <a href="#" className="btn bordes">Ir de compras</a>
                        </div>
                        <video autoPlay loop muted>
                            <source src={Video} />
                        </video>
                    </div>
                </div>
            </header>
            {menuAbierto && (
                <div className="overlay" onClick={cerrarMenu}></div>
            )}
        </>
    );
}

export default Header