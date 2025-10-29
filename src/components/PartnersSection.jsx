import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    {
      name: 'CUT - Central Única dos Trabalhadores',
      url: '#',
      description: 'Central sindical brasileira'
    },
    {
      name: 'Força Sindical',
      url: '#',
      description: 'Organização sindical nacional'
    },
    {
      name: 'UGT - União Geral dos Trabalhadores',
      url: '#',
      description: 'Central sindical'
    },
    {
      name: 'CTB - Central dos Trabalhadores do Brasil',
      url: '#',
      description: 'Movimento sindical'
    },
    {
      name: 'NCST - Nova Central Sindical',
      url: '#',
      description: 'Central de trabalhadores'
    },
    {
      name: 'CSB - Central dos Sindicatos Brasileiros',
      url: '#',
      description: 'Organização sindical'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossos Parceiros</h2>
      <p className="text-gray-600 mb-8">
        Trabalhamos em conjunto com diversas organizações sindicais para fortalecer a luta dos trabalhadores
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {partners.map((partner, index) => (
          <motion.a
            key={index}
            href={partner.url}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-4 border border-gray-200 rounded-lg hover:border-red-500 hover:shadow-md transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-900 group-hover:text-red-600 transition-colors mb-1">
                  {partner.name}
                </h3>
                <p className="text-sm text-gray-500">{partner.description}</p>
              </div>
              <ExternalLink className="text-gray-400 group-hover:text-red-600 transition-colors flex-shrink-0 ml-2" size={18} />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default PartnersSection;
