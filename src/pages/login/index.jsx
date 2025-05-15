import sports from "/public/sports.svg"
import { ToastContainer } from "react-toastify"


export default function Login(){
    return(
        <div className="w-full h-screen flex border rounded-md items-center justify-center bg-[#023d0f]">

            <div className="w-[30%] h-full flex items-center justify-center">
          <div className="w-[70%] h-[350px] bg-[#111111] rounded-md">
          <div className="w-full h-[15%] flex items-center justify-center">
            <h1 className="text-[30px] text-[#fffcfc] font-stretch-extra-condensed">LOGIN</h1>
          </div>
          <div className="w-full h-[60%] p-[20px]">
            <label htmlFor="user" className="text-white">Usuário</label>
            <input 
             
               type="text" 
               id="user" 
               className="w-full rounded-md p-[10px] bg-[#d6c7c7] text-white mb-4"
            />
            <label htmlFor="pass" className="text-white">Senha</label>
            <input 
                
              
              type="password"
              id="pass" 
            className="w-full rounded-md p-[10px] bg-[#d6c7c7] text-white"
            />
            <div className="w-full flex items-center justify-center text-white pt-1">
              <a href="">Esqueceu sua Senha?</a>
            </div>
          </div>
          
          <div className="w-full h-[25%] p-[20px] flex items-center">
            <button 
            className="w-full h-[50px] rounded-lg bg-[#fcf9fc] text-[18px] font-bold text-[#201b2c] ">LOGIN</button>
          </div>
          </div>
          </div>

      </div>









        
    )
}