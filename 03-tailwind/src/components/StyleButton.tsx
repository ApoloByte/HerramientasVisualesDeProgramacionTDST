import React, { useState } from 'react'
interface Props {
    label: String
    color: String
    handleClick(): void
}
export const StyleButton = ({ label, color, handleClick: handdleClick }: Props) => {
    const [isDisabled, setIsDisabled] = useState(false);
    return (
        <div className='flex gap-4'>
            <button
                disabled={isDisabled}
                className={color + " rounded-3xl px-4 disabled:bg-gray-100"}
                onClick={handdleClick}>
                {label}  

            </button>
            <input type="Checkbox"
            checked ={isDisabled}
            onChange={() => setIsDisabled(!isDisabled)} /> 
            </div>)

         
            
                
            
          }

  
