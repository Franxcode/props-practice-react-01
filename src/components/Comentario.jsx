import Imagen from "./Imagen";

const Comentario = ({urlImagen, persona, texto}) => {
    // console.log(props);
    return (
        <div>
            <div className="d-flex">
                <div className="flex-shrink-0">
                <Imagen urlImagen={urlImagen}/>
                </div>
                <div className="flex-grow-1 ms-3">
                <h5>{persona}</h5>
                    {texto}
                </div>
            </div>
        </div>
    )
}

export default Comentario
