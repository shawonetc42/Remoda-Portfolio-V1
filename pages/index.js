// src/App.js (or your entry point)
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Imageshow from '@/components/imageshow';
import React from 'react';



function App() {
  return (
    <div>
      <Header/>
      <Imageshow/>
      <Features/>
      <Footer/>
    </div>
  );
}

export default App;
