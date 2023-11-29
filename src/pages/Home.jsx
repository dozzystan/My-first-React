
import '../styles/Home.css'

function Home(){

    const randomNumbers = Math.random();
    console.log(randomNumbers);
    let names = ['Izu','Gift','Presh','Lekan'];
    console.log(names);
    const fbLink = 'https://facebook.com'
    return(
        <div className='home-container' >
            <h2>home page</h2>
            <h2> {randomNumbers}  </h2>
            <h1> {names} </h1>
            <a target="_blank" href={fbLink} className='text-decoration-none'>facebook</a>
        </div>
    )
}

export default Home