import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, CreditCard, DollarSign, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Support = () => {
  const { toast } = useToast();

  const handleSupport = (type) => {
    toast({
      title: "🚧 Funcionalidade em desenvolvimento",
      description: "Em breve você poderá apoiar o Politizando.blog! 🚀",
    });
  };

  const supportOptions = [
    {
      icon: Heart,
      title: 'Doação Única',
      description: 'Faça uma contribuição pontual e ajude a manter nosso trabalho.',
      action: 'Doar Agora'
    },
    {
      icon: CreditCard,
      title: 'Apoio Mensal',
      description: 'Torne-se um apoiador recorrente e garanta a continuidade do projeto.',
      action: 'Apoiar Mensalmente'
    },
    {
      icon: DollarSign,
      title: 'PIX',
      description: 'Contribua de forma rápida e segura através do PIX.',
      action: 'Doar via PIX'
    },
    {
      icon: Users,
      title: 'Seja Voluntário',
      description: 'Contribua com seu tempo e conhecimento para fortalecer nossa causa.',
      action: 'Quero Ajudar'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Apoie o Politizando.blog</title>
        <meta name="description" content="Apoie o Politizando.blog e ajude a fortalecer a informação independente sobre direitos trabalhistas e mobilização sindical." />
      </Helmet>

      <div className="bg-red-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Apoie o Politizando.blog</h1>
          <p className="text-xl opacity-90">Juntos somos mais fortes</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-8 mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Por que apoiar?</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <p>
                O Politizando.blog é um projeto independente que depende do apoio de pessoas como você para continuar existindo. Não temos vínculos com grandes corporações ou grupos políticos - nossa única lealdade é com a verdade e com os trabalhadores.
              </p>
              <p>
                Seu apoio nos permite manter uma equipe dedicada de jornalistas e colaboradores, investir em equipamentos, cobrir eventos importantes e, principalmente, garantir que a voz dos trabalhadores seja ouvida.
              </p>
              <p>
                Cada contribuição, por menor que seja, faz diferença e nos ajuda a continuar lutando por um jornalismo comprometido com a justiça social.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-red-100 p-4 rounded-full mb-4">
                    <option.icon className="text-red-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <Button
                    onClick={() => handleSupport(option.title)}
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    {option.action}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg shadow-lg p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Outras formas de apoiar</h3>
            <p className="mb-6 opacity-90">
              Compartilhe nossas matérias, siga-nos nas redes sociais e ajude a divulgar nosso trabalho. Cada curtida, compartilhamento e comentário fortalece nossa voz!
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                variant="secondary"
                onClick={() => handleSupport('Compartilhar')}
                className="bg-white text-red-600 hover:bg-gray-100"
              >
                Compartilhar
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Support;
