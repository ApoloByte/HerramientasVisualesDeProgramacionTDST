import React from 'react'

export const BasicTypes = () => {
  const name: string = "Víctor";
  const age: number = 28;
  let isActive: boolean = false;

  return (
    <>
      <h3>Basic Types</h3>
      {isActive?
      <ul>
        <li>Nombre {name}</li>
        <li>Edad {age}</li>
      </ul>:
      <p>Usuario inactivo</p>
      }
      


    </>
  )
}
