import Nosotros1 from "../assets/img/nosotros1.jpg"
import Nosotros2 from "../assets/img/nosotros2.jpg"
import Nosotros3 from "../assets/img/nosotros3.jpg"

const Nosotros = () => {
    return (
        <>
            <div className="contenedor-nosotros contenedor" id="nosotros">
                <div className="texto-nosotros">
                    <p className="bienvenida">Bienvenido a!</p>
                    <h1>{"Anabella's "} Shop</h1>
                    <p>En {"Anabella's "} Shop nos emociona enormemente darles la bienvenida a nuestra tienda en línea, donde la
                        elegancia y la calidad se encuentran en cada producto. Somos más que una simple tienda, somos un destino
                        para aquellos que buscan artículos cuidadosamente seleccionados que reflejen su estilo único y
                        sofisticado. Desde moda hasta juguetes para nuestros niños, cada artículo que ofrecemos ha sido elegido
                        con esmero para brindarle una experiencia de compra inigualable. Nuestra pasión por la excelencia y el
                        servicio al cliente nos impulsa a superar sus expectativas en cada visita. ¡Disfrute explorando nuestra
                        colección y háganos parte de su estilo!
                    </p>
                    <a href="#" className="btn btn-rojo">Contactar</a>
                </div>
                <div className="imagenes-nosotros">
                    <div className="imagen1">
                        <img src={Nosotros1} alt="mujer comiendo pizza" />
                    </div>
                    <div className="imagenes2">
                        <img src={Nosotros2} alt="mujeres comiendo pizza" />
                        <img src={Nosotros3} alt="plato con pasta" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nosotros