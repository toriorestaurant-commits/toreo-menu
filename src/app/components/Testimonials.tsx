"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useInView } from "@/app/hooks/useInView";

export default function Testimonials() {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, threshold: 0.06 });
  const testimonials = [
    {
      name: "Lyla",
      comment:
        "Le meilleur restaurant en Algérie ! Comparable aux meilleurs établissements des États-Unis. Bravo à toute l’équipe 👏",
      role: "Cliente enthousiaste",
    },
    {
      name: "Sarra Dorbane",
      comment:
        "10/10 sur tous les plans, je recommande absolument ! Mon nouveau spot préféré 💯",
      role: "Guide local",
    },
    {
      name: "Nadjib Bennaï",
      comment:
        "Excellente nourriture et service impeccable. Je recommande vivement. Parking disponible juste à côté.",
      role: "Client satisfait",
    },
    {
      name: "Hayet Nait-hamoud",
      comment:
        "Des plats délicieux, un service parfait et une ambiance agréable. J’y retournerai avec plaisir !",
      role: "Cliente fidèle",
    },
    {
      name: "Ikram K.",
      comment:
        "Une nourriture super délicieuse, un personnel très aimable et une atmosphère relaxante 💫",
      role: "Cliente ravie",
    },
  ];

  return (
    <section ref={ref} className={`bg-white py-16 px-6 md:px-20 ${inView ? 'animate-fade-in' : 'opacity-0'}`} id="testimonials">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Témoignages</h2>
        <p className="text-gray-600 mb-10">
          Découvrez ce que nos clients disent de leur expérience chez Toréo.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition p-6 h-full flex flex-col justify-between">
                <p className="text-gray-700 italic mb-4">“{t.comment}”</p>
                <div>
                  <h3 className="font-semibold text-gray-900">{t.name}</h3>
                  <span className="text-sm text-red-700">{t.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 0 !important;
          position: relative !important;
          margin-top: 2rem;
        }
        .swiper-pagination-bullet {
          background: #66000e !important; /* Matches your brand color */
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
