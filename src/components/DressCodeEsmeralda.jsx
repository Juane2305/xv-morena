import React from 'react'

const dressCodeEsmeralda = ({dressCode, icon}) => {
  return (
    <div className="p-6 text-center rounded-md max-w-md mx-auto">
        <h2 className="text-[#4b5147] font-vintageText text-4xl mb-3">Código de Vestimenta</h2>
        <p className="text-[#4b5147] mb-4 text-2xl">{dressCode}</p>
        <div className="flex items-center gap-4 justify-center">
            <img src={icon} alt="Traje" className="w-32 h-32 " />   
        </div>
        <p className="text-[#4b5147] mt-4 text-lg italic">
          No se permite color rosa, dorado ni beige.
        </p>
  </div>
  )
}

export default dressCodeEsmeralda;