import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Politizando</span>
                <span className="text-sm block -mt-1">.blog</span>
              </div>
            </div>
            <p className="text-sm">
              Notícias e mobilização sindical para fortalecer a luta dos trabalhadores.
            </p>
          </div>

          <div>
            <span className="font-semibold text-white block mb-4">Links Rápidos</span>
            <div className="space-y-2">
              <Link to="/noticias" className="block hover:text-red-500 transition-colors">
                Notícias
              </Link>
              <Link to="/quem-somos" className="block hover:text-red-500 transition-colors">
                Quem Somos
              </Link>
              <Link to="/fale-conosco" className="block hover:text-red-500 transition-colors">
                Fale Conosco
              </Link>
              <Link to="/apoie" className="block hover:text-red-500 transition-colors">
                Apoie o Politizando.blog
              </Link>
            </div>
          </div>

          <div>
            <span className="font-semibold text-white block mb-4">Redes Sociais</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-red-500 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Politizando.blog - Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
