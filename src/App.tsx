import './App.css'
import Banner from './components/banner/banner'
import Header from './components/header/header';
import MovieSection from './components/movie-section/movie-section';

function App() {
  return (
      <>
          <Header />
          <Banner src="./banner.png" alt="Banner" />
          <MovieSection />
      </>
  );
}

export default App