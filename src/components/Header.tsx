
import React, { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import Icon from '@/components/ui/icon';

const Header: React.FC = () => {
  const [isDelivery, setIsDelivery] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Логотип */}
            <div className="flex items-center">
              <Icon name="Utensils" className="h-8 w-8 text-sushi-purple" />
              <h1 className="text-2xl font-bold text-sushi-dark ml-2">
                Суши<span className="text-sushi-purple">Мастер</span>
              </h1>
            </div>
            
            {/* Переключатель доставка/самовывоз */}
            <div className="flex items-center space-x-3 bg-gray-100 p-2 rounded-full">
              <span className={`text-sm ${isDelivery ? 'font-medium text-sushi-purple' : 'text-gray-500'}`}>
                Доставка
              </span>
              <Switch 
                checked={!isDelivery}
                onCheckedChange={() => setIsDelivery(!isDelivery)}
                className="data-[state=checked]:bg-sushi-purple"
              />
              <span className={`text-sm ${!isDelivery ? 'font-medium text-sushi-purple' : 'text-gray-500'}`}>
                Самовывоз
              </span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-sushi-purple transition-colors">
              <Icon name="Phone" className="h-5 w-5 mr-2" />
              <span className="hidden md:inline">+7 (800) 888-88-88</span>
            </button>
            
            <button className="flex items-center justify-center w-10 h-10 bg-sushi-purple text-white rounded-full hover:bg-sushi-purple/90 transition-colors relative">
              <Icon name="ShoppingCart" className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
