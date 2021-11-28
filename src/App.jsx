import Comentario from "./components/Comentario";
import Saludo from "./components/Saludo";

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde cero</h1>
      <Saludo persona="Francisco" edad={30}/>
      <Saludo persona="Juanito" edad={25}/>
      <Saludo persona="Ignacio" edad={27}/>
      <hr />
      <h3>Cajita de comentarios</h3>
      <Comentario 
            urlImagen="https://picsum.photos/64"
            persona="Francisco"
            texto="fffffffffffffffffffff"
      />
      <Comentario
            urlImagen="https://picsum.photos/64"
            persona="Juanito"
            texto="dddddddddddddddddddddddddddd"
      />
      <Comentario
            urlImagen="https://picsum.photos/64"
            persona="Ignacio"
            texto="wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww"
      />
    </div>
  );
}

export default App;
