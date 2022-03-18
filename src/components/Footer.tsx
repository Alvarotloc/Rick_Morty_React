import { Link } from "react-router-dom";
const Footer = (): JSX.Element => {
  return (
    <footer className="mt-14 h-2/6 bg-slate-900 w-full border-t-2 flex flex-col justify-center items-center p-10">
      <section className="flex border-b-2">
          <Link to="https://github.com/Alvarotloc" className="text-white no-underline px-5 cursor-pointer transition-all hover:bg-white hover:text-red-600">GitHub</Link>
          <Link to="https://www.instagram.com/al_sc22/" className="text-white no-underline px-5 cursor-pointer transition-all hover:bg-white hover:text-red-600">Instagram</Link>
          <Link to="https://www.linkedin.com/in/%C3%A1lvaro-su%C3%A1rez-cuerva-592280189/" className="text-white no-underline px-5 cursor-pointer transition-all hover:bg-white hover:text-red-600">LinkedIn</Link>
      </section>
      <p className="mt-5 text-white font-bold">©Created by: ÁlvaroSC</p>
    </footer>
  );
};

export default Footer;
