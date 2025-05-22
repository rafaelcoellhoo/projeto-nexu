import { toast, ToastContainer } from "react-toastify"
import { FcGoogle } from "react-icons/fc"
import { useState } from "react"



export default function Login(){
   const [usuario, setUsuario] = useState("")
   const [senha, setSenha] = useState("")


   function Login(){
    if(!usuario || !senha)
      return toast.error("Preencha todos os campos")
    if(usuario.length < 8 || senha.length < 8){
      return toast.error("Usuario ou senha inválidos")

    }
     
    console.log(usuario)
    console.log(senha)
    return toast.success(" Login realizado com sucesso!")

  }







  return (
    <div className="w-full h-screen  bg-[#151c16]">
      <ToastContainer />
      <h1 className="text-2xl text-center bg-[#74c57d] p-4 font-bold">Faça login e encontre seu parceiro ideal para atividades físicas!</h1>
      <div className="w-full flex items-center justify-center ">
        

        <div className="w-[30%] h-full flex items-center justify-center mt-40">
          <div className="w-[70%] h-[450px] bg-[#141414] rounded-md">
            <div className="w-full h-[15%] flex items-center justify-center">
              <h1 className="text-[30px] text-[#74c57d] font-semibold">PÁGINA DE ACESSO</h1>
            </div>
            <div className="w-full h-[60%] p-[20px]">
              <label htmlFor="user" className="text-[#74c57d]">Usuário</label>
              <input
              onChange={(event)=> {setUsuario(event.target.value)}}
                placeholder="usuario"
                type="text"
                id="user"
                className="w-full rounded-md p-[10px] bg-[#d6c7c7] text-[#0e0e0e] mb-4"
              />
              <label htmlFor="pass" className="text-[#74c57d]">Senha</label>
              <input
              onChange={(event)=> {setSenha(event.target.value)}}
              
                placeholder="senha"


                type="password"
                id="pass"
                className="w-full rounded-md p-[10px] bg-[#d6c7c7] text-[#0e0e0e]"
              />
              
              <button
              onClick={Login}
                className="w-full h-[50px] rounded-lg mt-6 bg-[#87e099] text-[20px]
             font-semibold text-[#201b2c] cursor-pointer"
             
                
              >ENTRAR

              </button>
              
              <div className="w-full flex items-center justify-center text-[#74c57d] pt-2">
                <a href="">Esqueceu sua Senha?</a>
              </div>
            </div>
            

            <div className="w-full h-[25%] p-[20px] flex items-center">
              

              <button 
              onClick={() => window.location.href = "/"}
                className="w-full h-[60px] rounded-lg flex flex-col items-center pt-[2px] bg-[#87e099] text-[15px] 
           font-bold text-[#201b2c] cursor-pointer"
              >Entrar com Google
                <FcGoogle size={70}/>
                
              </button>
              
            </div>

          </div>
        </div>

      </div>
    </div>

  )
}