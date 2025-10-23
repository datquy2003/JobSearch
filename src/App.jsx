import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FeaturedCategories from './components/FeaturedCategories';
import JobList from './components/JobList';
import FeaturedCompanies from './components/FeaturedCompanies';
import BenefitsSection from './components/BenefitsSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });
  useEffect(() => {

    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="app">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <SearchBar />
      <main>
        <JobList />
        <FeaturedCompanies />
        <FeaturedCategories />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;