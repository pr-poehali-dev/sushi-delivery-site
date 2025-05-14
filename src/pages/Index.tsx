import React, { useState, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Header from "@/components/Header";
import PromoSlider from "@/components/PromoSlider";
import Categories from "@/components/Categories";
import MenuGrid from "@/components/MenuGrid";
import Footer from "@/components/Footer";
import Icon from "@/components/ui/icon"; // Добавляем импорт компонента Icon

// Данные категорий для пагинации
const categoryData = [
  { id: "sushi", name: "Суши-роллы", icon: "Sushi" },
  { id: "pizza", name: "Пицца", icon: "Pizza" },
  { id: "soup", name: "Супы", icon: "Soup" },
  { id: "wok", name: "WOK", icon: "UtensilsCrossed" },
  { id: "salad", name: "Салаты и закуски", icon: "Salad" },
  { id: "toppings", name: "Топпинги", icon: "Droplets" },
  { id: "drinks", name: "Напитки", icon: "Coffee" },
];

const Index: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("sushi");
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  return (
    <div className="flex flex-col min-h-screen bg-sushi-beige">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <PromoSlider />

          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Доставка японской кухни
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto text-sm md:text-base">
              Насладитесь свежими и вкусными блюдами японской кухни прямо у вас
              дома. Быстрая доставка, широкий выбор и высокое качество!
            </p>
          </div>
        </div>

        <Categories
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />

        {/* Отображаем категории меню с якорями для навигации */}
        {categoryData.map((category) => (
          <div key={category.id}>
            <div className="container mx-auto px-4">
              <h2
                id={category.id}
                className="text-xl md:text-2xl font-bold mb-4 pt-4 flex items-center"
              >
                <Icon
                  name={category.icon}
                  className="mr-2 h-5 w-5 text-sushi-purple"
                />
                {category.name}
              </h2>
            </div>
            <MenuGrid activeCategory={category.id} />
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
