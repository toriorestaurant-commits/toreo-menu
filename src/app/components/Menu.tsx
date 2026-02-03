// Menu.tsx
'use client'

import { useState, useRef } from "react";
import { menuData, MainCategory } from "@/data/menuData";
import { MenuCategoryContent } from "./MenuCategoryContent"; // New component for rendering the deeper hierarchy

const Menu = () => {
  // Find the initial tab based on the first item's name
  const initialTabName = menuData[0].name;
  const [activeTab, setActiveTab] = useState(initialTabName);
  const contentRef = useRef<HTMLDivElement>(null);

  // Function to find the data for the active tab
  const activeCategoryData = menuData.find(cat => cat.name === activeTab);

  // Handle tab click with smooth scroll
  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    // Scroll to header so title appears
    setTimeout(() => {
      const headerElement = document.querySelector('header');
      headerElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  return (
    <div className="bg-[#f9fafb]">
      <div className="min-h-screen max-w-[1200px] mx-auto py-10" id="menu">
        
        {/* Header */}
        <header className="shadow-smd z-10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Le Menu</h2>
              <p className="text-gray-600 mb-10 text-center">
                Goûtez nos recettes authentiques et généreuses.
              </p>
            </div>
          </div>
        </header>

        {/* Tabs */}
        <div className="sticky top-0 bg-[#f9fafb] z-20 shadow-md py-3">
          <div className="container mx-auto px-4">
            <div className="flex">
              {menuData.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => handleTabClick(tab.name)}
                  className={`flex-1 py-4 px-2 md:px-6 text-center text-sm md:text-base font-semibold transition-all duration-300 rounded-lg cursor-pointer mx-1 ${
                    activeTab === tab.name
                      ? "bg-primary text-white shadow-lg"
                      : "text-gray-500 hover:bg-secondary bg-gray-200"
                  }`}
                >
                  {tab.name.split('(')[0].trim()} {/* Displays only the main name, e.g., "Plats" */}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div ref={contentRef} className="container mx-auto px-4 py-8">
          {activeCategoryData && (
            <MenuCategoryContent
              key={activeTab}
              categoryData={activeCategoryData}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;