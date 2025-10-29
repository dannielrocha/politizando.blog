import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const news = [
    {
      id: 1,
      title: 'Sindicatos conquistam vitória histórica em negociação coletiva',
      description: 'Acordo garante reajuste acima da inflação e melhores condições de trabalho',
      image: 'Union workers celebrating victory with raised fists'
    },
    {
      id: 2,
      title: 'Mobilização nacional reúne milhares de trabalhadores',
      description: 'Manifestação pacífica exige respeito aos direitos trabalhistas',
      image: 'Large crowd of workers marching with union banners'
    },
    {
      id: 3,
      title: 'Nova campanha salarial é lançada com amplo apoio',
      description: 'Trabalhadores de todo país se unem por melhores salários',
      image: 'Workers holding salary campaign posters'
    },
    {
      id: 4,
      title: 'Fórum debate futuro das relações trabalhistas',
      description: 'Especialistas discutem desafios e oportunidades para os trabalhadores',
      image: 'Panel discussion with labor experts'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [news.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % news.length);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="relative h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
              <img 
                alt={news[currentIndex].title}
                className="w-full h-full object-cover"
               src="https://images.unsplash.com/photo-1690120225080-e48e3aea49de" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-4xl font-bold mb-3"
                >
                  {news[currentIndex].title}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-lg md:text-xl opacity-90"
                >
                  {news[currentIndex].description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
        >
          <ChevronLeft size={32} />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
        >
          <ChevronRight size={32} />
        </Button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {news.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCarousel;
