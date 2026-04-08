import { lazy, Suspense, Component } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout';
import LanguageSync from './components/LanguageSync';
import PageLoader from './components/PageLoader';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Speakers = lazy(() => import('./pages/Speakers'));
const Sponsor = lazy(() => import('./pages/Sponsor'));
const Attend = lazy(() => import('./pages/Attend'));
const Venue = lazy(() => import('./pages/Venue'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const HealthSafety = lazy(() => import('./pages/HealthSafety'));
const CodeOfConduct = lazy(() => import('./pages/CodeOfConduct'));
const UbuCon = lazy(() => import('./pages/UbuCon'));

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center', padding: '2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Something went wrong</h2>
          <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-secondary)' }}>The page failed to load. This can happen due to a network issue.</p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function LazyPage({ children }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

function LegacyRedirect() {
  const location = useLocation();
  const lang = localStorage.getItem('pycon-lang') || 'en';
  const path = location.pathname === '/' ? '' : location.pathname;
  return <Navigate to={`/${lang}${path}${location.search}${location.hash}`} replace />;
}

function App() {
  return (
    <Routes>
      {/* Root redirect to default language */}
      <Route index element={<LegacyRedirect />} />

      {/* Language-prefixed routes */}
      <Route path="/:lang" element={<LanguageSync><Layout /></LanguageSync>}>
        <Route index element={<LazyPage><Home /></LazyPage>} />
        <Route path="about" element={<LazyPage><About /></LazyPage>} />
        <Route path="speakers" element={<LazyPage><Speakers /></LazyPage>} />
        <Route path="sponsor" element={<LazyPage><Sponsor /></LazyPage>} />
        <Route path="attend" element={<LazyPage><Attend /></LazyPage>} />
        <Route path="venue" element={<LazyPage><Venue /></LazyPage>} />
        <Route path="privacy" element={<LazyPage><Privacy /></LazyPage>} />
        <Route path="terms" element={<LazyPage><Terms /></LazyPage>} />
        <Route path="health-safety" element={<LazyPage><HealthSafety /></LazyPage>} />
        <Route path="code-of-conduct" element={<LazyPage><CodeOfConduct /></LazyPage>} />
        <Route path="ubucon" element={<LazyPage><UbuCon /></LazyPage>} />
        <Route path="*" element={<LegacyRedirect />} />
      </Route>

      {/* Catch-all */}
      <Route path="*" element={<LegacyRedirect />} />
    </Routes>
  );
}

export default App;
