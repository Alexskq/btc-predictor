export default function GuessButton() {
  return (
    <div className=" mx-auto bg-white w-[400px] h-[100px] rounded-xl p-4 flex justify-between">
      <button className="bg-redPrimary relative px-10 py-2 m-2 float-left rounded-lg text-white text-lg shadow-md  ease-in duration-200 w-[150px]">
        DOWN
      </button>
      <button className="bg-greenPrimary relative px-10 py-2 m-2 float-left rounded-lg text-white text-lg shadow-md  ease-in duration-200 w-[150px]">
        UP
      </button>
    </div>
  );
}
