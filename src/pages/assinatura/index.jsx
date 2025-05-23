export default function Planos() {
  const planos = [
    {

      titulo: "Plano Básico",
      preco: "R$ 29,90",
      descricao:
        "Escrever",
    },
    {
      titulo: "Plano Médio",
      preco: "R$ 59,90",
      descricao:
        "Escrever",
    },
    {
      titulo: "Plano Premium",
      preco: "R$ 69,90",
      descricao:
        "Escrever",
    },
  ];

  return (
    <section
      id="planos"
      className="flex flex-wrap justify-center gap-6 px-4 py-10 bg-gray-100"
    >
      {planos.map((plano, index) => (
        <article
          key={index}
          className="bg-white rounded-xl shadow-md w-full max-w-xs p-6 text-center hover:scale-105 transition-transform duration-300"
        >
          <h2 className="text-2xl font-bold mb-2">{plano.titulo}</h2>
          <h1 className="text-3xl font-extrabold text-[#1f3b57] mb-4">{plano.preco}</h1>
          <p className="text-sm text-gray-700 mb-6">{plano.descricao}</p>
          <button 
          onClick={() => window.location.href = "/pagamento"}
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] text-[#2e3947] font-bold py-2 px-6 rounded-lg hover:scale-105 transition-transform duration-200">
            Assinar
          </button>
        </article>
      ))}
    </section>
  );
}
