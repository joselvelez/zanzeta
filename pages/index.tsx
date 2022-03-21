import type { NextPage } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className="container mx-auto max-w-7xl sm:px-6 md:px-8 lg:px-8 bg-white-400">
        <Header />
        <Hero />
        <Footer />
    </div>
  )
}

export default Home
