import React from 'react'

export const Pets = () => {
    const animales =[
        "panda",
        "delfin",
        "oso polar",
        "flamenco",
        "tigre",
        "culebra ",
    ]

    return (
        <>
        <div>Pets</div>

        <h2>Imprimir los elementos de una lista usando <b>map</b></h2>
        <div>
         {animales.map(
            (animal,index)=> <div key ={index}>
                {animal}
            </div>
         )}

        <h2>Imprimir los elementos de una lista separada por comas con <b>join</b></h2>
         {animales.join(", ")}

        </div>

</>

    )
}
