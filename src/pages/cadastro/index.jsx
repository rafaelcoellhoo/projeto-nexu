import Link from "next/link";
import { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";{
}

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  function mostrarOuOcultarSenha() {
    setMostrarSenha(!mostrarSenha);
  }

  async function enviarFormulario(evento) {
    evento.preventDefault();
    const formulario = evento.target;
    const dados = {
      nome: formulario.nome.value,
      sobrenome: formulario.sobrenome.value,
      emailOuNumero: formulario.emailOuNumero.value,
      confirmarEmailOuNumero: formulario.confirmarEmailOuNumero.value,
      senha: formulario.senha.value,
      genero: formulario.genero.value,
    };
    if (!dados.nome || !dados.sobrenome) {
      alert("o Nome é obrigatório");
      return;
    }
    if (!dados.senha){
      alert("senha errada ")
    }
    if (!dados.emailoutelefone){
      alert("email ou telefone errado")
    }
    console.log({ dados });
    const senhaForte = dados.senha.length >= 8 && /\d/.test(dados.senha) && /[A-Z]/.test(dados.senha);

if (!senhaForte) {
  alert("A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula e um número.");
  return;
}
  }

  return (
    <div className="flex items-center justify-center h-screen w-full text-white bg-[#2E3947]">
      <div className="w-full flex flex-col items-center justify-center hidden md:flex">
        <p className="flex font-bold text-[#cead44]">conecte-se com pessoas, descubra novos esportes
        </p>
        <p className="flex font-bold text-[#cead44]">   e transforme movimento em bem-estar.</p>
        <img src={"img-nexu.jpg"} />
      </div>
      <div className="w-full h-full flex items-center justify-center bg-[#2E3947]">
        <div className="max-w-[500px]">
          <h1 className="text-3xl text-white">Abra uma conta</h1>
          <p className="mt-2 font-bold">Crie sua conta grátis</p>
          <form
            onSubmit={enviarFormulario}
            className="flex flex-col gap-2 mt-4"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                name="nome"
                placeholder="Nome"
                className="w-full border border-gray-500 rounded-md placeholder:text-white py-1 px-2"
              />
              <input
                type="text"
                name="sobrenome"
                placeholder="Sobrenome"
                className="w-full border border-gray-500 rounded-md placeholder:text-white py-1 px-2"
              />

            </div>
            <div>
              <input
                type="text"
                name="emailOuNumero"
                placeholder="E-mail ou número de telefone"
                className="w-full border border-gray-500 rounded-md placeholder:text-white py-1 px-2"
              />
            </div>
            <div>
              <input
                type="text"
                name="confirmarEmailOuNumero"
                placeholder="Insira novamente E-mail ou número de telefone"
                className="w-full border border-gray-500 rounded-md placeholder:text-white py-1 px-2"
              />
            </div>
            <div className="relative">
              <input
                type={mostrarSenha ? "text" : "password"}
                placeholder="Nova senha"
                name="senha"
                className="w-full border border-gray-500 rounded-md placeholder:text-white py-1 px-2"
              />
              <div className="">
               <label className="font-bold" >Data de nascimento</label>
               <input
                type="date"
                value={Date}
                name="dados"
                className=" border border-gray-500 w-[150px] flex rounded-md placeholder:text-white py-1 px-2"
              />
              </div>
              <p
                className="absolute right-1 top-1 cursor-pointer"
                onClick={mostrarOuOcultarSenha}
              >
                {mostrarSenha ? (
                  <IoIosEyeOff size={28} />
                ) : (
                  <IoIosEye size={28} />
                )}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <input type="radio" name="genero" value={"M"} id="masculino" />
                <label htmlFor="masculino">Masculino</label>
              </div>
              <div className="flex items-center gap-1">
                <input type="radio" name="genero" value={"F"} id="feminino" />
                <label htmlFor="feminino">Feminino</label>
              </div>
            </div>
            <div>
              <p>
                Ao se cadastrar, você concorda com os{" "}
                <Link href={"#"} className="underline text-blue-500">
                  Termos de Uso
                </Link>{" "}
                da nossa plataforma.
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#cead44] py-1 px-4 text-white font-bold text-xl rounded-md cursor-pointer hover:brightness-75 transition-all"
              >
                Abrir uma conta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
