import AOS from "aos";
import "aos/dist/aos.css";

import dressCodeAurora from '../assets/aurora/dressCodeAurora.svg'
import decoracionImagenes from '../assets/aurora/decoracionImagenes.svg'
import decoracionNombre from "../assets/aurora/decoracionNombre.svg";
import InstagramWall from "./InstagramWall";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresXV from "./LugaresXV";
import { FocusCardsDemo } from "./FocusCardsDemo";
import song from '../assets/song.mp3'

import DressCodeEsmeralda from "./DressCodeEsmeralda";
import PastelCountdown from "./CountdownCircles";
import MusicScreen from "./MusicScreen";

const Invitacion = () => {


  const targetDate = new Date("2025-11-23T13:00:00-03:00");

  const colorPrincipal = "#f9a8d4";
  const colorSecundario = "#f9a8d4";


  return (
    <div className="w-full font-eleganteText relative overflow-hidden bg-[#f8f5f0]">

        <div className="absolute z-40">
          <MusicScreen cancion={song} />
        </div>

      <div className="relative flex flex-col justify-center items-center min-h-screen w-full text-center bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1759792248/1e424b0c-d949-478c-a2d0-8490cb4870c8_zwvclx.jpg')] md:bg-[url('https://res.cloudinary.com/dfschbyq2/image/upload/v1759792231/e4bb6bf2-2cc9-40ac-87ba-a2bbbaa4e7c5_ydr9au.jpg')] bg-center bg-cover font-eleganteText space-y-5 overflow-hidden">
        <div className="absolute inset-0 h-full w-full bg-black/40 z-0"></div>
        <div data-aos="fade-in">

          <div className="relative z-10 flex flex-col items-center text-center text-white pt-96">

            <div className="flex items-center justify-center mb-2">

              <img
                src={decoracionNombre}
                alt="Decoración invertida"
                className="w-[10rem] h-auto mr-3"
              />

                <div className="flex flex-col items-center">

                    <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
                        Morena
                    </h1>

                    <p className="text-xl md:text-2xl font-light tracking-wider">
                    MIS QUINCE AÑOS
                    </p>

                </div>

              <img
                src={decoracionNombre}
                alt="Decoración normal"
                className="w-[10rem] h-auto  scale-x-[-1] transform"
              />
            </div>

          </div>
        </div>
      </div>

      <div>
        <section
          id="contador"
          className="bg-white py-10 border-y-4 border-pink-100 text-center"
        >
          <p className="text-xl tracking-wider font-light py-5">23 de Noviembre de 2025</p>
          <PastelCountdown targetDate={targetDate} bgColor="bg-pink-100"/>
        </section>

        <section id="lugares" className="relative text-center bg-gradient-to-b from-white to-pink-50 border-b-4 border-pink-100 py-10">
          <LugaresXV
            iglesia="[Nombre iglesia]"
            hora_iglesia="10:00hs"
            salon="Monsieur Monod"
            hora_inicio="21:00hs"
            hora_fin="05:00hs"
          />
          <a href="https://maps.app.goo.gl/UJQVLBC1nCQZ63Hv5" target="_blank" rel="noopener noreferrer">
            <button className="border-2 border-pink-200 my-5 py-3 px-8 rounded-full text-gray-800 font-semibold hover:text-gray-600 transition">
              CÓMO LLEGAR
            </button>
          </a>
        </section>

        <div className="relative bg-white">
          <img
            src={decoracionImagenes}
            alt="Decoración lateral"
            className="hidden md:block absolute left-5 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "10rem",
              transform: "translateY(-50%) scaleX(-1)",
            }}
          />
          <img
            src={decoracionImagenes}
            alt="Decoración lateral invertida"
            className="hidden md:block absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none"
            style={{
              width: "10rem",
            }}
          />
          <section className="pb-16">
              <FocusCardsDemo
                texto=""
                images={[
                  {
                    index: 1,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759792192/16b12d90-be7e-4075-89e6-1e2e3ca833b6_dt4egw.jpg",
                  },
                  {
                    index: 2,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759792202/aa6b8c82-1bdb-48a9-b9b3-ce9929f687bd_tnivbm.jpg",
                  },
                  {
                    index: 3,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759792212/0b7d8f23-04ce-4ca4-95f6-bb12fec4ecba_hvohof.jpg",
                  },
                  {
                    index: 4,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759792231/e4bb6bf2-2cc9-40ac-87ba-a2bbbaa4e7c5_ydr9au.jpg",
                  },
                  {
                    index: 5,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759792242/5d254636-85db-4615-b191-a67699ab4df0_bttpgh.jpg",
                  },
                  {
                    index: 6,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759792248/1e424b0c-d949-478c-a2d0-8490cb4870c8_zwvclx.jpg",
                  },
                  {
                    index: 7,
                    img: "https://res.cloudinary.com/dfschbyq2/image/upload/v1759792255/1560eb15-9527-4d0d-8356-d3dfba73426e_u5nyw7.jpg",
                  },
                ]}
              />
          </section>
        </div>

        <div className="bg-pink-200 text-center relative text-gray-600">
          <GoogleCalendarButton
            imgClass="text-pink-300"
            buttonClass="rounded-full hover:shadow-lg border-pink-300 bg-white text-gray-900"
            titleCalendar="XV de Morena"
            salon="Monsieur Monod"
            fechaComienzo="20251123T210000"
            fechaFin="20251124T050000"
          />
        </div>

        <div className="relative bg-white py-10">
          <DressCodeEsmeralda dressCode="Elegante" icon={dressCodeAurora}/>
        </div>


        <div className="bg-white border-b border-pink-100">
          <InstagramWall
            userClass="text-gray-600"
            logoClass="text-pink-300"
            user="@15.de.moreeeep"
          />
        </div>


        <DatosBancarios
          claseIcon="text-pink-600"
          texto="Si deseas hacerme un regalo, te dejo los datos"
          claseContenedor="bg-pink-100 text-gray-600"
          claseBoton="rounded-full hover:shadow-lg border-pink-300 bg-gray-100 text-gray-900"
          textSize="text-lg"
          background={{ backgroundColor: "#fccee8" }}
          styleBotonModal={{
            backgroundColor: "white",
            borderColor: "#f9a8d4",
          }}
          claseBotonModal={{
            backgroundColor: colorPrincipal,
            borderColor: "#f9a8d4",
          }}
          styleModal={{ backgroundColor: colorSecundario }}
          styleBorderModal={{ borderColor: colorPrincipal }}
          styleTextColor={{ color: colorPrincipal }}
          cbu=""
          alias="Morena.paloma.leon"
          banco="Banco Santander"
          nombre="Jose Paredes"
          claseModal="bg-pink-200"
          borderModal="border-pink-200"
          textColor="text-pink-300"
        />

        <Asistencia
          clase="py-10 bg-white bg-fixed border-b-4 border-pink-100"
          claseTitle="text-pink-300"
          claseButton="border-2 border-pink-200 font-semibold text-gray-700 rounded-full"
          linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSc2ebRCspXbyHa42TrW1owJvea4-ppGPb6UZuN7vDNth3j7EA/viewform?usp=header"
        />

        <div className=" text-xl italic bg-white">
          <TextoFinal textoFinal={<p>Te espero para compartir este día único en mi vida <br />¡Ya que tu presencia es igual de única!</p>} />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
