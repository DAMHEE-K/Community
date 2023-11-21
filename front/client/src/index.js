import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Footer from './layout/Footer';
import Header from './layout/Header';
import { AuthProvider } from './layout/AuthContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Header />
      <App />
      <Footer />
    </AuthProvider>
  </BrowserRouter>
);