import React from 'react';

function Navbar(){

  return (

    <nav className="bg-white w-screen h-20 sticky top-0 shadow">
      <div className="flex flex-row items-center h-full">

        <div className="w-2/6 px-8">
          <a href="#header">
            <h1 className="font-mansalva text-3xl uppercase font-bold tracking-wider text-blue-600 float-left">[nome legal]</h1>
          </a>
        </div>

        <div className="w-1/6"></div>

        <div className="w-3/6">
          <div class="flex flex-row float-right px-8">
            <a href="#header"><h2 className="font-montserrat text-2xl uppercase mx-4">Início</h2></a>
            <a href="#main"><h2 className="font-montserrat text-2xl uppercase mx-4">Sobre mim</h2></a>
            <a href="#footer"><h2 className="font-montserrat text-2xl uppercase mx-4">Contato</h2></a>
          </div>
        </div>

      </div>
    </nav>

  );

}

export default Navbar;
