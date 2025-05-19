import { CiCreditCard2 } from "react-icons/ci";
import { GoNumber } from "react-icons/go";


export default function assinatura() {
  return (

    <div className="flex items-center justify-center w-full h-full ">
      <div className="w-[50%] h-full flex items-center p-[40px] flex-col border-2 bg-zinc-200 border-amber-300">
        <h1 className="text-[35px] h-full font-bold bg-amber-300 ">
          Preencha os Campos para concluir o pagamento
        </h1>
        <div className="w-full h-full flex flex-col gap-4 mt-2">
          <div className="w-full h-full flex flex-col">
            <label htmlFor="nome" className="text-[20px] rounded-md bg-amber-300">

              Nome do Cartão
            </label>
            <input type="text"
              className="w-full h-[40px] rounded-md bg-[#D9D9D9]"
            /> 
          </div>
          <CiCreditCard2 size={50}  />
          <div className="w-full flex flex-col">
            <label htmlFor="numero" className="text-[20px] rounded-md bg-amber-300">
              Número do Cartão
            </label>
            <input type="text"
              className="w-full h-[40px] rounded-md bg-[#D9D9D9]" />
            <GoNumber />
          </div>
          <div className="flex">
            <div className="w-[70%] flex flex-col">
              <label htmlFor="" className="text-[20px] rounded-md bg-amber-300">
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
              <label htmlFor="" className="text-[20px] rounded-md bg-amber-300">
                CVV
              </label>
              <input
                type="number"
                className="w-full h-[40px] rounded-md bg-[#D9D9D9] pl-2"
              />
            </div>
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="" className="text-[20px] rounded-md bg-amber-300">
              Senha do cartão
            </label>
            <input
              type="password"
              className="w-full h-[40px] rounded-md pl-2 bg-[#D9D9D9]"
            />
          </div>
        </div>
      </div>
    </div>

  )
}