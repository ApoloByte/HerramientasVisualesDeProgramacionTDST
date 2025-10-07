import React from 'react'
import { Child } from './Child'

interface Props{
    name:string,
    age:number
}

export const Parent = ({name, age}:Props) => {
  return (
    <div>Parent
        <Child name={name} age={age}/>
    </div>

  )
}
