import Head from 'next/head';
import Navbar from '../app/components/Navbar';
import HeroSection from '../app/components/HeroSection';
import TopBar from './components/TopBar';
import CategoryList from './components/CategoryList';
import Products from '../app/components/Products';
import PromotionalSection from './components/PromotionalSection';
import Footer from './components/Footer';
import BrandsCarousel from './components/Carrusel';

export default function Home() {
  return (
    <>
      <Head>
        <title>ecomus - Summer Collection</title>
        <meta name="description" content="Summer fashion collection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <TopBar/>
      <Navbar />
      <HeroSection />
      <CategoryList/>
      <Products/>
      <PromotionalSection/>
      <BrandsCarousel/>
      <Footer/>
      

    </>
  );
}