"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Initialize AOS immediately
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
            disable: 'mobile', // Disable on mobile to prevent positioning issues
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
            className={`fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden transition-all duration-1000 ${isExiting ? 'opacity-0' : 'opacity-100'
                }`}
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
            {/* Background animation */}
            <div
                className={`absolute inset-0 bg-black transition-all duration-1000 ${isExiting
                        ? 'scale-y-0 origin-center'
                        : 'scale-y-100 origin-center'
                    }`}
            />

            {/* Logo container */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-4 px-4 w-full max-w-[90%] md:max-w-[80%]">
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="0"
                    className={`relative w-[150px] h-[150px] md:w-[200px] md:h-[200px] transition-all duration-1000 ${isExiting ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
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
                    className={`text-white text-3xl md:text-5xl font-extrabold text-center transition-all duration-1000 ${isExiting ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    Code To Kloud
                </h1>

                <h2
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    className={`text-white text-lg md:text-xlg font-extrabold text-center transition-all duration-1000 ${isExiting ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    We drive your vision forward
                </h2>
            </div>
        </div>
    );
};

export default Loader; 