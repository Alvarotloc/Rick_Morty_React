import { Personaje } from './Todo';

interface parametrosModal {
    visible : boolean,
    setVisible :Function
    personajes:Personaje[],
    idModal : number
}

const Modal = ({visible,setVisible,personajes,idModal}:parametrosModal):JSX.Element => {
  return (
    <div className={visible ? "h-screen bg-black/50 fixed w-full flex justify-center" : "hidden"} onClick={() => {
        return setVisible(false);
    }}>
        <section className="w-3/5 rounded-xl h-2/4 overflow-hidden relative mt-52 flex items-center bg-slate-900">
            <img src="url" alt="Fotografía del personaje" className="h-full"/>
            <div className="h-5/6 flex flex-col justify-around">
                <h2 className="text-white ml-5 font-semibold text-xl">Nombre:</h2>
                <h3 className="text-white ml-5">Estado:</h3>
                <h3 className="text-white ml-5">Género:</h3>
                <h3 className="text-white ml-5">Localización Actual:</h3>
                <h3 className="text-white ml-5">Origen:</h3>
                <h3 className="text-white ml-5">Especie:</h3>
            </div>
        </section>
    </div>
  )
}

export default Modal