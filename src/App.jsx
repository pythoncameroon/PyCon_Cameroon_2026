import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Speakers from './pages/Speakers';
import Sponsor from './pages/Sponsor';
import Attend from './pages/Attend';
import Venue from './pages/Venue';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import HealthSafety from './pages/HealthSafety';
import FinancialAid from './pages/FinancialAid';
import CodeOfConduct from './pages/CodeOfConduct';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="sponsor" element={<Sponsor />} />
          <Route path="attend" element={<Attend />} />
          <Route path="venue" element={<Venue />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="health-safety" element={<HealthSafety />} />
          <Route path="financial-aid" element={<FinancialAid />} />
          <Route path="code-of-conduct" element={<CodeOfConduct />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
