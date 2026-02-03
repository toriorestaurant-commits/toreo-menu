"use client";

// MenuCategory.tsx
import { MenuItem } from "./MenuItem";
import { useInView } from "@/app/hooks/useInView";

// Define the two possible item types for type safety
interface RegularItem {
  name: string;
  price: string;
  description: string;
  image: string;
  section?: string;
}

interface HeaderItem {
  type: 'header' | 'subheader' | 'note';
  name: string;
  description?: string;
  note?: string; 
}

interface MenuCategoryProps {
  category: string;
  items: (RegularItem | HeaderItem)[];
}

// Helper component for displaying main section titles and notes with custom styling
const SectionTitle = ({ item }: { item: HeaderItem }) => {
    
    // Default classes for the container
    let containerClasses = "w-full mx-auto py-5 px-6 my-6 rounded-lg shadow-lg text-center transition-all duration-300";
    let titleClasses = "font-extrabold text-3xl md:text-4xl pb-1";
    let noteClasses = "text-sm italic mt-2 p-2 rounded";

    if (item.type === 'header') {
        // Most prominent title style: large, centered, distinct background
        containerClasses += " bg-primary text-white border-b-8 border-yellow-400";
        titleClasses = "text-white font-extrabold text-3xl md:text-4xl uppercase tracking-wider";
        noteClasses += " bg-white/10 text-yellow-100";
    } else if (item.type === 'subheader') {
        // Secondary title style: smaller, dark text, clean left-aligned separation (Used for "Un instant de fraicheur")
        containerClasses = "w-full py-4 px-4 my-4 border-b-2 border-gray-300 text-left bg-gray-50";
        titleClasses = "font-bold text-2xl text-gray-800";
        noteClasses = "hidden"; // Hide note for subheaders
    } else if (item.type === 'note') {
        // Special note style
        containerClasses = "w-full py-3 px-6 my-3 border-l-4 border-primary bg-yellow-50 text-left shadow-sm";
        titleClasses = "font-semibold text-lg text-gray-700";
        noteClasses = "text-sm text-gray-600 italic";
    }

    return (
        <div className={containerClasses}>
            <h2 className={titleClasses}>{item.name}</h2>
            {item.note && item.type === 'header' && <p className={noteClasses}>{item.note}</p>}
            {item.description && item.type === 'note' && <p className={noteClasses}>{item.description}</p>}
        </div>
    );
};


export const MenuCategory = ({ items }: MenuCategoryProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, threshold: 0.06 });

  return (
    <div ref={ref} className={`space-y-4 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
      {items.map((item, index) => {
        if ("type" in item) {
          return <SectionTitle key={index} item={item as HeaderItem} />;
        } else {
          return <MenuItem key={index} item={item as RegularItem} index={index} />;
        }
      })}
    </div>
  );
};