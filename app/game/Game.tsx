export default async function Game() {
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  // console.log(data.bpi.USD.rate_float);
  const price = parseInt(data.bpi.USD.rate_float);
  // console.log(price);
  return (
    <div className="relative mx-auto bg-white max-w-4xl h-[180px] rounded-xl p-4 flex justify-center mb-5 w-[400px]">
      <span className="absolute top-4 left-4 text-md font-semibold text-zinc-800">
        BTC price in USD
      </span>
      <span className="text-4xl text-center font-semibold my-auto pt-6 text-zinc-800">
        {price}
      </span>
    </div>
  );
}
