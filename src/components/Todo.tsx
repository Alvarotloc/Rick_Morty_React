import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import Flechas from "./Flechas";
import Modal from "./Modal";
import { useLocation } from "react-router-dom";
import { useState } from 'react';
import Capitulo from "./Capitulo";
import Localizacion from './Localizacion';

export interface Personaje {
  id : number,
  name : string,
  status : string,
  gender : string,
  location : {
    name : string
  },
  origin : {
    name : string
  },
  species : string,
  image :string
}

export interface ICapitulo {
  air_date : string,
  episode : string,
  name : string,
  characters : string[],
  id?:number
}

export interface iLocalizacion {
  dimension :string,
  name : string,
  residents : string[],
  type : string,
  id?:number
}

const Todo = (): JSX.Element => {
  const [personajes,setPersonajes] = useState([]);
  const [capitulos,setCapitulos] = useState([]);
  const [localizaciones,setLocalizaciones] = useState([]);
  const [visible,setVisible] = useState(false);
  const [idModal,setIdModal] = useState(0);
  let pathname:string = useLocation().pathname;

  if(pathname === "/"){
    return (
      <>
        <Header />
        <section className="flex flex-wrap w-4/5 justify-center mt-40">
          {personajes.map( (personaje:Personaje) => <Card key={personaje.id} id={personaje.id} nombre={personaje.name} especie={personaje.species} estado={personaje.status} img={personaje.image} setVisible={setVisible} setIdModal={setIdModal}/>)}
        </section>
        {visible ? <Modal setVisible={setVisible} personajes={personajes} idModal={idModal}/> : null}
        <Flechas tope={42} setPersonajes={setPersonajes} setCapitulos={setCapitulos} setLocalizaciones={setLocalizaciones}/>
        <Footer />
      </>
    );
  }else if(pathname === "/localizaciones"){
    return (
      <>
        <Header />
        <section className="flex flex-col w-4/6 mt-40">
          {localizaciones.map((localizacion:iLocalizacion) => <Localizacion key={localizacion.id} dimension={localizacion.dimension} residents={localizacion.residents} type={localizacion.type} name={localizacion.name}/>)}
        </section>
        <Flechas tope={7} setPersonajes={setPersonajes} setCapitulos={setCapitulos} setLocalizaciones={setLocalizaciones}/>
        <Footer />
      </>
    )
  }else if(pathname === "/capitulos"){
    return (
      <>
        <Header />
        <section className="flex flex-col w-4/6 mt-40">
          {capitulos.map((capitulo:ICapitulo) => <Capitulo key={capitulo.id} name={capitulo.name} episode={capitulo.episode} air_date={capitulo.air_date} characters={capitulo.characters}/>)}
        </section>
        <Flechas tope={3} setPersonajes={setPersonajes} setCapitulos={setCapitulos} setLocalizaciones={setLocalizaciones}/>
        <Footer />
      </>
    )
  }
    return (
      <>
        <Header />
        <h1 className="font-black text-5xl text-white text-center mx-20 mt-96">Error, la página que buscas no está aquí, lo sentimos.</h1>
      </>
    )
};

export default Todo;
