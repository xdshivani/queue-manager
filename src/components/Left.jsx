import React, { useState } from "react";


export const Left = ({add}) => {
  const [name, setName] = useState("");
  const [serve, setServe] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name.trim() || !serve.trim()) return 

    const formData = {
      name,
      serve
    }  
    add(formData);
    setName('')
    setServe('')
    console.log(formData);
  }  
  return (
    <>
      <div className="left">
        <header>Add to queue</header>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            gap: "10px",
          }}
        >
          <form onSubmit={handleSubmit}>
          <input  type="text" placeholder="Customer name" value={name} onChange={(e)=>setName(e.target.value)} /> 
          <p>{name}</p>
          <select value={serve}
          onChange={(e)=>setServe(e.target.value)}>
            <option value="">Select service</option>
            <option value="serve">serve</option>
            <option value="wait">waiting</option>
          </select>
          <br />
          <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
