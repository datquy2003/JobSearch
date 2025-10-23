import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import FeaturedCategories from './components/FeaturedCategories'; 
import JobList from './components/JobList';
import FeaturedCompanies from './components/FeaturedCompanies';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <main>
        <JobList />
        <FeaturedCompanies />
        <FeaturedCategories /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;