
import { ToastContainer } from "react-toastify"
import { FcGoogle } from "react-icons/fc"
import { useState } from "react"


export default function Login() {
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  

  function entrar(){
    window.location.href = "/assinatura"

     
  }





  return (
    <div className="w-full h-screen flex border rounded-md items-center justify-center bg-[#151c16]">
      <ToastContainer
      position="top-right"
      autoClose={5000}
      theme="colored"
      
      />
   
    

      <div className="w-[30%] h-full flex items-center justify-center">
        <div className="w-[70%] h-[450px] bg-[#141414] rounded-md">
          <div className="w-full h-[15%] flex items-center justify-center">
            <h1 className="text-[30px] text-[#74c57d] font-stretch-extra-condensed">Bem vindo(a) de volta!</h1>
          </div>
          <div className="w-full h-[60%] p-[20px]">
            <label htmlFor="user" className="text-[#74c57d]">Usuário</label>
            <input

              type="text"
              id="user"
              className="w-full rounded-md p-[10px] bg-[#d6c7c7] text-[#0e0e0e] mb-4"
            />
            <label htmlFor="pass" className="text-[#74c57d]">Senha</label>
            <input


              type="password"
              id="pass"
              className="w-full rounded-md p-[10px] bg-[#d6c7c7] text-[#0e0e0e]"
            />
            <button
              className="w-full h-[50px] rounded-lg mt-6 bg-[#87e099] text-[20px]
             font-semibold text-[#201b2c] cursor-pointer"
             onClick={entrar}
             >ENTRAR

            </button>
            <div className="w-full flex items-center justify-center text-[#74c57d] pt-2">
              <a href="">Esqueceu sua Senha?</a>
            </div>
          </div>

          <div className="w-full h-[25%] p-[20px] flex items-center">

            <button
              className="w-full h-[50px] rounded-lg flex flex-col items-center pt-[2px] bg-[#87e099] text-[15px] 
           font-semibold text-[#201b2c] cursor-pointer"
            >Entrar com Google
              <FcGoogle size={50}/>
            </button>
          </div>

        </div>
      </div>

    </div>










  )
}