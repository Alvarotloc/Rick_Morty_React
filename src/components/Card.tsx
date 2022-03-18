interface parametrosCard {
  id:number, nombre:string,especie:string,estado:string,img:string, setVisible:Function, setIdModal:Function
}



const Card = ({id,nombre,especie,estado,img,setVisible,setIdModal}:parametrosCard):JSX.Element => {
  return (
    <div className="rounded-2xl overflow-hidden flex flex-col justify-between bg-black/5 shadow-md backdrop-filter border-2 border-gray-400 mb-16 mr-4 w-56">
        <img src={img} alt="Imagen de personaje" className="mb-2"/>
        <h3 className="text-white font-black text-xl ml-2">{nombre}</h3>
        <h4 className="text-white my-2 ml-2">Especie: {especie}</h4>
        <h4 className="text-white ml-2">Estado: {estado}</h4>
        <button className="w-5/6 py-2 text-white my-3 bg-slate-400 border-2 transition-colors hover:bg-slate-500 mx-auto rounded-lg" onClick={() => {
                    setIdModal(id);
                    setVisible(true);
        }}>Leer más</button>
    </div>
  )
}

export default Card