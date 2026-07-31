import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import InitialLoader from './components/layout/InitialLoader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Industries = lazy(() => import('./pages/Industries'));
const OracleCloud = lazy(() => import('./components/innerPages/oracleCloud/oracleCloud'));
const CloudApplications = lazy(() => import('./pages/CloudApplications'));
const Services = lazy(() => import('./pages/Services'));
const AiPoweredERP = lazy(() => import('./components/innerPages/ServicesPage/AiPoweredERP'));
const NetSuitePage = lazy(() => import('./components/innerPages/netsuite/NetSuitePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Simple loading fallback component for route navigation
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-background text-[#000000]">
    <div className="w-6 h-6 border-2 border-border border-t-primary rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {isInitialLoading && (
          <InitialLoader onComplete={() => setIsInitialLoading(false)} />
        )}
      </AnimatePresence>

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/oracle-cloud" element={<OracleCloud />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="industries" element={<Industries />} />
            <Route path="cloud-applications" element={<CloudApplications />} />
            <Route path="services" element={<Services />} />
            <Route path="services/ai-powered-erp" element={<AiPoweredERP />} />
            <Route path="cloud-applications/netsuite" element={<NetSuitePage />} />

            {/* 404 Catch-all */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
