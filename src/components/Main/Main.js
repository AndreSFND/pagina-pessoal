import React from 'react';
import me from '../../res/me.png';

function Grupo(props){

  return (

    <div className="flex flex-col h-auto">
      <div className="rounded-full h-64 w-64 flex items-center justify-center bg-gray-300 shadow-md">
        <img src={require("../../res/"+ props.imagem +".png")} alt={"Logo do "+ props.grupo} title={"Logo do "+ props.grupo} className="mb-4" />
      </div>
      <div className="h-auto text-center p-2">
        <h1 className="font-montserrat text-2xl">{props.titulo}</h1>
      </div>
    </div>

  );

}

function Main(){

  return (

    <main id="main" className="bg-gray-200 w-screen h-auto py-16">
        <div className="flex flex-row bg-white shadow-md w-3/4 h-auto mx-auto p-8">

          <div className="bg-white w-2/6 h-auto mr-8">
            <img src={me} alt="André Santana"/>
          </div>

          <div className="bg-white w-4/6 h-auto">
              <h1 className="font-mansalva text-gray-900 text-4xl">André Santana</h1>

              <ul className="font-montserrat list-disc ml-8 mt-2 leading-loose">
                <li>
                  <b>Idade:</b> 19
                </li>
                <li>
                  <b>Curso:</b> BCC 019
                </li>
                <li>
                  <b>Cidade Natal:</b> Registro-SP
                </li>
                <li>
                  <b>Hackatons:</b>
                  <ul className="list-disc ml-8">
                    <li>Hackfools (2019)</li>
                    <li>Interhack (2019)</li>
                  </ul>
                </li>

                <li className="list-none mt-5">
                  <b>Técnico em Informática</b> pela ETEC de Registro
                </li>

              </ul>
          </div>

        </div>

        <div className="flex flex-row justify-around w-3/4 h-auto mx-auto p-8 mt-12">

          <Grupo titulo="Membro do FoG" grupo="Fellowship of The Game" imagem="fog" />
          <Grupo titulo="Coordenador do UCL" grupo="USP Code Lab" imagem="ucl" />

        </div>
    </main>

  );

}

export default Main;