import React, { useState } from "react";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { categories } from "./Categories";

const Header: React.FC = () => {
  const [isDelivery, setIsDelivery] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 md:space-x-6">
            {/* Мобильное меню категорий */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col gap-4 py-4">
                  <h3 className="text-lg font-semibold mb-2">Категории</h3>
                  {categories.map((category) => (
                    <a
                      key={category.id}
                      href={`#${category.id}`}
                      className="flex items-center py-2 px-3 rounded-md hover:bg-sushi-purple/10 transition-colors"
                    >
                      <Icon
                        name={category.icon}
                        className="mr-2 h-5 w-5 text-sushi-purple"
                      />
                      <span>{category.name}</span>
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>

            {/* Логотип */}
            <div className="flex items-center">
              {/* Логотип в виде кусочка ролла */}
              <div className="h-8 w-8 relative">
                <div className="absolute inset-0 rounded-full bg-white border-2 border-sushi-purple transform rotate-45 overflow-hidden">
                  <div className="absolute inset-0 bg-sushi-purple/20"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-sushi-yellow rounded-full"></div>
                  <div className="absolute top-0 left-0 w-2/3 h-2/3 border-b-2 border-r-2 border-sushi-purple/30"></div>
                </div>
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-sushi-dark ml-2">
                Ролл<span className="text-sushi-purple">Тут</span>
              </h1>
            </div>

            {/* Переключатель доставка/самовывоз */}
            <div className="hidden sm:flex items-center space-x-3 bg-gray-100 p-2 rounded-full">
              <span
                className={`text-sm ${isDelivery ? "font-medium text-sushi-purple" : "text-gray-500"}`}
              >
                Доставка
              </span>
              <Switch
                checked={!isDelivery}
                onCheckedChange={() => setIsDelivery(!isDelivery)}
                className="data-[state=checked]:bg-sushi-purple"
              />
              <span
                className={`text-sm ${!isDelivery ? "font-medium text-sushi-purple" : "text-gray-500"}`}
              >
                Самовывоз
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="flex flex-col items-end mr-2 hidden sm:block">
              <span className="text-xs text-gray-500">
                г. Москва, ул. Примерная, д. 123
              </span>
              <a
                href="tel:+78008888888"
                className="text-sm font-medium hover:text-sushi-purple transition-colors"
              >
                +7 (800) 888-88-88
              </a>
            </div>

            <Button variant="ghost" size="icon" className="sm:hidden">
              <Icon name="Phone" className="h-5 w-5" />
            </Button>

            <button className="flex items-center justify-center w-10 h-10 bg-sushi-purple text-white rounded-full hover:bg-sushi-purple/90 transition-colors relative">
              <Icon name="ShoppingCart" className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>

        {/* Мобильный переключатель доставка/самовывоз */}
        <div className="flex sm:hidden items-center justify-center mt-3">
          <div className="flex items-center space-x-3 bg-gray-100 p-2 rounded-full">
            <span
              className={`text-sm ${isDelivery ? "font-medium text-sushi-purple" : "text-gray-500"}`}
            >
              Доставка
            </span>
            <Switch
              checked={!isDelivery}
              onCheckedChange={() => setIsDelivery(!isDelivery)}
              className="data-[state=checked]:bg-sushi-purple"
            />
            <span
              className={`text-sm ${!isDelivery ? "font-medium text-sushi-purple" : "text-gray-500"}`}
            >
              Самовывоз
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
