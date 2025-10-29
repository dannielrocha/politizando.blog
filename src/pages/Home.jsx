import React from 'react';
import { Helmet } from 'react-helmet';
import NewsCarousel from '@/components/NewsCarousel';
import SearchNews from '@/components/SearchNews';
import PartnersSection from '@/components/PartnersSection';
import FeaturedNews from '@/components/FeaturedNews';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Politizando.blog - Notícias e Mobilização Sindical</title>
        <meta name="description" content="Portal de notícias e mobilização sindical. Acompanhe as últimas notícias sobre direitos trabalhistas, movimentos sociais e luta dos trabalhadores." />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <NewsCarousel />
        
        <div className="my-12">
          <SearchNews />
        </div>

        <FeaturedNews />

        <div className="my-12">
          <PartnersSection />
        </div>
      </div>
    </>
  );
};

export default Home;
