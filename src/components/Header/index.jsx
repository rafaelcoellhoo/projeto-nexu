import { CgGym } from "react-icons/cg";


export default function Header({ showButton = true }) {
  return (
    <header className="w-full h-[70px] flex items-center justify-between pr-2 bg-[#478500]">
      <div
        onClick={() => (window.location.href = "/")}
        className="flex cursor-pointer h-full gap-2 items-center justify-center pl-2"
      >
        <CgGym
          onClick={() => (window.location.href = "/")}
          color="#9B87F5"
          size={35}
        />
        <h2
          onClick={() => (window.location.href = "/")}
          className="font-bold text-[20px]"
        >
          Nexu
        </h2>
      </div>
      
    </header>
  );
}
