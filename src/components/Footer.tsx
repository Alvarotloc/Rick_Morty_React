const Footer = (): JSX.Element => {
  return (
    <footer className="mt-14 h-2/6 bg-slate-900 w-full border-t-2 flex flex-col justify-center items-center p-10">
      <section className="flex border-b-2">
        <a href="https://github.com/Alvarotloc" className="text-white no-underline px-5 cursor-pointer transition-all hover:bg-white hover:text-red-600">GitHub</a>
        <a href="https://www.instagram.com/al_sc22/" className="text-white no-underline px-5 cursor-pointer transition-all hover:bg-white hover:text-red-600">Instagram</a>
        <a href="https://www.linkedin.com/in/%C3%A1lvaro-su%C3%A1rez-cuerva-592280189/" className="text-white no-underline px-5 cursor-pointer transition-all hover:bg-white hover:text-red-600">LinkedIn</a>
      </section>
      <p className="mt-5 text-white font-bold">©Created by: ÁlvaroSC</p>
    </footer>
  );
};

export default Footer;
