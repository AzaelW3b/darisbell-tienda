import Imagen from "../assets/img/chef.jpg"

const Seccion = () => {
    return (
        <>
            <section className="chef contenedor" id="tienda">
                <h2>Un poco sobre nosotros</h2>
                <div className="contenido-chef">
                    <div className="texto-chef">
                        <h3>La exelencia está en la diversidad y el modo de progresar
                            es conocer y comparar las diversidades de productos, culturas y
                            técnicas
                        </h3>
                        <p>En el corazón de la ciudad, se alza un refugio de estilo y alegría: nuestra tienda es mucho más que un lugar de compras, es un destino donde la moda se fusiona con el encanto, y donde la belleza se encuentra con la diversión en cada esquina.

                            Desde elegantes conjuntos hasta los más vibrantes productos de maquillaje y cuidado de la piel, nuestro catálogo cuidadosamente seleccionado ofrece una amplia gama de opciones para que puedas expresar tu personalidad con confianza y estilo.

                            Pero no nos detenemos ahí. Con una sección dedicada a los más pequeños, nos enorgullece ofrecer una experiencia de compra inclusiva y divertida para toda la familia. Desde juguetes educativos hasta accesorios llenos de color, cada artículo ha sido elegido con cuidado para inspirar la imaginación y fomentar el juego activo.

                            Nuestro equipo está aquí para ayudarte en cada paso del camino, desde encontrar el atuendo perfecto hasta descubrir los mejores productos de belleza para realzar tu belleza natural. Así que ven y únete a nosotros en este emocionante viaje de estilo, belleza y diversión. ¡Te esperamos con los brazos abiertos en nuestro mundo de moda y alegría!

                            .</p>
                        <a href="#" className="btn btn-verde">Leer Bíografia</a>
                    </div>
                    <div className="imagen-chef">
                        <img src={Imagen} alt="fotografia del chef"/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Seccion