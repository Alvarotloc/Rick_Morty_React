import { iLocalizacion, Personaje } from './Todo';
import { useState } from 'react';
import axios from 'axios';

const Localizacion = ({dimension,name,type,residents}:iLocalizacion):JSX.Element => {
    const [personajes,setPersonajes] = useState([]);
    const [visible,setVisible] = useState(false);

    function handlePersonajes() {
        let ids = residents.map((character: string) => character.split("/").pop());
        axios
          .get(`https://rickandmortyapi.com/api/character/${ids}`)
          .then((res) => {
            let { data } = res;
            if(data.length > 15){
                data = data.splice(0,15);
            }
            setPersonajes(data);
          });
      }
  return (
    <>
        <section className="w-full border-2 border-black bg-gray-900/30 rounded-lg flex flex-col transition-all">
            <h3 className="text-pink-600 ml-5 text-2xl font-extrabold my-5">Nombre: {name}</h3>
            <h4 className="text-white font-semibold ml-5">Dimension: {dimension}</h4>
            <h4 className="text-white font-semibold ml-5 my-5">Tipo: {type}</h4>
            <h4 className={visible ? "text-white font-semibold ml-5 mb-5" : "hidden"}>Residentes: {visible && personajes.length > 1 ? personajes.map((personaje:Personaje,index:number) => personaje.name + (personajes.length - 1 !== index ? ", " : ".")) : personajes.name + "."}</h4>
            <button className='text-white transition-colors text-xl mb-5 border-2 w-52 py-2 rounded-xl bg-slate-700 m-auto hover:bg-slate-800' onClick={() => {
                setVisible(!visible);
                return handlePersonajes()
                }}>{visible ? "Ocultar residentes" : "Ver residentes"}</button>
        </section>
    </>
  )
}

export default Localizacion