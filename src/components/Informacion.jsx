const Informacion = () => {
    return (
        <>
            <div className="pie-pagina ">
                <div className="contenedor-piepagina contenedor">
                    <div className="info">
                        <h3>Dirección</h3>
                        <p>Ciudad Ojeda, C.C.Ojeda Mall</p>
                    </div>
                    <div className="info">
                        <h3>Días de ofertas</h3>
                        <p>Sabados y Jueves 7am - 11pm</p>
                    </div>
                    <div className="info">
                        <h3>Horarios</h3>
                        <p>Lunes - Sabados 7am - 11pm</p>
                        <div className="redes-sociales redes-pie">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-twitter-square"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </div>
                    <div className="info">
                        <h3>Noticias</h3>
                        <p>suscribete para recibir más noticias</p>
                        <input type="email" placeholder="Tu correo" />
                        <input type="submit" className="btn btn-verde" value="Suscribirse" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Informacion