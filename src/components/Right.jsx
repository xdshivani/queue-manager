import React from 'react'

export const Right = ({queue,update,remove}) => {
  return (
    <>
    <div className='right'>
    <h3>Current queue</h3>
    {queue.length === 0 && <p>No customers</p>}

    {queue.map(customer =>(
      <div key={customer.id}>
        <p>Name: {customer.name}</p>
        <p>Status: {customer.status}</p>

        <button onClick={()=>update(customer.id, "served")}>Mark served</button>
        <br />
        <button onClick={()=>remove(customer.id)} className='size'>Remove</button>
      </div>
    ))}
    </div>
    </>
  )
}
