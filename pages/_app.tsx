import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="container mx-auto sm:px-6 md:px-8 lg:px-8 max-w-7xl">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
