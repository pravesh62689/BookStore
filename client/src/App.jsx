import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Categories from './components/Categories';
import LoginBanner from './components/LoginBanner';
// Import other components as needed

function App() {
  return (
    <div className="App">
      <Header />
      {/* Add other components here */}
      <Banner/>
      <Categories/>
      <LoginBanner/>
      <Footer />
    </div>
  );
}

export default App;
