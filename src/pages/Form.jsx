import React, { useState } from 'react'

const Form = () => {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('')
    function handleSubmit(e){
        e.preventDefault()
        console.log('hello world');
    }
  return (
    <div className='container bg-success'>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} /><br /><br />
            <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
            <button className='btn btn-danger'>submit</button>
        </form>
        <h2> {name} </h2>
        <p> {email} </p>
    </div>
  )
}

export default Form