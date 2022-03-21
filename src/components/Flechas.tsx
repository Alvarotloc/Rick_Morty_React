import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

interface parametrosFlechas {
  tope: number,
  setPersonajes : Function,
  setCapitulos : Function,
  setLocalizaciones : Function
}
const Flechas = ({tope,setPersonajes,setCapitulos,setLocalizaciones}: parametrosFlechas): JSX.Element => {
  const [indicador, setIndicador] = useState(1);
  let pathname:string = useLocation().pathname;

  useEffect(() => {
    axiosFetch();
  }, [indicador]);

  function axiosFetch():void {
    if(pathname === "/"){
      axios
      .get(`https://rickandmortyapi.com/api/character?page=${indicador}`)
      .then((res) => {
        let { data } = res;
        let { results } = data;
        setPersonajes(results);
      });
    }else if(pathname === "/capitulos"){
      axios
      .get(`https://rickandmortyapi.com/api/episode?page=${indicador}`)
      .then((res) => {
        let { data } = res;
        let { results } = data;
        setCapitulos(results);
      });
    }else if(pathname === "/localizaciones"){
      axios
      .get(`https://rickandmortyapi.com/api/location?page=${indicador}`)
      .then((res) => {
        let { data } = res;
        let { results } = data;
        setLocalizaciones(results);
      });
    }

  }
  return (
    <section className="flex w-2/4 justify-center mt-10">
      <p
        className={
          indicador === 1
            ? "hidden"
            : "text-white text-5xl cursor-pointer transition-colors hover:text-pink-600"
        }
        onClick={() => {
          return setIndicador(indicador - 1);
        }}
      >
        &lt;
      </p>
      <p className="mx-20 text-5xl text-white">{indicador}</p>
      <p
        className={
          indicador === tope
            ? "hidden"
            : "text-white text-5xl cursor-pointer transition-colors hover:text-pink-600"
        }
        onClick={() => {
          return setIndicador(indicador + 1);
        }}
      >
        &gt;
      </p>
    </section>
  );
};

export default Flechas;
