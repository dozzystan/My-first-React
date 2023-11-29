import React,{useState} from "react";
// import { useState } from "react";
import { myGuys } from "../db";

const Reexplain = () => {
    // console.log(useState('world'));
    const [nomen,setNomen] = useState('Izu')
    // const myGuys = [
    //     {id:1,name:'Izu'},
    //     {id:2,name:'Pius'},
    //     {id:3,name:'King'},
    //     {id:4,name:'Stan'}
    // ]
    console.log(myGuys);
    let name = 'Eggyss'
    function clickEvent(){
        console.log('hello world');
    }

    let clickArg = (name)=>{
        name = 'Stan'
        console.log(`Hi my name is ${name}`);

    }
    function changeName(){
        // if(nomen === 'Izu'){
        //     setNomen('Gift')

        // }else{
        //     setNomen('Izu')
        // }

        nomen === 'Izu' ? setNomen('Gift') : setNomen('Izu')
    }
  return (
    <div className="container bg-warning">
      <h2> Reexplain</h2>
      <button className="btn btn-secondary" onClick={clickEvent}>
        click me
      </button>
      {/* arg and params */}
      <h2> {name} </h2>

      <button className="btn btn-danger" onClick={()=>clickArg('EGgys')}>
        click to explain args and params
      </button>
      {/* usestate */}
      <h2> {nomen} </h2>
      <button className="btn btn-success" onClick={changeName}>
        click to change name
      </button>
      {/* list */}
      <h2> {myGuys.map((myGuy)=>{
        const {id,name} = myGuy
        return(
            <div key={id}>
                <h2> {name} </h2>

            </div>
        )
      })} </h2>
    </div>
  );
};

export default Reexplain;
