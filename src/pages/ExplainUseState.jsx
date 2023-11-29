import React,{useState} from 'react'

const ExplainUseState = () => {
    const [clientName,setClientName] = useState('Precious')

    // let clientName = 'Precious'
    function changeName(){
        clientName === 'Precious' ?  setClientName('Izu') :         setClientName('Precious')




    }
  return (
    <div className='container'>
        <h2> My name is  {clientName} </h2>
        <button className="btn btn-success" onClick={changeName}>click to change client name</button>
    </div>
  )
}

export default ExplainUseState