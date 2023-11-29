import React, { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';


const Fetch = () => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false)

  const fetchUrl = "https://eggys.onrender.com/jazzyburger/all";
//   const fetchUrl = "https://fakestoreapi.com/products";
  console.log(fetchUrl);

  const getData = async () => {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(json => setData(json))
    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(json=>setData(json))
    try {
        setIsLoading(true)
      const fetchedData = await fetch(fetchUrl);
      const response = await fetchedData.json();
      console.log(response);
      setData(response);
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="container">
      <h1> Fetch</h1>
      <div>
        {isLoading ? <Spinner animation="border" /> : data.map((datum)=>{
            const {_id,title,description,image} = datum
            return(
                <div key={_id}>
                    <h2> {title} </h2>
                    <h4> {description} </h4>
                    <img src={image} alt="" />
                    <button>add to cart</button>

                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Fetch
