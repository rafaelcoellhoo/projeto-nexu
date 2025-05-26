import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (!usuario || !senha) {
      return toast.error("Preencha todos os campos");
    }

    if (usuario.length < 8 || senha.length < 8) {
      return toast.error("Usuário ou senha inválidos");
    }

    console.log(usuario);
    console.log(senha);
    return toast.success("Login realizado com sucesso!");
  }

  return (
    <div className="min-h-screen w-full bg-[#151c16] flex flex-col items-center">
      <ToastContainer />
      
      <header className="w-full bg-[#74c57d] p-4 text-center">
        <h1 className="text-2xl font-bold text-black">
          Faça login e encontre seu parceiro ideal para atividades físicas!
        </h1>
      </header>

      <main className="flex-grow flex items-center justify-center w-full px-4">
        <div className="w-full max-w-md bg-[#141414] rounded-md shadow-md p-6 mt-10">
          {/* Título */}
          <div className="text-center mb-6">
            <h2 className="text-2xl text-[#74c57d] font-semibold">
              PÁGINA DE ACESSO
            </h2>
          </div>

          {/* Formulário */}
          <form className="space-y-4">
            <div>
              <label htmlFor="user" className="text-[#74c57d] block mb-1">
                Usuário
              </label>
              <input
                type="text"
                id="user"
                placeholder="usuario"
                onChange={(e) => setUsuario(e.target.value)}
                className="w-full p-3 rounded-md bg-[#d6c7c7] text-[#0e0e0e] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="pass" className="text-[#74c57d] block mb-1">
                Senha
              </label>
              <input
                type="password"
                id="pass"
                placeholder="senha"
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-3 rounded-md bg-[#d6c7c7] text-[#0e0e0e] focus:outline-none"
              />
            </div>

            <button
              type="button"
              onClick={handleLogin}
              className="w-full py-3 mt-2 bg-[#87e099] text-[#201b2c] font-semibold text-lg rounded-md hover:bg-[#74c57d] transition"
            >
              ENTRAR
            </button>

            <div className="text-center pt-2">
              <a href="#" className="text-[#74c57d] text-sm hover:underline">
                Esqueceu sua Senha?
              </a>
            </div>
          </form>

          {/* Google Button */}
          <div className="mt-6">
            <button
              onClick={() => window.location.href = "/"}
              className="w-full flex items-center justify-center gap-3 py-3 bg-[#87e099] text-[#201b2c] font-semibold rounded-md hover:bg-[#74c57d] transition"
            >
              <FcGoogle size={24} />
              Entrar com Google
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
