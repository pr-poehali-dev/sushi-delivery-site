
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Promo = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const promos: Promo[] = [
  {
    id: 1,
    title: "Бесплатная доставка от 1100 ₽",
    description: "Закажите на сумму от 1100 рублей и получите бесплатную доставку",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&q=80&w=1200&h=400",
  },
  {
    id: 2,
    title: "Оставь фотоотзыв",
    description: "Сделайте фото заказа, оставьте отзыв и получите ролл в подарок",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1200&h=400",
  },
  {
    id: 3,
    title: "Скидка имениннику 15%",
    description: "Дарим скидку 15% на все меню за 3 дня до и после дня рождения",
    image: "https://images.unsplash.com/photo-1617196700071-0882b7ff9e8e?auto=format&fit=crop&q=80&w=1200&h=400",
  },
];

const PromoSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === promos.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? promos.length - 1 : prev - 1));
  };

  // Автоматическая смена слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative h-[280px] md:h-[400px] overflow-hidden rounded-xl my-6">
      {/* Слайды */}
      <div className="h-full">
        {promos.map((promo, index) => (
          <div
            key={promo.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out 
              ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            {/* Фоновое изображение */}
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${promo.image})` }}
            />
            
            {/* Затемнение */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70" />
            
            {/* Текст */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white z-20">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 max-w-2xl">{promo.title}</h2>
              <p className="text-base md:text-xl max-w-xl">{promo.description}</p>
              <button className="mt-6 bg-sushi-purple text-white px-6 py-2 rounded-full hover:bg-sushi-purple/90 transition-colors">
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопки навигации */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Индикаторы */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {promos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors
              ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoSlider;
