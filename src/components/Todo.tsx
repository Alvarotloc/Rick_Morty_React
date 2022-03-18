import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import axios from "axios";
import Flechas from "./Flechas";
import Modal from "./Modal";
import { useState,useEffect } from "react";

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

const Todo = (): JSX.Element => {
  const [personajes,setPersonajes] = useState([]);
  const [visible,setVisible] = useState(false);
  const [idModal,setIdModal] = useState(0);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character?page=1")
    .then(res => {
      let {data} = res;
      let {results} = data;
      console.log(results)
      setPersonajes(results)
    })
  }, []);

  return (
    <>
      <Header />
      <section className="flex flex-wrap w-4/5 justify-center mt-40">
        {personajes.map( (personaje:Personaje) => <Card key={personaje.id} id={personaje.id} nombre={personaje.name} especie={personaje.species} estado={personaje.status} img={personaje.image} setVisible={setVisible} setIdModal={setIdModal}/>)}
      </section>
      <Modal visible={visible} setVisible={setVisible} personajes={personajes} idModal={idModal}/>
      <Flechas tope={42} setPersonajes={setPersonajes}/>
      <Footer />
    </>
  );
};

export default Todo;
