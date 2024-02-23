import Image from "next/image";
import Banner from "./Home/banner";
import Demo from "./Home/Demo/demo";
import { auth } from "@/src/lib/auth";
import { LoginButton, LogoutButton } from "./AuthButton";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  // if (session?.user) {
  //   redirect("/game");
  // }
  return (
    <div className="bg-white">
      <Banner />
      <h1 className="text-black">
        {session?.user
          ? "Authentificated" + session?.user.email
          : "not authentificated"}
      </h1>
      {/* <div>{!session?.user ? <LoginButton /> : <LogoutButton />} </div> */}
      <div className="px-5">
        <Demo />;
      </div>
    </div>
  );
}
