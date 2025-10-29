import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const SearchNews = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      toast({
        title: "🚧 Busca em desenvolvimento",
        description: `Resultados para "${searchTerm}" estarão disponíveis em breve! 🚀`,
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Buscar Notícias</h2>
      <form onSubmit={handleSearch} className="flex gap-3">
        <div className="flex-grow relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Digite sua busca..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
          />
        </div>
        <Button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-8"
        >
          Buscar
        </Button>
      </form>
    </div>
  );
};

export default SearchNews;
