import React, { useState } from 'react'

export const BasicTypes = () => {
  let name: string = "Víctor"; // variable
  const [age, setAge] = useState(28);
  // let isActive: boolean = true;
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <h3>Basic Types</h3>
      {isActive ?
        <ul>
          <li>Nombre {name}</li>
          <li>Edad {age}</li>
        </ul> :
        <p>Usuario inactivo</p>
      }
      <button onClick={()=>{
        setIsActive(!isActive);
      }}>
        {isActive?"Desactivar": "Activar"} Usuario
        </button>


      <h2>Variable normal</h2>
      <button onClick={
        () => {
          name = "Julio"
          console.log(`El valor de name es: ${name}`)
        }
      }>Modificar nombre</button>

      <h2>Variable de estado age</h2>
      <button onClick={
        () => {
          setAge(29);
          console.log(`El valor de age es: ${age}`)
        }
      }>Modificar edad</button>



    </>
  )
}
