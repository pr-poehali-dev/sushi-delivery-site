
import React, { useState } from 'react';
import Header from '@/components/Header';
import PromoSlider from '@/components/PromoSlider';
import Categories from '@/components/Categories';
import MenuGrid from '@/components/MenuGrid';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('sushi');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          <PromoSlider />
          
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-center mb-2">
              Доставка японской кухни
            </h1>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              Насладитесь свежими и вкусными блюдами японской кухни прямо у вас дома.
              Быстрая доставка, широкий выбор и высокое качество!
            </p>
          </div>
        </div>
        
        <Categories />
        <MenuGrid activeCategory={activeCategory} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
