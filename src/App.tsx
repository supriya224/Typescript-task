import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages';
import { Footer, Header } from './components/Index';

const App: React.FC = () => {

  return (
    <div className="w-screen flex flex-col">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;