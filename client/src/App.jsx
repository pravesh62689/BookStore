import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Categories from './components/Categories';
import LoginBanner from './components/LoginBanner';
import NewReleases from './components/NewReleases';
import BookCard from './components/BookCard';
// Import other components as needed

function App() {
  return (
    <div className="App">
      <Header />
      {/* Add other components here */}
      <Banner/>
      <Categories/>
      <LoginBanner/>
      <NewReleases/>
      <BookCard/>
      <Footer />
    </div>
  );
}

export default App;
