import React, { useState } from "react";

const List = () => {
  const [clients, setClients] = useState([
    { id: 1, name: "Izu", profession: "front-end dev" },
    { id: 2, name: "Precious", profession: "back-end dev" },
    { id: 3, name: "Lekan", profession: "fullstack dev" },
    { id: 4, name: "Gift", profession: "mobile dev" },
  ]);
  function clearAll(){
    setClients([])
  }
  function removeItem(idx){
    let removeItem = clients.filter((removeClient)=> removeClient.id != idx )
    setClients(removeItem)

  }
  //   let clients = [
  //     { id: 1, name: "Izu", profession: "front-end dev" },
  //     { id: 2, name: "Precious", profession: "back-end dev" },
  //     { id: 3, name: "Lekan", profession: "fullstack dev" },
  //     { id: 4, name: "Gift", profession: "mobile dev" },
  //   ];
  return (
    <div className="container">
      <div className="d-flex justify-content-between my-5">
        {clients.map((client) => {
          const { id, name, profession } = client;
          return (
            <div key={id}>
              <h2> {name} </h2>
              <p> {profession} </p>
              <button className="btn btn-success" onClick={()=>removeItem(id)}>remove</button>
            </div>
          );
        })}
        <button className="btn btn-danger" onClick={clearAll}>clear all</button>
      </div>
    </div>
  );
};

export default List;