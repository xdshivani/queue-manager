import React from 'react'
import { Left } from './Left'
import { Right } from './Right'

export const Forms = ({queue,add,update,remove}) => {
  return (
    <>
    <div className='box'>
    <Left add={add}/>
    <Right queue={queue} update={update} remove={remove}/>
   </div>
    </>
  )
}
