import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import InitialLoader from './components/layout/InitialLoader';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Industries = lazy(() => import('./pages/Industries'));

// Simple loading fallback component for route navigation
const PageLoader = () => (
  <div className="flex h-screen w-full items-center justify-center bg-background text-foreground">
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
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="industries" element={<Industries />} />

            {/* Catch-all to seamlessly redirect any old/unused paths back to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
