import React,{useState} from 'react';
// import { useState } from 'react';

const Click = () => {
    // console.log(useState('hello'));
    const [number,setNumber] = useState(20)
    let name = 'Faith'
    function click(){
        name = 'Amos'
        console.log('hello world' + name);
    }
    let clickAgain = (name)=>{
        console.log('hello class '+ name);
    }
    let changeNumber = function(){
        if(number === 20){
            setNumber(5)

        }else{
            setNumber(20)
        }
    }

  return (
    <div className='container'>
        <h2>click page</h2>
        <h2> {name} </h2>
        <button className='btn btn-primary' onClick={click}>click me to change name</button>
        <button onClick={()=> clickAgain('Momoh') }>click me again</button>
        {/* useState */}
        <h3> {number} </h3>
        <button className="btn btn-danger" onClick={changeNumber}> click to change number</button>
    </div>
  )
}

export default Click