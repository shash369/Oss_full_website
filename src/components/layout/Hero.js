import Image from "next/image";
import Right from "../icon/Right";
import Link from "next/link";
export default function Hero() {
  return (
    <section className="hero relative mt-4 min-h-screen md:grid md:grid-cols-2 overflow-hidden">
      <div className="py-20 pl-12 flex flex-col justify-center">
        <h1 className="text-6xl font-semibold leading-tight">
          Welcome <br /> to the world of <br />
          <span className="text-primary text-lime-500 hover:text-indigo-400 transition-all delay-100">OPEN SOURCE</span>
        </h1>
        <p className="mt-4 text-gray-500 text-2xl">
          Where innovation thrives on shared ideas and collaboration lights the path forward.
        </p>
      </div>
      <div className="relative md:absolute md:top-24 md:left-[23%] w-full h-96 mt-12 transition-all">
        <Image
          src="/main-bg1.png"
          layout="fill"
          objectFit="contain"
          alt="Main Background"
        />
      </div>
    </section>
  );
}
