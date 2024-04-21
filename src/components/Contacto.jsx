import { useState } from "react"
import api from "../config/axios"
const Contacto = () => {
    const [contacto, setContacto] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        telefono: "",
        mensaje: ""
    })

    const { nombre, apellido, correo, telefono, mensaje } = contacto



    const onSubmitContacto = async (e) => {
        e.preventDefault()
        try {
            const { data } = await api.post('/api/correos/contacto', contacto)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="formulario-contacto contenedor" id="contacto">

                <div className="informacion-contacto">
                    <h3>Contactanos</h3>
                    <p><i className="fas fa-map-marker-alt"></i>Ciudad Ojeda, C.C.Ojeda Mall</p>
                    <p><i className="fas fa-envelope"></i>{" anabella'shop"}</p>
                    <p><i className="fas fa-phone-alt"></i>+58 (412)163-3393</p>
                    <div className="redes-sociales">
                        <i className="fab fa-facebook-square"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                </div>

                <form
                    className="formulario"
                    onSubmit={(e) => onSubmitContacto(e)}
                >
                    <div className="input-formulario">
                        <label >Nombre</label>
                        <input
                            name="nombre"
                            type="text"
                            placeholder="Pedro"
                            value={nombre}
                            onChange={(e) => setContacto({ ...contacto, [e.target.name]: e.target.value })}
                        />
                    </div>
                    <div className="input-formulario">
                        <label >Apellido</label>
                        <input
                            name="apellido"
                            type="text"
                            placeholder="Pedro"
                            value={apellido}
                            onChange={(e) => setContacto({ ...contacto, [e.target.name]: e.target.value })}
                        />
                    </div>
                    <div className="input-formulario">
                        <label>Correo</label>
                        <input
                            name="correo"
                            type="email"
                            placeholder="ejemplo@ejemplo.com"
                            value={correo}
                            onChange={(e) => setContacto({ ...contacto, [e.target.name]: e.target.value })}
                        />
                    </div>
                    <div className="input-formulario">
                        <label >Teléfono</label>
                        <input
                            name="telefono"
                            type="tel"
                            placeholder="+58424874"
                            value={telefono}
                            onChange={(e) => setContacto({ ...contacto, [e.target.name]: e.target.value })}
                        />
                    </div>
                    <div className="input-formulario">
                        <label >Mensaje</label>
                        <textarea
                            name="mensaje"
                            value={mensaje}
                            onChange={(e) => setContacto({ ...contacto, [e.target.name]: e.target.value })}
                        ></textarea>
                    </div>
                    <div className="btn-formulario">
                        <input type="submit" className="btn btn-verde" value="Enviar" />
                    </div>

                </form>
            </div>
        </>
    )
}

export default Contacto