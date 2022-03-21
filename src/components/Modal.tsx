import { Personaje } from './Todo';

interface parametrosModal {
    setVisible :Function
    personajes:Personaje[],
    idModal : number
}

const Modal = ({setVisible,personajes,idModal}:parametrosModal):JSX.Element => {
    const [personajeModal] = personajes.filter((personaje) => personaje.id === idModal);
  return (
    <div className={"h-screen bg-black/50 fixed w-full flex justify-center"} onClick={() => {
        return setVisible(false);
    }}>
        <section  className="w-3/5 rounded-xl h-2/4 overflow-hidden relative mt-52 flex items-center bg-slate-900">
            <img  src={personajeModal.image} alt="Fotografía del personaje" className="h-full"/>
            <div className="h-5/6 flex flex-col justify-around text-white ml-5">
                <h2 className="font-semibold text-xl">Nombre: {personajeModal.name}</h2>
                <h3>Estado: {personajeModal.status}</h3>
                <h3>Género: {personajeModal.gender}</h3>
                <h3>Localización Actual: {personajeModal.location.name}</h3>
                <h3>Origen: {personajeModal.origin.name}</h3>
                <h3>Especie: {personajeModal.species}</h3>
            </div>
        </section>
    </div>
  )
}

export default Modal