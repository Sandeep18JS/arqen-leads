import Image from "next/image";
import Navbar from "./Navbar";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <Navbar />
            <Image
                fill
                src="/bgg.jpg"
                alt="Dubai South"
                className="absolute inset-0 h-full w-full object-cover "
            />


            <div className="relative top-10 z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-[40px] md:text-[50px] tracking-[0.2em] font-medium uppercase">
                    Live Ahead ,Live Arqen
                </h1>

                <button className="mt-10 rounded-full border-2 font-medium border-white px-8 py-3 text-md uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white hover:text-black">
                    Arqen Brochures
                </button>
            </div>

            <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 ">
                <Image
                    width={100}
                    height={100}
                    src="/scroll.png"
                    alt="scroll down"
                    className="w-[40px] h-auto"
                />
            </div>
        </section>
    );
}