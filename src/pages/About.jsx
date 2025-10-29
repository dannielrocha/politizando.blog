import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Users, Heart, Megaphone } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Nossa Missão',
      description: 'Informar e mobilizar trabalhadores na luta por direitos e melhores condições de trabalho.'
    },
    {
      icon: Users,
      title: 'Compromisso',
      description: 'Dar voz aos movimentos sindicais e fortalecer a organização dos trabalhadores.'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Solidariedade, justiça social e defesa intransigente dos direitos trabalhistas.'
    },
    {
      icon: Megaphone,
      title: 'Atuação',
      description: 'Cobertura independente e comprometida com a verdade dos fatos.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Quem Somos - Politizando.blog</title>
        <meta name="description" content="Conheça o Politizando.blog, portal de notícias e mobilização sindical comprometido com os direitos dos trabalhadores." />
      </Helmet>

      <div className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quem Somos</h1>
          <p className="text-xl opacity-90">Conheça nossa história e propósito</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Nossa História</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p>
                  O Politizando.blog nasceu da necessidade de criar um espaço de informação independente e comprometido com a luta dos trabalhadores brasileiros. Fundado por jornalistas e ativistas sindicais, nosso portal se dedica a cobrir os principais acontecimentos relacionados aos direitos trabalhistas e à mobilização sindical.
                </p>
                <p>
                  Acreditamos que a informação de qualidade é fundamental para fortalecer a organização dos trabalhadores e ampliar a consciência sobre a importância da luta coletiva por melhores condições de trabalho e vida.
                </p>
                <p>
                  Nossa equipe é formada por profissionais experientes que compartilham o compromisso com a verdade, a justiça social e a defesa intransigente dos direitos conquistados pela classe trabalhadora ao longo da história.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <value.icon className="text-red-600" size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
