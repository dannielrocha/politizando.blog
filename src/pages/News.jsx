import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import SearchNews from '@/components/SearchNews';

const News = () => {
  const [news] = useState([
    {
      id: 1,
      title: 'Sindicatos se mobilizam por melhores condições de trabalho',
      excerpt: 'Trabalhadores de diversas categorias se unem em manifestação nacional por direitos trabalhistas.',
      date: '2025-10-20',
      author: 'Redação Politizando',
      category: 'Mobilização',
      image: 'Workers protesting with union flags and banners'
    },
    {
      id: 2,
      title: 'Nova lei trabalhista é aprovada no Congresso',
      excerpt: 'Mudanças significativas nas relações de trabalho entram em vigor no próximo mês.',
      date: '2025-10-19',
      author: 'João Silva',
      category: 'Legislação',
      image: 'Congress building with people discussing labor laws'
    },
    {
      id: 3,
      title: 'Greve dos metalúrgicos entra no terceiro dia',
      excerpt: 'Categoria reivindica reajuste salarial e melhores condições de segurança.',
      date: '2025-10-18',
      author: 'Maria Santos',
      category: 'Greves',
      image: 'Metalworkers on strike holding signs'
    },
    {
      id: 4,
      title: 'Fórum debate futuro do trabalho no Brasil',
      excerpt: 'Especialistas discutem impactos da tecnologia nas relações trabalhistas.',
      date: '2025-10-17',
      author: 'Pedro Costa',
      category: 'Debates',
      image: 'Panel discussion about future of work'
    },
    {
      id: 5,
      title: 'Sindicato conquista acordo histórico com empresas',
      excerpt: 'Negociação resulta em benefícios inéditos para trabalhadores do setor.',
      date: '2025-10-16',
      author: 'Ana Oliveira',
      category: 'Conquistas',
      image: 'Union leaders shaking hands with company representatives'
    },
    {
      id: 6,
      title: 'Campanha salarial 2025 é lançada',
      excerpt: 'Trabalhadores iniciam mobilização por reajuste acima da inflação.',
      date: '2025-10-15',
      author: 'Carlos Mendes',
      category: 'Campanhas',
      image: 'Workers launching salary campaign with banners'
    }
  ]);

  return (
    <>
      <Helmet>
        <title>Notícias - Politizando.blog</title>
        <meta name="description" content="Acompanhe as últimas notícias sobre mobilização sindical, direitos trabalhistas e movimentos sociais." />
      </Helmet>

      <div className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notícias</h1>
          <p className="text-xl opacity-90">Fique por dentro das últimas novidades</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <SearchNews />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <img alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full mb-3">
                  {item.category}
                </span>
                <h2 className="text-xl font-bold mb-3 hover:text-red-600 transition-colors">
                  {item.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar size={16} />
                    <span>{new Date(item.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <User size={16} />
                    <span>{item.author}</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
