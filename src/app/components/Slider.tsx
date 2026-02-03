'use client'

import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12.75 2c.56 0 1.02.46 1.02 1.02v.44a5.98 5.98 0 0 0 4.74 5.86v2.07a8.02 8.02 0 0 1-4.74-1.52v6.77a5.02 5.02 0 1 1-5.02-5.02c.4 0 .8.06 1.18.16v2.12a2.9 2.9 0 1 0 1.82 2.7V3.02c0-.56.46-1.02 1.02-1.02h1.98z" />
  </svg>
)


function Slider() {
  return (
    <div className="">
      {/* Video Background */}
      <div className="h-lvh relative w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster="/poster.png"
        >
          <source src="/bg video.mp4" type="video/mp4" />
          <source src="/bg video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <div className="bg-black absolute w-full h-full top-0 left-0 opacity-75" />

        {/* Content overlay - moved inside the relative container so absolute positioning works */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          {/* Logo */}
          <div className="mb-4 flex justify-center">
            <div className="w-40 h-40 relative rounded-full  overflow-hidden">
              <Image src={'/logo-transparent.png'} fill alt="logo" />
            </div>
          </div>

          {/* Welcome Text */}
          <div className="mb-12 space-y-4">
            <h2 className="text-primary font-poppins text-2xl font-bold md:text-3xl tracking-wide animate-slide-in">
              Bienvenue à
            </h2>
            <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight animate-slide-in" style={{ animationDelay: "0.2s" }}>
              TORÉO
            </h1>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mb-12 animate-slide-in" style={{ animationDelay: "0.4s" }}>
            <Link href={'https://www.facebook.com/profile.php?id=61577266676954&locale=fr_FR#'} target="_blank" className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110">
              <Facebook className="w-5 h-5 text-gray-700" />
            </Link>
            <Link href={'https://www.instagram.com/toreo_restaurant'} target="_blank" className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110">
              <Instagram className="w-5 h-5 text-gray-700" />
            </Link>
            <Link
              href="https://www.tiktok.com/@toreo_restaurant"
              target="_blank"
              className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110"
            >
              <TikTokIcon className="w-5 h-5 text-gray-700 -mr-px" />
            </Link>
          </div>

          {/* CTA Button */}
          <div>
            <button
              onClick={() => {
                const el = document.getElementById("menu");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                } else {
                  // fallback: scroll to bottom if not found
                  window.scrollTo({ top: document.body.scrollHeight - 100, behavior: "smooth" });
                }
              }}
              className="bg-primary text-white font-medium px-10 py-5 text-lg rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Explorer le menu
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider