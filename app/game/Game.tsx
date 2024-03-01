export default async function Game() {
  // ! connect coinBase api && test it
  const response = await fetch(
    "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();
  console.log(data);
  return data.bpi.USD.rate_float;
}
