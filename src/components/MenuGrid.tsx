import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Временные данные для меню
const menuItemsExtended = [
  {
    id: 1,
    name: "Филадельфия",
    description: "Лосось, сливочный сыр, огурец, рис, нори",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=600&h=400",
    category: "sushi",
    isBestseller: true,
    isSpicy: false,
    isVegan: false,
  },
  {
    id: 2,
    name: "Калифорния",
    description: "Снежный краб, авокадо, огурец, тобико, рис, нори",
    price: 349,
    imageUrl:
      "https://images.unsplash.com/photo-1617196700071-0882b7ff9e8e?auto=format&fit=crop&q=80&w=600&h=400",
    category: "sushi",
    isBestseller: false,
    isSpicy: false,
    isVegan: false,
  },
  {
    id: 3,
    name: "Спайси ролл с лососем",
    description: "Обжаренный лосось, огурец, спайси соус, рис, нори",
    price: 329,
    imageUrl:
      "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?auto=format&fit=crop&q=80&w=600&h=400",
    category: "sushi",
    isBestseller: false,
    isSpicy: true,
    isVegan: false,
  },
  {
    id: 4,
    name: "Вегетарианский ролл",
    description: "Авокадо, огурец, болгарский перец, салат, рис, нори",
    price: 279,
    imageUrl:
      "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?auto=format&fit=crop&q=80&w=600&h=400",
    category: "sushi",
    isBestseller: false,
    isSpicy: false,
    isVegan: true,
  },
  {
    id: 5,
    name: "Дракон",
    description: "Угорь, авокадо, огурец, сливочный сыр, соус унаги, кунжут",
    price: 459,
    imageUrl:
      "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&q=80&w=600&h=400",
    category: "sushi",
    isBestseller: true,
    isSpicy: false,
    isVegan: false,
  },
  {
    id: 6,
    name: "Маргарита",
    description: "Томатный соус, моцарелла, базилик, оливковое масло",
    price: 399,
    imageUrl:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600&h=400",
    category: "pizza",
    isBestseller: true,
    isSpicy: false,
    isVegan: false,
  },
  {
    id: 7,
    name: "Пепперони",
    description: "Томатный соус, моцарелла, пепперони",
    price: 449,
    imageUrl:
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600&h=400",
    category: "pizza",
    isBestseller: false,
    isSpicy: true,
    isVegan: false,
  },
  {
    id: 8,
    name: "Грибной суп",
    description: "Шампиньоны, картофель, лук, сливки, зелень",
    price: 259,
    imageUrl:
      "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=600&h=400",
    category: "soup",
    isBestseller: false,
    isSpicy: false,
    isVegan: true,
  },
  {
    id: 9,
    name: "Лапша WOK с курицей",
    description: "Яичная лапша, куриное филе, овощи, соус терияки",
    price: 329,
    imageUrl:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=600&h=400",
    category: "wok",
    isBestseller: false,
    isSpicy: false,
    isVegan: false,
  },
];

interface MenuGridProps {
  activeCategory?: string;
  id?: string;
}

const MenuGrid: React.FC<MenuGridProps> = ({ activeCategory = "all", id }) => {
  const filteredItems =
    activeCategory === "all"
      ? menuItemsExtended
      : menuItemsExtended.filter((item) => item.category === activeCategory);

  return (
    <section id={id} className="py-6">
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="menu-card group bg-white">
              {/* Изображение */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2 flex flex-wrap gap-2">
                  {item.isBestseller && (
                    <Badge className="bg-sushi-yellow text-sushi-dark">
                      Хит
                    </Badge>
                  )}
                  {item.isSpicy && (
                    <Badge className="bg-red-500 text-white">Острое</Badge>
                  )}
                  {item.isVegan && (
                    <Badge className="bg-green-500 text-white">
                      Вегетарианское
                    </Badge>
                  )}
                </div>
              </div>

              {/* Информация */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                <p className="text-gray-600 text-sm h-12 overflow-hidden">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-lg">{item.price} ₽</span>
                  <Button className="bg-sushi-purple hover:bg-sushi-purple/90 transition-colors focus:ring-0">
                    В корзину
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuGrid;
