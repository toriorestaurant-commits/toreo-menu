"use client";

// MenuCategoryContent.tsx
import React from "react";
import { MainCategory, SecondLevelCategory, SubCategory, MenuItem as ItemType } from "@/data/menuData";
import { MenuItem } from "./MenuItem"; // Import the item component
import { useInView } from "@/app/hooks/useInView";

interface MenuCategoryContentProps {
  categoryData: MainCategory;
}

// Helper component for the Second-Level Category (e.g., "1. Premier pas dans l'arène")
const SecondLevelHeader = ({ name }: { name: string }) => {
    return (
        <div className="w-full mx-auto py-3 my-6 text-center  ">
            <h2 className="text-gray-900 font-extrabold text-xl  uppercase tracking-wider">
                {name.split('(')[0].trim()}
            </h2>
            {name.includes('(') && (
                <p className="text-sm italic mt-2 p-1 rounded bg-white/10 text-yellow-100">
                    {name.match(/\((.*?)\)/)?.[1] || ''}
                </p>
            )}
        </div>
    );
};

// Helper component for the Sub-Category (e.g., "Un instant de fraîcheur")
const SubCategoryHeader = ({ name }: { name: string }) => {
    return (
        <div className="w-full py-4 px-4 my-4 border-b-2 border-gray-300 text-left bg-gray-50">
            <h3 className="font-bold text-sm sm:text-base text-gray-800">{name}</h3>
        </div>
    );
};

export const MenuCategoryContent = ({ categoryData }: MenuCategoryContentProps) => {
  const { ref, inView } = useInView<HTMLDivElement>({ once: true, threshold: 0.06 });

  return (
    <div ref={ref} className={`space-y-4 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
      {categoryData.categories.map((secondLevelCat: SecondLevelCategory, secIndex: number) => (
        <React.Fragment key={secIndex}>
          {/* Render the Second Level Category Header */}
          <SecondLevelHeader name={secondLevelCat.name} />

          {secondLevelCat.subCategories.map((subCat: SubCategory, subIndex: number) => (
            <div key={`${secIndex}-${subIndex}`} className="space-y-4">
              {/* Render the Sub-Category Header */}
              <SubCategoryHeader name={subCat.name} />

              {/* Render the Menu Items for this Sub-Category */}
              {subCat.items.map((item: ItemType, itemIndex: number) => (
                <MenuItem
                  key={itemIndex}
                  item={{
                    name: item.plat,
                    price: item.prixDA.toString(), // Convert price to string for the MenuItem prop
                    description: item.description,
                    image: item.imageUrl,
                    subCategoryName: subCat.name // Pass sub-category name
                  }}
                  index={itemIndex}
                />
              ))}
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};