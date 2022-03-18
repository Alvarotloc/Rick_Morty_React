import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";
import axios from "axios";
import { useState,useEffect } from "react";

interface Personaje {
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

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character?page=1")
    .then(res => {
      let {data} = res;
      let {results} = data;
      setPersonajes(results)
    })
  }, []);
  return (
    <>
      <Header />
      <section className="flex flex-wrap w-4/5 justify-center mt-40">
        {personajes.map( (personaje:Personaje) => <Card key={personaje.id} id={personaje.id} nombre={personaje.name} especie={personaje.species} estado={personaje.status} img={personaje.image}/>)}
      </section>
      <Footer />
    </>
  );
};

export default Todo;
