import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: "sushi", name: "Суши-роллы", icon: "Sushi" },
  { id: "pizza", name: "Пицца", icon: "Pizza" },
  { id: "soup", name: "Супы", icon: "Soup" },
  { id: "wok", name: "WOK", icon: "UtensilsCrossed" },
  { id: "salad", name: "Салаты и закуски", icon: "Salad" },
  { id: "toppings", name: "Топпинги", icon: "Droplets" },
  { id: "drinks", name: "Напитки", icon: "Coffee" },
];

interface CategoriesProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  // Скролл к разделу при выборе категории
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(categoryId);
    if (element) {
      // Смещение для учета фиксированной шапки
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    onSelectCategory(categoryId);
  };

  return (
    <div className="container mx-auto px-4 mb-8">
      <h2 className="text-2xl font-bold mb-4">Категории</h2>

      {/* Категории для планшетов и десктопов */}
      <div className="hidden md:flex flex-wrap gap-2 mb-10">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`rounded-full focus:ring-0 ${
              activeCategory === category.id
                ? "bg-sushi-purple text-white"
                : "text-gray-700 border-gray-300 hover:border-sushi-purple hover:bg-sushi-purple/5"
            }`}
            onClick={() => scrollToCategory(category.id)}
          >
            <Icon name={category.icon} className="mr-2 h-4 w-4" />
            {category.name}
          </Button>
        ))}
      </div>

      {/* Горизонтальный скролл для мобильных */}
      <div className="md:hidden overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        <div className="flex gap-2 min-w-max">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`rounded-full whitespace-nowrap focus:ring-0 ${
                activeCategory === category.id
                  ? "bg-sushi-purple text-white"
                  : "text-gray-700 border-gray-300 hover:border-sushi-purple hover:bg-sushi-purple/5"
              }`}
              onClick={() => scrollToCategory(category.id)}
            >
              <Icon name={category.icon} className="mr-2 h-4 w-4" />
              {category.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
