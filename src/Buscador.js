import { useEffect, useState } from "react";
import '../src/Buscador.css'
import logo from "../src/logo-minuto-01.png"


function Buscador() {

  const [post, SetPost] = useState([]);
  const [datosUsuarios, SetDatosUsuarios] = useState([]);
  const [busqueda, SetBusqueda] = useState([""]);

  const llamadaGet =()=>{
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
    .then(response => response.json())
    .then(data =>  {
      SetPost(data);
      SetDatosUsuarios(data);
    })
    .catch(error =>{ console.log(error)});
  }


  const handleChange = e=>{
    SetBusqueda(e.target.value);
    filtrar(e.target.value);
  }



  const filtrar =(terminoBusqueda)=>{
  var resultadosBusqueda = datosUsuarios.filter((item)=> item.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()));
  SetPost(resultadosBusqueda)
  }


  useEffect(() => {
    llamadaGet();
  }, [])

  return (
    <div >
          <header>
          <div className="container">
            <img src={logo} alt="logo-mimuto a minuto" />
            <div className="ContainerInput">
              <input 
              value={busqueda}
              placeholder="Búsqueda por título"
              onChange={handleChange}
              />
            </div>
          </div>
          </header>

        <div className="container" >
          {post.map(user => (
            <article key={user.id} >
              <h1>{user.title}</h1>
              <p> {user.body} </p>
              <hr/>
              <br/>
            </article>
            
          ))}
          <br/>
          
        </div>
        

    </div>
  );
}

export default Buscador;
