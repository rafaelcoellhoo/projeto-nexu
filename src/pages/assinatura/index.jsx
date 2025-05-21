




export default function assinatura() {
  return (
    <div>
      <h1 className="text-2x1 text-center bg-[#aadfa8] p-4 font-bold">Selecione a Forma de Pagamento</h1>
      <div className="w-full bg-[#d9d9d9] grid grid-cols-1">
        <div className="flex items-center justify-center w-full h-full ">
          <div className="w-[35%] h-full rounded-lg flex items-center p-[40px] flex-col border-2 bg-zinc-200 border-[#DAA520]">
            <h1 className="text-[25px] h-full font-bold rounded text-[#DAA520] ">
              *Cartão*
            </h1>
            <h1 className="text-[25px] h-full font-bold rounded text-[#BF2034]">
              *Pix*
            </h1>
            <div className="w-full h-full flex flex-col gap-4 mt-2">
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
              <button className="w-full h-[50px] rounded-lg bg-amber-100 text-[20px] font-semibold text-[#201b2c] cursor-pointer">
                Finalizar Compra
              </button>
            </div>
          </div>
        </div>
       </div>
      </div>
  )
}