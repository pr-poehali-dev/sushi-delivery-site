
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: 'sushi', name: 'Суши-роллы', icon: 'Sushi' },
  { id: 'pizza', name: 'Пицца', icon: 'Pizza' },
  { id: 'soup', name: 'Супы', icon: 'Soup' },
  { id: 'wok', name: 'WOK', icon: 'UtensilsCrossed' },
  { id: 'salad', name: 'Салаты и закуски', icon: 'Salad' },
  { id: 'toppings', name: 'Топпинги', icon: 'Droplets' },
  { id: 'drinks', name: 'Напитки', icon: 'Coffee' },
];

const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('sushi');

  return (
    <div className="container mx-auto px-4 mb-8">
      <h2 className="text-2xl font-bold mb-6">Категории</h2>
      <div className="flex flex-wrap gap-2 md:gap-4 mb-10">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'default' : 'outline'}
            className={`rounded-full ${
              activeCategory === category.id 
                ? 'bg-sushi-purple text-white' 
                : 'text-gray-700 border-gray-300 hover:border-sushi-purple hover:bg-sushi-purple/5'
            }`}
            onClick={() => setActiveCategory(category.id)}
          >
            <Icon name={category.icon} className="mr-2 h-4 w-4" />
            {category.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
