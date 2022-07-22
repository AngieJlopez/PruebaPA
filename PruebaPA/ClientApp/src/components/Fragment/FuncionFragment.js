import React, { useState, useEffect } from 'react'

const FuncionFragment = ({ titulo1, titulo2, handleBoton, children }) => {

    return (
        <>
            <div className="card">
                <div className="card-header">
                    {titulo1}
                </div>
                <div className="card-body">
                    <h5 className="card-title">{titulo2}</h5>
                    <p className="card-text">
                        {children}
                    </p>
                    <button className="btn btn-primary" onClick={handleBoton}>Saludar</button>
                </div>
            </div>
        </>
    )
}

export default FuncionFragment