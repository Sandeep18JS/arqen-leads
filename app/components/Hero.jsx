"use client";

import Image from "next/image";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function Hero() {
    const [isBlurred, setIsBlurred] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsBlurred(true);
            } else {
                setIsBlurred(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToContact = () => {
        const section = document.getElementById("contact");

        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <Navbar />

            {/* Background Image */}
            <Image
                width={1600}
                height={1600}
                src="/bgg.jpg"
                alt="Dubai South"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 
                    }`}
            />

            {/* Optional Dark Overlay */}
            <div
                className={`absolute inset-0 bg-white/10 z-10 transition-all duration-500 ${isBlurred ? "backdrop-blur-[20px]" : "backdrop-blur-0"
                    }`}
            />
            {/* Hero Content */}
            <div className="relative top-10 z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
                <h1 className="  font-roboto md:hidden text-[38px] md:text-[50px] md:tracking-[0.1em] font-medium uppercase">
                    Live Ahead,<br />Live Arqen
                </h1>
                <h1 className="  font-roboto hidden md:block text-[38px] md:text-[50px] md:tracking-[0.1em] font-medium uppercase">
                    Live Ahead,Live Arqen
                </h1>
                <button onClick={scrollToContact} className="cursor-pointer mt-10 rounded-full border-2 font-medium border-white px-8 py-3 md:text-md uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white hover:text-black">
                    Arqen Brochures
                </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
                <Image
                    width={100}
                    height={100}
                    src="/scroll.png"
                    alt="scroll down"
                    className="w-[36px] md:w-[40px] h-auto"
                />
            </div>

            {/* Contact Button */}
            <button
                onClick={scrollToContact}
                className="hidden md:block fixed -right-12 md:-right-12 top-1/2 z-50 border md:border-[#3A453C]  -translate-y-1/2 -rotate-90 rounded-t-xl bg-white px-2 md:pt-2 py-2 md:py-3 text-[#3A453C] shadow-lg transition-all duration-300 cursor-pointer hover:bg-[#3A453C] hover:text-white"
            >
                <span className="text-sm md:text-md font-bold tracking-[0.1em] uppercase">
                    Contact Us
                </span>
            </button>
        </section>
    );
}