import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoCopyOutline } from "react-icons/io5";

export const Modal = ({
  // cbu,
  alias,
  nombre,
  banco,
  moneda_extranjera,
  tipo_cuenta,
  numero_cuenta,
  titular_extranjera,
  banco_extranjera,
  styleTextColor,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert(`¡Copiado al portapapeles!`);
      })
      .catch(() => {
        alert('Error al copiar. Intenta de nuevo.');
      });
  };

  return (
    <>
      <button
        className={`py-4 px-6 border-2 mt-5 transition hover:transform hover:scale-105 hover:shadow-lg border-pink-300 text-gray-800 rounded-full bg-white` }
        data-aos='fade-up'
        onClick={() => setIsOpen(true)}
      >
        Ver Datos Bancarios
      </button>

      {isOpen && (
        <div className={`fixed inset-0 bg-pink-900/10 backdrop-blur-md flex justify-center items-center z-50`}>
          <div className={`bg-white p-10 rounded-lg flex flex-col justify-center items-center border-2 border-pink-400`}>
            <div className="flex flex-col justify-center text-center space-y-7 text-gray-900 w-full max-w-md ">
              <h2 className="font-bold text-2xl">Datos Bancarios</h2>
              {moneda_extranjera && moneda_extranjera.trim() !== "" && (
              <h3 className="text-xl font-semibold mb-4">Datos en Pesos</h3>
              )}
              <div className="w-full space-y-4 text-left text-gray-800">
                <p className="text-lg flex justify-between items-center">
                  <span><span className="font-semibold">Nombre del titular:</span> {nombre}</span>
                </p>

                {/* <p className="text-lg flex justify-between items-center">
                  <span><span className="font-semibold">CBU:</span> {cbu}</span>
                  <button onClick={() => copiarTexto(cbu)}>
                    <IoCopyOutline className="ml-2 text-pink-400" />
                  </button>
                </p> */}

                <p className="text-lg flex justify-between items-center">
                  <span><span className="font-semibold">Alias:</span> {alias}</span>
                  <button onClick={() => copiarTexto(alias)}>
                    <IoCopyOutline className="ml-2 text-pink-400" />
                  </button>
                </p>

                <p className="text-lg flex justify-between items-center">
                  <span><span className="font-semibold">Banco:</span> {banco}</span>
                </p>
              </div>
              {moneda_extranjera && moneda_extranjera.trim() !== "" && (
                <div className="w-full mt-8">
                  <hr className="border-t-2 border-gray-300 mb-4" />
                  <h3 className="text-xl font-semibold mb-4">Datos en {moneda_extranjera}</h3>
                  <div className="text-left space-y-4 text-gray-800">
                    <p className="text-lg flex justify-between items-center">
                      <span><span className="font-semibold">{tipo_cuenta}: </span>{numero_cuenta}</span>
                      <button onClick={() => copiarTexto(numero_cuenta)}>
                        <IoCopyOutline style={styleTextColor} className="ml-2" />
                      </button>
                    </p>

                    <p className="text-lg flex justify-between items-center">
                      <span><span className="font-semibold">Titular:</span> {titular_extranjera}</span>
                    </p>

                    <p className="text-lg flex justify-between items-center">
                      <span><span className="font-semibold">Banco:</span> {banco_extranjera}</span>
                    </p>
                  </div>
                </div>
              )}

              <button
                className={`py-4 rounded-lg font-bold hover:bg-transparent hover:transition hover:text-gray-900 border-2 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg border-pink-400 text-gray-800`}
                onClick={() => setIsOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};