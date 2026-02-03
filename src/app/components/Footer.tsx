import Image from "next/image";
import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";


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


export default function Footer() {
  return (
    <div className="bg-[#4d000b]">
        <footer className="mx-auto text-gray-300 py-6 max-w-[1200px] px-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
            <Image
                src="/logo-3.png" // update with your correct logo path
                alt="Logo"
                width={160}
                height={60}
                className="object-contain"
            />
            </div>

            {/* Social Links */}
            <div className="flex space-x-5">
            <Link href={'https://www.facebook.com/profile.php?id=61577266676954&locale=fr_FR#'} target="_blank">
                <Facebook className="w-5 h-5 hover:text-white transition-colors" />
            </Link>
            <Link href={'https://www.instagram.com/toreo_restaurant'} target="_blank">
                <Instagram className="w-5 h-5 hover:text-white transition-colors" />
            </Link>
            <Link
                href="https://www.tiktok.com/@toreo_restaurant"
                target="_blank"
                className=""
              >
                <TikTokIcon className="w-5 h-5 hover:text-white transition-colors" />
            </Link>
            </div>
        </div>

        {/* Copyright */}
            <div className=" h-px mt-10 rounded-full  bg-gray-400 "></div>
            <div className=" mt-6 pt-4 text-center text-sm text-gray-300">
                © {new Date().getFullYear()} TORÉO. Tous droits réservés.
            </div>
        </footer>
    </div>
  );
}
