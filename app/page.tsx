import Image from "next/image";
import Banner from "./Home/banner";
import Demo from "./Home/Demo/demo";
import { auth } from "@/src/lib/auth";
import { LoginButton, LogoutButton } from "./AuthButton";

export default async function Home() {
  const session = await auth();
  return (
    <div className="bg-white">
      <Banner />
      <h1>
        {session?.user
          ? "Authentificated" + session?.user.email
          : "not authentificated"}
      </h1>
      <div>{!session?.user ? <LoginButton /> : <LogoutButton />} </div>
      <div className="px-5">
        <Demo />;
      </div>
    </div>
  );
}
