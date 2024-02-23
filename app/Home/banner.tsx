import Image from "next/image";
import Link from "next/link";
import { LoginButton, LogoutButton } from "../AuthButton";
import { auth } from "@/src/lib/auth";
import { redirect } from "next/navigation";

export default async function Banner() {
  const session = await auth();

  return (
    <div className=" h-400 flex flex-col justify-center items-center gap-5 bg-zinc-800 shadow-xl py-10">
      <Image
        src="/bitcoin.png"
        alt="Bitcoin"
        width={200}
        height={200}
        className="banner__image mb-5"
      />

      <h1 className=" text-white text-4xl font-bold uppercase text-40 leading-3">
        BTC Predictor
      </h1>
      <h2 className="text-white font-medium text-lg tracking-wide">
        Predict the Future of Bitcoin in Minutes
      </h2>
      <div className="flex">
        {session?.user ? (
          <Link
            href="/game"
            className="bg-yellowPrimary border-b-4 border-yellowSecondary text-white text-md ease-in duration-200 p-2 px-20 mb-5 rounded  shadow-3xlactive:translate-y-[2px] active:border-b-2 "
          >
            Start Game
          </Link>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
}
