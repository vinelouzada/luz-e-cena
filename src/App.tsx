import './App.css'
import Banner from './components/banner/banner'
import Link from './components/link/link'

function App() {
  return (
      <>
          <Banner src="./banner.png" alt="Banner" />
          <Link href="/" target="_blank">
              Link
          </Link>
      </>
  );
}

export default App