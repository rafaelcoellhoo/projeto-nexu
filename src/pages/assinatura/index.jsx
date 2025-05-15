export default function assinatura () {
    return (
        
            <div className="w-[60%] h-full flex items-center p-[40px] flex-col">
                <h1 className="text-[45px] w-[60%] h-[150px] font-bold ">
                    Preencha os Campos para concluir o pagamento
                </h1>
                <div className="w-[65%] h-auto min-h-[200px] flex flex-col gap-4 mt-2">
                    <div className="w-full flex flex-col">
                        <label htmlFor="nome" className="text-[20px] rounded-md bg-amber-300">
                            Nome do Cartão
                        </label>
                        <input type="text" 
                        className="w-full h-[40px] rounded-md bg-[#D9D9D9]"/>
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="numero" className="text-[20px] rounded-md bg-amber-300">
                            Número do Cartão
                        </label>
                        <input type="text" 
                        className="w-full h-[40px] rounded-md bg-[#D9D9D9]"/>
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
        
    )
}