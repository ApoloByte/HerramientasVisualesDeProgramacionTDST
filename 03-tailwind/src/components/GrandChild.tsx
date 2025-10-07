import React from 'react'
interface Props {
  name: string
}
export const GrandChild = ({ name }: Props) => {
  return (
    <>
      <h1>
        GrandChild
      </h1>
      <div>{name}</div>
    </>
  )
}
