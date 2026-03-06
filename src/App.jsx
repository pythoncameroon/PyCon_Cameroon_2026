import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Speakers = lazy(() => import('./pages/Speakers'));
const Sponsor = lazy(() => import('./pages/Sponsor'));
const Attend = lazy(() => import('./pages/Attend'));
const Venue = lazy(() => import('./pages/Venue'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
          <Route path="about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
          <Route path="speakers" element={<Suspense fallback={<PageLoader />}><Speakers /></Suspense>} />
          <Route path="sponsor" element={<Suspense fallback={<PageLoader />}><Sponsor /></Suspense>} />
          <Route path="attend" element={<Suspense fallback={<PageLoader />}><Attend /></Suspense>} />
          <Route path="venue" element={<Suspense fallback={<PageLoader />}><Venue /></Suspense>} />
          <Route path="privacy" element={<Suspense fallback={<PageLoader />}><Privacy /></Suspense>} />
          <Route path="terms" element={<Suspense fallback={<PageLoader />}><Terms /></Suspense>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
