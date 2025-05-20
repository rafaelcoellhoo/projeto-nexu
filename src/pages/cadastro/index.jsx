
import PageWrapper from "@/components/PageWrapper";

export default function Cadastro() {
  return (
    <PageWrapper>
      <div className="w-full h-full flex justify-center items-center p-20 bg-gradient-to-r from-indigo-800 to-purple-800">
        <div className="w-full max-w-[600px] bg-white rounded-xl p-10 shadow-xl">
          <h1 className="font-bold text-gray-800 text-4xl text-center mb-">
            PlayMatch Nx
            </h1>
          <h1 className="font-bold text-gray-800 text-3xl text-center mb-8">
            Crie uma nova conta
          </h1>
          
          <div className="flex flex-col space-y-6">
            <div>
              <label className="text-gray-700 font-semibold text-lg">Nome</label>
              <input
                placeholder="Digite o seu nome"
                type="text"
                className="w-full h-12 bg-gray-100 p-4 rounded-xl mt-2"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold text-lg">Sobrenome</label>
              <input
                placeholder="Digite o seu sobrenome"
                type="text"
                className="w-full h-12 bg-gray-100 p-4 rounded-xl mt-2"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold text-lg">Email</label>
              <input
                placeholder="Digite seu e-mail"
                type="email"
                className="w-full h-12 bg-gray-100 p-4 rounded-xl mt-2"
              />
            </div>

            <div>
              <label className="text-gray-700 font-semibold text-lg">Senha</label>
              <input
                placeholder="Digite sua senha"
                type="password"
                className="w-full h-12 bg-gray-100 p-4 rounded-xl mt-2"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center space-y-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-2xl transition duration-300">
              Cadastrar
            </button>
            <p className="text-gray-600 text-sm">
              Já tem uma conta?{" "}
              <a className="text-indigo-600 hover:underline" href="#">
                Entrar
              </a>
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
