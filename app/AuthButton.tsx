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

// export const LogoutButton = () => {
//   return (
//     <button
//       className="bg-redSecondary border-b-4  border-redSecondary text-white text-md ease-in duration-200 p-2 px-20 mb-5 ml-2 rounded  shadow-3xlactive:translate-y-[2px] active:border-b-2 "
//       onClick={() => signOut()}
//     >
//       Logout
//     </button>
//   );
// };

export const LogoutButton = () => {
  return (
    <button
      aria-label="sign out"
      // Inline styling is used here because Tailwind CSS doesn't support text shadow.
      style={{ textShadow: "0px -2px #d7a83b" }}
      onClick={() => signOut()}
      className="bg-yellowPrimary border-b-4 border-yellowSecondary text-white text-md ease-in duration-200 p-3 rounded-lg shadow-3xlactive:translate-y-[2px] active:border-b-2"
    >
      Log out
    </button>
  );
};
