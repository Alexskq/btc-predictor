import { FaQuestion } from "react-icons/fa";

export default function Instruction() {
  return (
    <button
      aria-label="Open game instructions"
      className="bg-sky-500 border-b-4 border-sky-700 text-white text-2xl transition-all ease-in duration-200 px-4 rounded-lg shadow-mdactive:translate-y-[2px] active:border-b-2"
    >
      <FaQuestion />
    </button>
  );
}
