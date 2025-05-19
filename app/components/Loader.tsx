"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        });

        // Set a timer for 3 seconds
        const timer = setTimeout(() => {
            setIsExiting(true);
            // Wait for exit animation to complete
            setTimeout(() => {
                setIsLoading(false);
                onLoadingComplete();
            }, 1000); // Match this with AOS duration
        }, 3000);

        return () => clearTimeout(timer);
    }, [onLoadingComplete]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center overflow-hidden transition-all duration-1000 ${isExiting ? 'opacity-0' : 'opacity-100'
                }`}
        >
            {/* Background animation */}
            <div
                className={`absolute inset-0 bg-black transition-all duration-1000 ${isExiting
                    ? 'scale-y-0 origin-center'
                    : 'scale-y-100 origin-center'
                    }`}
            />

            {/* Logo container */}
            <div className="flex flex-col items-center gap-4">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="0"
                    className={`relative w-[200px] h-[200px] transition-all duration-1000 ${isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                        }`}
                >
                    <Image
                        src="/Images/logo_white.png"
                        alt="Loader"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>
                <h1
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="100"
                    className={`text-white text-5xl font-extrabold transition-all duration-1000 ${isExiting ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    Code To Kloud
                </h1>

                <h2
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-delay="200"
                    className={`text-white text-xlg font-extrabold transition-all duration-1000 ${isExiting ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    We drive your vision forward
                </h2>
            </div>
        </div>
    );
};

export default Loader; 