import Image from "next/image";
import Banner from "./Home/banner";
import Demo from "./Home/Demo/demo";

export default function Home() {
  return (
    <div className="bg-white">
      <Banner />
      <div className="px-5">
        <Demo />;
      </div>
    </div>
  );
}
