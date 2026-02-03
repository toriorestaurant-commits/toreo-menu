import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import Slider from "./components/Slider";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";



export default function Home() {

  return(
    <div className="">
      <Slider />
      <Menu />
      <Testimonials />
      <Footer />
    </div>
  )
}
