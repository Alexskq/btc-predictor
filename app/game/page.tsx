import Game from "./Game";
import Instruction from "./instruction";
import Score from "./Score";
import Timer from "./Timer";

import { LogoutButton } from "../AuthButton"; // Import the LogoutButton component
import { SessionProvider } from "next-auth/react";

export default function Page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center  bg-slate-200">
      <div className="mx-auto bg-white w-[400px] h-[85px] rounded-xl p-4 shadow-md flex justify-between mb-5 border">
        <LogoutButton />
        {/* Use the LogoutButton component */}
        <Instruction />
      </div>
      <div className="mx-auto bg-white w-[400px] rounded-xl p-4 shadow-md flex justify-between mb-5 border">
        <Score />
        <Timer />
      </div>
      <div className="mx-auto bg-white w-[400px] rounded-xl p-4 shadow-md flex justify-between mb-5 border">
        <Game />
      </div>
    </div>
  );
}
