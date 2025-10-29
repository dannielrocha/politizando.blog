import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const FeaturedNews = () => {
  const navigate = useNavigate();

  const featuredNews = [
    {
      id: 1,
      title: 'Trabalhadores conquistam direitos históricos',
      excerpt: 'Após meses de negociação, categoria garante benefícios inéditos.',
      date: '2025-10-22',
      category: 'Destaque',
      image: 'Happy workers celebrating labor rights victory'
    },
    {
      id: 2,
      title: 'Greve nacional mobiliza milhões',
      excerpt: 'Movimento paralisa principais setores da economia.',
      date: '2025-10-21',
      category: 'Mobilização',
      image: 'National strike with workers marching'
    },
    {
      id: 3,
      title: 'Sindicato lança campanha de conscientização',
      excerpt: 'Iniciativa visa informar trabalhadores sobre seus direitos.',
      date: '2025-10-20',
      category: 'Educação',
      image: 'Union awareness campaign with educational materials'
    }
  ];

  return (
    <div className="my-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Notícias em Destaque</h2>
        <Button
          onClick={() => navigate('/noticias')}
          variant="outline"
          className="border-red-600 text-red-600 hover:bg-red-50"
        >
          Ver todas
          <ArrowRight className="ml-2" size={18} />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredNews.map((news, index) => (
          <motion.article
            key={news.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
          >
            <div className="h-48 overflow-hidden">
              <img 
                alt={news.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
               src="https://images.unsplash.com/photo-1663124178598-71717cdea439" />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full mb-3">
                {news.category}
              </span>
              <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                {news.title}
              </h3>
              <p className="text-gray-600 mb-4">{news.excerpt}</p>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar size={16} className="mr-2" />
                <span>{new Date(news.date).toLocaleDateString('pt-BR')}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNews;
