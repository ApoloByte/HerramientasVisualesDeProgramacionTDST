import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { StyleButton } from './StyleButton'
import { useAuthContext } from '../context/AuthContext'
export const Counter = () => {
    const { count, increaseBy } = useCounter()
    const {status} = useAuthContext();

    return (
        <div className='flex flex-col gap-5'>

            <h3 className='text-center'>
                Counter
                <span className='font-bold'>
                    {" " + count + status}

                </span></h3>

            <div className='flex gap-4'>
                <StyleButton label="+1" color="bg-blue-400" handleClick={() => (increaseBy(+1))} />
                <StyleButton label="-1" color="bg-red-400" handleClick={() => (increaseBy(-1))} />
                

            </div>
        </div>
    )
}
