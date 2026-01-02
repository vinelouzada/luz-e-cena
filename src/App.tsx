import './App.css'
import Banner from './components/banner/banner'
import Header from './components/header/header';
import MovieSection from './components/movie-section/movie-section';
import Newsletter from './components/newsletter/newsletter';
import Footer from './components/footer/footer';

function App() {
  return (
      <>
          <Header />
          <Banner src="./banner.png" alt="Banner" />
          <MovieSection />
          <Banner src="./combo.png" alt="Combo" />
          <Newsletter />
          <Footer />
      </>
  );
}

export default App