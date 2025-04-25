import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
