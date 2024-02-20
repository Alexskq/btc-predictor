import Image from "next/image";
import { gameFeatures } from "./demo-data";

export default function Demo() {
  return (
    <div className="max-w-screen-md my-10 mx-auto">
      <Image
        src="/demo.gif"
        width={500}
        height={500}
        alt="Gif Demo game"
        className="w-full h-full object-cover rounded-sm border shadow-lg"
      />
      <div className="my-8 border-b-2">
        <h2 className="text-xl font-bold leading-10 text-zinc-800">
          Game Feature & How to play
        </h2>
      </div>
      <ul className="flex flex-col list-none gap-6">
        {gameFeatures.map((feature, index) => (
          <li key={index}>
            <span className="text-zinc-800 font-bold leading-7">
              {feature.title}
            </span>
            <p className=" text-zinc-500">{feature.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
