
import React from 'react';
import Icon from '@/components/ui/icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Логотип и контакты */}
          <div>
            <div className="flex items-center mb-4">
              <Icon name="Utensils" className="h-8 w-8 text-sushi-purple" />
              <h1 className="text-2xl font-bold text-sushi-dark ml-2">
                Суши<span className="text-sushi-purple">Мастер</span>
              </h1>
            </div>
            <p className="text-gray-600 mb-4">
              Доставка свежих и вкусных блюд японской и паназиатской кухни
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <Icon name="Phone" className="h-5 w-5 mr-2 text-sushi-purple" />
                <span>+7 (800) 888-88-88</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" className="h-5 w-5 mr-2 text-sushi-purple" />
                <span>info@sushimaster.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="MapPin" className="h-5 w-5 mr-2 text-sushi-purple" />
                <span>г. Москва, ул. Примерная, д. 123</span>
              </div>
            </div>
          </div>

          {/* Меню */}
          <div>
            <h3 className="text-lg font-bold mb-4">Меню</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-sushi-purple transition-colors">
                  Суши-роллы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sushi-purple transition-colors">
                  Пицца
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sushi-purple transition-colors">
                  Супы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sushi-purple transition-colors">
                  WOK
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sushi-purple transition-colors">
                  Салаты и закуски
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sushi-purple transition-colors">
                  Топпинги
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sushi-purple transition-colors">
                  Напитки
                </a>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-bold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-sushi-purple transition-colors">
                  Акции
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sushi-purple transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sushi-purple transition-colors">
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sushi-purple transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-sushi-purple transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="bg-sushi-purple text-white rounded-full p-2 hover:bg-sushi-purple/90 transition-colors">
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-sushi-purple text-white rounded-full p-2 hover:bg-sushi-purple/90 transition-colors">
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a href="#" className="bg-sushi-purple text-white rounded-full p-2 hover:bg-sushi-purple/90 transition-colors">
                <Icon name="Twitter" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 pt-6 mt-6 text-center text-gray-500 text-sm">
          <p>© 2025 СушиМастер. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
