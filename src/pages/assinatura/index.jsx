import { useState } from "react"
import { BsQrCode } from "react-icons/bs";




export default function assinatura() {
  const [pix, setPix] = useState(false)
  
  return (


    <div className="w-full h-screen bg-[#d9d9d9] grid grid-cols-1">
      <div className="flex items-center justify-center w-full h-full ">
        <div className="w-[35%]  rounded-lg flex items-center  p-[40px] flex-col border-2 bg-zinc-200 border-[#DAA520]">
          <div className="flex gap-3">
          <button onClick={() => setPix(false)} className="bg-[#daa520] hover:bg-[#bf2034] text-white font-bold py-2 px-4 rounded cursor-pointer">
            Cartão
          </button>
          <button onClick={() => setPix(true)} className="bg-[#daa520] hover:bg-[#bf2034] text-white font-bold py-2 px-4 rounded cursor-pointer">
            Pix
          </button>
          </div>
          {pix ? <div className="mt-8 flex flex-col items-center justify-center"><BsQrCode size={230} color="black" />bdhhavbhBSHJGHDGDSBDHHGHDDGSHGBbhjBAHB
          jdshvbhdbhvdbhadsjrbvhbwhfbhwdhbadshlbvahhebL
          </div> : <div className="w-full h-full flex flex-col gap-4 mt-2">
            <div className="w-full h-full flex flex-col">
              <label htmlFor="nome" className="text-[20px] rounded-md text-black">
                Nome do Cartão
              </label>
              <input type="text"
                className="w-full h-[40px] rounded-md bg-[#D9D9D9]"
              />
            </div>
            <div className="w-full flex flex-col">
              <label htmlFor="numero" className="text-[20px] rounded-md text-black">
                Número do Cartão
              </label>
              <input type="number"
                className="w-full h-[40px] rounded-md bg-[#D9D9D9]" />
            </div>
            <div className="flex">
              <div className="w-[70%] flex flex-col">
                <label htmlFor="" className="text-[20px] rounded-md  text-black">
                  Data de expiração
                </label>
                <div className="w-full flex gap-2">
                  <input
                    type="number"
                    placeholder="MM"
                    className="w-[50%] pl-2 h-[40px] rounded-md bg-[#D9D9D9]"
                  />
                  <input
                    type="number"
                    placeholder="AA"
                    className="w-[50%] pl-2 h-[40px] rounded-md bg-[#D9D9D9]"
                  />
                </div>
              </div>
              <div className="w-[30%] pl-2 flex flex-col">
                <label htmlFor="" className="text-[20px] rounded-md text-black">
                  CVV
                </label>
                <input
                  type="number"
                  className="w-full h-[40px] rounded-md bg-[#D9D9D9] pl-2"
                />
              </div>
            </div>
            <button className="bg-[#daa520] hover:bg-[#bf2034] text-white font-bold py-2 px-4 rounded cursor-pointer">
              Finalizar Compra
            </button>
          </div>}
        </div>
      </div>
    </div>
  )
}