import { ICapitulo, Personaje } from "./Todo";
import axios from "axios";
import { useState } from 'react';

const Capitulo = ({
  name,
  episode,
  air_date,
  characters,
}: ICapitulo): JSX.Element => {

  const [personajes,setPersonajes] = useState([]);
  const [visible,setVisible] = useState(false);

  if(personajes.length > 10){
    setPersonajes(personajes.splice(0,10));
  }


  function handlePersonajes() {
    setVisible(true);
    let ids = characters.map((character: string) => character.split("/").pop());
    axios
      .get(`https://rickandmortyapi.com/api/character/${ids}`)
      .then((res) => {
        let { data } = res;
        setPersonajes(data);
      });
  }

  return (
    <>
      <section className="w-full border-2 border-black bg-gray-900/30 rounded-lg flex flex-col transition-all">
        <section className="flex items-center justify-between relative h-12 text-white ml-5">
          <h3 className="text-xl">
            Capítulo {episode}: {name}
          </h3>
          <div className={visible ? "hidden" : "absolute h-4/5 right-8 transition-colors hover:text-pink-700 cursor-pointer -rotate-90 text-4xl"} onClick={handlePersonajes}>
            &lt;
          </div>
          <div className={visible ? "absolute right-8 cursor-pointer transition-colors hover:text-pink-700 text-2xl" : "hidden"} onClick={() => setVisible(false)}>
            X
          </div>
        </section>
        <section className={visible ? "" : "hidden"}>
        <h3 className="text-white text-xl my-5 ml-5">
          Fecha de estreno: {air_date}
        </h3>
        <h3 className="mb-5 text-white text-xl ml-5">
          Personajes: {personajes.map((personaje:Personaje,index:number) => personaje.name + (personajes.length - 1 !== index ? ", " : "."))}
        </h3>
        </section>
      </section>
    </>
  );
};

export default Capitulo;
