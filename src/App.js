import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';
import CoverPage from './components/CoverPage/CoverPage';
import EventList from './components/EventList/EventList';

function App() {
  return (
    <div className="App">
      <Header />
      <CoverPage/>
      <EventList/>
      <Footer />
    </div>
  );
}

export default App;
