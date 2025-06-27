"use client";
import React, { useState } from "react";
import Image from "next/image";

interface CaseStudyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

const CaseStudyImage: React.FC<CaseStudyImageProps> = ({
  src,
  alt,
  width = 800,
  height = 400,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    if (window.innerWidth <= 768) {
      // Only open modal on mobile devices
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="rounded-lg max-w-6xl overflow-hidden flex justify-center bg-transparent w-full md:w-[80%] mx-auto cursor-pointer md:cursor-default"
        style={{
          zIndex: 3,
          position: "relative",
        }}
        onClick={handleImageClick}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full object-contain"
        />
      </div>

      {/* Modal for mobile zoom */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center md:hidden"
          onClick={handleCloseModal}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-2xl z-50"
              onClick={handleCloseModal}
            >
              ✕
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={src}
                alt={alt}
                width={width * 2}
                height={height * 2}
                className="w-full h-full object-contain"
                style={{
                  touchAction: "none",
                  WebkitTouchCallout: "none",
                  WebkitUserSelect: "none",
                  userSelect: "none",
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseStudyImage;
