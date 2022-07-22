import React, { useState, useEffect } from 'react'


const IntegranteFragment = ({ imagen, titulo, descripcion, alt = "Imagen de perfil" }) => {

    return (
        <>
            <div class="card">
                <img src={imagen} class="card-img-top" alt={alt} />
                <div class="card-body">
                    <h5 class="card-title">{titulo}</h5>
                    <p class="card-text">{descripcion}</p>
                </div>
            </div>
        </>
    )
}

export default IntegranteFragment