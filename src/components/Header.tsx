import {Link} from "react-router-dom";

const Header = ():JSX.Element => {
  return (
    <header className="w-full border-b-2 flex items-center justify-around fixed z-10 bg-gray-900/30 backdrop-blur">
        <Link to="/" className="text-white text-3xl relative mr-96 transition-colors hover:text-pink-600">Inicio</Link>
        <img src="../../images/descarga.png" alt="Logo Rick y Morty" className="fixed "/>
        <section className="text-3xl relative ml-52">
            <Link to="https://rickandmortyapi.com/" className="text-white transition-colors hover:text-pink-600">API</Link>
            <Link to="/localizaciones" className="mx-16 text-white transition-colors hover:text-pink-600">Locations</Link>
            <Link to="/capitulos" className="text-white transition-colors hover:text-pink-600">Caps</Link>
        </section>
    </header>
  )
}

export default Header