import React from 'react';
import { FaRegEnvelope, FaPhone } from 'react-icons/fa';

function Footer(){

  return (

    <footer id="footer" className="bg-gray-900 w-screen h-64 font-montserrat">
      <div className="flex flex-col content-around w-1/2 h-full mx-auto text-white p-4">

        <div className="h-full">
          <h1 className="uppercase tracking-wide text-xl font-bold mb-3">Contato</h1>

          <div className="flex flex-row text-xl mb-3 mx-4">
            <FaRegEnvelope />
            <a href="mailto:andre_sfnd@usp.br"><p className="mx-2 text-base">andre_sfnd@usp.br</p></a>
          </div>
          <div className="flex flex-row text-xl mb-3 mx-4">
            <FaPhone />
            <p className="mx-2 text-base">+55 (13) 99652-1451</p>
          </div>
        </div>

        <div>
          <h2>Feito com <span role="img" aria-label="Coração">&#128150;</span> por <b>André Santana</b>.</h2>
        </div>

      </div>

	  </footer>

  );

}

export default Footer;
