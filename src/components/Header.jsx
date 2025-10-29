import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Notícias', path: '/noticias' },
    { name: 'Quem Somos', path: '/quem-somos' },
    { name: 'Fale Conosco', path: '/fale-conosco' },
    { name: 'Apoie o Politizando.blog', path: '/apoie' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-red-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-red-600 font-bold text-xl">P</span>
              </div>
              <div>
                <span className="text-2xl font-bold">Politizando</span>
                <span className="text-sm block -mt-1">.blog</span>
              </div>
            </motion.div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? 'secondary' : 'ghost'}
                  className={`text-white hover:bg-red-700 transition-all ${
                    isActive(item.path) ? 'bg-red-700' : ''
                  }`}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 hover:bg-red-700 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4 space-y-2"
          >
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
              >
                <div
                  className={`block px-4 py-3 rounded-lg hover:bg-red-700 transition-colors ${
                    isActive(item.path) ? 'bg-red-700' : ''
                  }`}
                >
                  {item.name}
                </div>
              </Link>
            ))}
          </motion.nav>
        )}
      </div>
    </header>
  );
};

export default Header;
