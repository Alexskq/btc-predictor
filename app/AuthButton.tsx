"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      className="bg-yellowPrimary border-b-4 border-yellowSecondary text-white text-md ease-in duration-200 p-2 px-20 mb-5 rounded  shadow-3xlactive:translate-y-[2px] active:border-b-2 "
      onClick={() => signIn()}
    >
      Play
    </button>
  );
};

export const LogoutButton = () => {
  return <button onClick={() => signOut()}>Logout</button>;
};
