import { CgGym } from "react-icons/cg";

export default function Header() {
  return (
    <header className="w-full h-[70px] flex items-center justify-between pr-2 bg-[#478500]">
      <div
        onClick={() => (window.location.href = "/")}
        className="flex cursor-pointer h-full gap-2 items-center justify-center pl-2"
      >
        <CgGym
          onClick={() => (window.location.href = "/")}
          color="black"
          size={35}
        />
        <h2
          onClick={() => (window.location.href = "/")}
          className="font-bold text-[20px]"
        >
          PlayMatch Nx
        </h2>
        <button
          onClick={() => (window.location.href = "/login")}
          className="w-[150px] h-[40px] rounded-md bg-amber-600 cursor-pointer"
        >
          Login
        </button>
        <button
          onClick={() => (window.location.href = "/cadastro")}
          className="w-[150px] h-[40px] rounded-md bg-amber-900 cursor-pointer"
        >
          Cadastre-se
        </button>
      </div>
    </header>
  );
}
