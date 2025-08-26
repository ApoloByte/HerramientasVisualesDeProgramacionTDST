import React from 'react'

export const BasicTypes = () => {
  const name: string = "Víctor";
  const age: number = 28;
  let isActive: boolean = true;

  return (
    <>
      <div>
        Hello world
      </div>
      <div>
        {name}
      </div>
      <div>
        {" " + age}
      </div>
      <div>
        {" " + isActive}
      </div>


    </>
  )
}
