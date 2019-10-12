import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithubAlt } from 'react-icons/fa';

function Header(){

  return (

    <header id="header" className="bg-blue-500 h-screen w-screen">

      <div className="flex flex-col items-center justify-center w-full h-full pb-32">
          <p className="font-mansalva text-white text-5xl">Oi, eu sou o</p>
          <h1 className="font-montserrat text-white text-5xl uppercase font-bold tracking-wider">André Santana</h1>
          <p className="font-mansalva text-white text-4xl">Aspirante a desenvolvedor web full stack :D</p>

          <div className="flex flex-row justify-around w-48 mt-4">

            <a href="https://fb.com/andre.sfnd.537" target="blank"> 
              <div class="rounded-full h-12 w-12 flex items-center justify-center bg-white hover:shadow-md">
                <FaFacebookF className="text-blue-700 text-2xl" />
              </div>
            </a>

            <a href="https://linkedin.com/in/andr%C3%A9-santana-fernandes-418418191/" target="blank">
              <div class="rounded-full h-12 w-12 flex items-center justify-center bg-white hover:shadow-md">
                <FaLinkedinIn className="text-blue-500 text-2xl" />
              </div>
            </a>

            <a href="https://github.com/AndreSFND/" target="blank">
              <div class="rounded-full h-12 w-12 flex items-center justify-center bg-white hover:shadow-md">
                <FaGithubAlt className="text-gray-800 text-2xl" />
              </div>
            </a>

          </div>

          <a href="#main">
            <button class="bg-white text-blue-500 font-bold text-xl py-2 px-4 rounded mt-8 hover:shadow-md">
              Ver mais
            </button>
          </a>

      </div>

	  </header>

  );

}

export default Header;
