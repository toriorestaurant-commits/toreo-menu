"use client";

import React from "react";
import { createPortal } from "react-dom";
import { useInView } from "@/app/hooks/useInView";

interface MenuItemProps {
  item: {
    name: string;
    price: string;
    description: string;
    image: string;
    subCategoryName?: string;
  };
  index: number;
}

export const MenuItem = ({ item, index }: MenuItemProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, threshold: 0.12 });

  const [clicked, setClicked] = React.useState(false);
  const [animate, setAnimate] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState(item.image || "/logo-toreo.png");
  const [imageError, setImageError] = React.useState(false);

  // Handle image load error
  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
      setImageSrc("/logo.jpg");
    }
  };

  // Reset error state if item.image changes
  React.useEffect(() => {
    if (item.image && item.image.length > 0) {
      setImageSrc(item.image);
      setImageError(false);
    } else {
      setImageSrc("/logo.jpg");
    }
  }, [item.image]);

  const openModal = () => {
    setClicked(true);
    setTimeout(() => setAnimate(true), 10); // allow DOM to mount before animating
  };

  const closeModal = () => {
    setAnimate(false);
    setTimeout(() => setClicked(false), 200); // wait for animation to finish
  };

  return (
    <>
      {/* Portal */}
      {clicked &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              onClick={closeModal}
              className={`
                fixed inset-0 bg-black 
                transition-opacity duration-200 z-[9999]
                ${animate ? "opacity-90" : "opacity-0"}
              `}
            />

            {/* Image */}
            <img
              src={imageSrc}
              alt={item.name}
              onError={handleImageError}
              onClick={closeModal}
              className={`
                fixed top-1/2 left-1/2 
                -translate-x-1/2 -translate-y-1/2 
                rounded-lg object-cover shadow-2xl cursor-pointer
                transition-all duration-300 z-[10000]
                w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]
                ${animate ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              `}
            />
          </>,
          document.body
        )}

      {/* Menu item card */}
      <div
        ref={ref}
        className={`flex gap-3 p-5 transition-all duration-300 ${
          inView ? "opacity-100 translate-y-0 animate-slide-in" : "opacity-0 translate-y-6"
        }`}
        style={{ animationDelay: `${index * 0.08}s` }}
      >
        <div className="shrink-0 cursor-pointer" onClick={openModal}>
          <img
            src={imageSrc}
            alt={item.name}
            onError={handleImageError}
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover border border-gray-200 hover:border-primary transition-all duration-200 hover:scale-105"
          />
        </div>

        <div className="flex-1 min-w-0 flex flex-col">
          <h3 className="font-bold md:text-lg text-gray-800 mb-1 sm:text-base text-sm">
            {item.name}
          </h3>

          <div className="flex justify-between items-center mb-1">
            <span className="w-20 h-1 rounded-full bg-primary"></span>
            <span className="text-primary font-bold md:text-xl text-lg ml-auto">
              {item.price}DA
            </span>
          </div>

          <div className="w-full h-px bg-gray-200 mb-3"></div>

          <p className="text-[13px] sm:text-sm md:text-base text-gray-500 leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </>
  );
};