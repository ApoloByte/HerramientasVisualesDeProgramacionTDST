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
        <div>
         {animales.map(
            (animal,index)=> <div key ={index}>
                {animal}
            </div>
         )}

        </div>

</>

    )
}
