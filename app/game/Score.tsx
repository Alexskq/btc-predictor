import { auth } from "@/src/lib/auth";
export default async function Score() {
  const session = await auth();

  return (
    <p className="font-semibold text-zinc-800">Score :{session?.user.score}</p>
  );
}
