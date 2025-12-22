import './App.css'
import Banner from './components/banner/banner'
import Header from './components/header/header';

function App() {
  return (
      <>
          <Header />
          <Banner src="./banner.png" alt="Banner" />
      </>
  );
}

export default App