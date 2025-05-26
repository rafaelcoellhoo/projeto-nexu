import { useState } from "react";
import { BsQrCode } from "react-icons/bs";

export default function Assinatura() {
  const [pix, setPix] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#d9d9d9] flex items-center justify-center px-4">
      <div className="w-full sm:w-[27%] rounded-lg p-6 flex flex-col items-center border-2 bg-[#2e3947] border-[#2e3947]">
        <div className="flex gap-3 flex-wrap justify-center">
          <button
            onClick={() => setPix(false)}
            className="bg-[#daa520] hover:bg-[#bf2034] text-white font-bold py-2 px-6 rounded cursor-pointer w-full sm:w-auto"
          >
            Cartão
          </button>
          <button
            onClick={() => setPix(true)}
            className="bg-[#daa520] hover:bg-[#bf2034] text-white font-bold py-2 px-6 rounded cursor-pointer w-full sm:w-auto"
          >
            Pix
          </button>
        </div>

        {pix ? (
          <div className="mt-8 flex flex-col items-center justify-center text-center text-sm px-2">
            <BsQrCode size={230} color="black" />
            <p className="mt-4">
              bdhhavbhBSHJGHDGDSBDHHGHDDGSHGBbhjBAHB
              <br />
              jdshvbhdbhvdbhadsjrbvhbwhfbhwdhbadshlbvahhebL
            </p>
            <button className="mt-2 bg-[#daa520] hover:bg-[#bf2034] text-white font-bold py-3 px-4 rounded cursor-pointer w-full">
              Finalizar Compra
            </button>
          </div>
        ) : (
          <div className="w-full flex flex-col gap-4 mt-6">
            <div className="flex flex-col">
              <label htmlFor="nome" className="text-lg text-black">
                Nome do Cartão
              </label>
              <input
                type="text"
                className="w-full h-[40px] rounded-md bg-[#D9D9D9] pl-2"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="numero" className="text-lg text-black">
                Número do Cartão
              </label>
              <input
                type="number"
                className="w-full h-[40px] rounded-md bg-[#D9D9D9] pl-2"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-[70%] flex flex-col">
                <label className="text-lg text-black">Data de expiração</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="MM"
                    className="w-1/2 h-[40px] pl-2 rounded-md bg-[#D9D9D9]"
                  />
                  <input
                    type="number"
                    placeholder="AA"
                    className="w-1/2 h-[40px] pl-2 rounded-md bg-[#D9D9D9]"
                  />
                </div>
              </div>

              <div className="w-full sm:w-[30%] flex flex-col">
                <label className="text-lg text-black">CVV</label>
                <input
                  type="number"
                  placeholder="000"
                  className="w-full h-[40px] rounded-md bg-[#D9D9D9] pl-2"
                />
              </div>
            </div>

            <button className="mt-2 bg-[#daa520] hover:bg-[#bf2034] text-white font-bold py-3 px-4 rounded cursor-pointer w-full">
              Finalizar Compra
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
