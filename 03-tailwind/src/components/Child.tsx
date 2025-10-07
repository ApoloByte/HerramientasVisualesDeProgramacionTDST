import React from 'react'
import { GrandChild } from './GrandChild'
interface Props {
    name: string,
    age: number
}
export const Child = ({name, age}:Props) => {
    return (
        <div>
            <h1>
                Child
            </h1>
                <div>
                age = {age}
                </div>
                    
            <div>
                <GrandChild name={name}/>
            </div>
        </div>
    )
}
