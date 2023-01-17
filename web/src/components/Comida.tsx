import React from "react"

interface Comida {
    nome: String
}

export function Comida (props: Comida) {
    return (
        <div className = "flex flex-row" >
            <button> {props.nome} </button>
        </div>
        
    )
}