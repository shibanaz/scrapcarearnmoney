import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './home/home';
import CDForm from './home/cod';
import ContactForm from './contact-us/contact-us';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './layout';

const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/buy-cod" element={<CDForm />} />
        <Route path="/contact-us" element={
          <QueryClientProvider client={queryClient}>
            <ContactForm />
          </QueryClientProvider>

        } />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
