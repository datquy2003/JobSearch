import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import JobList from './components/JobList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <main>
        <JobList />
      </main>
      <Footer />
    </div>
  );
}

export default App;