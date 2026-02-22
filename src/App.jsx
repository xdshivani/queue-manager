import { useState } from 'react';
import './App.css';
import {Forms} from './components/Forms'

function App() {
  const [queue, setQueue] = useState([]);
  const addQueue = (customer)=>{
    setQueue([...queue, {...customer,id:Date.now(),status:"waiting"}])
  }
  const updateQueue = (id, newStatus)=>{
    setQueue(queue.map(customer=>
      customer.id === id ? {...customer, status: newStatus} : customer
  ))
  }
  const removeFromQueue = (id)=>{
    setQueue(queue.filter(customer => customer.id != id))
  }

  return (
   <div className='app'>
   <h1>Queue Manager</h1>
   <p>Let's manage your customers efficiently </p>

   <Forms queue={queue} add={addQueue} update={updateQueue} remove={removeFromQueue}/>
   </div>
  )
}

export default App
