import React, { useState, useEffect } from 'react'

const UsuarioPorDefecto = [
    { nombres: "Patana", mensaje: "Triviño", Like: true },
    { nombres: "Juan Carlos", mensaje: "Bodoque", Like: false }
]
const Ejercicio2 = () => {


    const [individuo, setindividuo] = useState(UsuarioPorDefecto)
    const [nombres, setNombres] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [Like, setLike] = useState(false)
    const [Saludo, setSaludo] = useState(false)

    useEffect(() => {
        let copiaindividuo = [...individuo]
        const nuevoindividuo = {
            nombres: "Juanin Juan",
            mensaje: "Harry",
            Like: true,
            Saludo: true
        }
        copiaindividuo.push(nuevoindividuo)
        setindividuo(copiaindividuo)
    }, [])

    const handleNombres = (evento) => {
        setNombres(evento.target.value)
    }

    const handleMensaje = (evento) => {
        setMensaje(evento.target.value)
    }

    const handleLike = (evento) => {
        setLike(!Like)
    }

    const handleSaludo = (evento) => {
        setSaludo(!Saludo)
    }

    const handleIngresoindividuo = (evento) => {
        console.log("Botón presionado")
        const nuevoindividuo = {
            nombres: nombres,
            mensaje: mensaje,
            Like: Like,
            Saludo: Saludo
        }

        let copiaindividuo = [...individuo]
        copiaindividuo.push(nuevoindividuo)
        setindividuo(copiaindividuo)
    }
    return (
        <>
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Enviar Mensaje</h1>
                </div>
            </div>

            <div className="col-4">
                <label htmlFor="nombres">Nombres</label>
                <input
                    className="form-control"
                    type="text"
                    onChange={handleNombres}
                    value={nombres}
                    name="nombres"
                    id="nombres"
                />
            </div>

            <div className="col-4">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                    className="form-control"
                    type="text"
                    onChange={handleMensaje}
                    value={mensaje}
                    name="mensaje"
                    id="mensaje"
                />
            </div>
            <div className="col-4">
                <br /> { }
                <div className="form-check form-check-inline">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={Like}
                        onChange={handleLike}
                        name="Like"
                        id="Like" />
                    <label
                        className="form-check-label"
                        htmlFor="Like">
                        👍Dar Like
                    </label>
                </div>
                <div className="form-check form-check-inline">

                    <input
                        className="form-check-input"
                        type="checkbox"
                        checked={Saludo}
                        onChange={handleSaludo}
                        name="Saludo"
                        id="Saludo"/>
                    <label
                        className="form-check-label"
                        htmlFor="Saludo">
                        👋​Enviar Saludo
                    </label>

                </div>

            </div>
            <div className="col-12 justify-content-start mt-3">
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={handleIngresoindividuo}
                >
                    Enviar
                </button>
            </div>

            <hr />
            <div className="row mt-5">
                <div className="col-12">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Reacciones</th>
                                <th>Mensaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {individuo.map((individuo) => {
                                return (
                                    <tr>
                                        <td>{individuo.nombres}</td>

                                        <td>{individuo.Like ?
                                            " 👍 " :
                                            "<Ninguno>"
                                        }
                                        </td>
                                        <td>{individuo.mensaje}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Ejercicio2