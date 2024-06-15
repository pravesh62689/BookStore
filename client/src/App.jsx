import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Categories from './components/Categories';
import LoginBanner from './components/LoginBanner';
import NewReleases from './components/NewReleases';
import BookCard from './components/BookCard';
import ComingSoon from './components/ComingSoon';
import ForFree from './components/ForFree';
import Faq from './components/Faq';
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
      <ComingSoon/>
      <ForFree/>
      <Faq/>
      <Footer />
    </div>
  );
}

export default App;
