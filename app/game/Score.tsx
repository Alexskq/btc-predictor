// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default async function getScore(userId: string) {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: userId,
//     },
//   });

//   return user?.score;
// }

// // Utilisez la fonction
// const score = await getScore("votre-id-utilisateur");
// console.log(score);
import { auth } from "@/src/lib/auth";
export default async function Score() {
  const session = await auth();

  return <p className="font-semibold text-zinc-800">Score :{user.score}</p>;
}
