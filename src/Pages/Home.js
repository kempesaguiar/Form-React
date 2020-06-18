import React, {useState} from 'react';
import logo from '../logo.svg';
import Header from '../Header';
import {Link} from 'react-router-dom';

function Home() {

  const [contador, setContador] = useState(0);
  function increment(){
    setContador(contador+1);
    console.log(contador);
  }

  return (
    <div className="App">
     <Header title="Header Param" />
     <Header title="Header 2" />
     <Header title="Header 3" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            <Link to='/cadastro'>Acessar cadastro</Link>
        </p>
        <p>
          <input type="button" value="Clique" onClick={increment} />
        </p>
        <p>{contador}</p>Cliques!
    </div>
  );
}

export default Home;