import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Map from './components/Map/Map';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AboutUs from './components/AboutUs/AboutUs';
import React, { useEffect } from 'react';
import axios from 'axios';
import Restaurants from './components/Restaurants/Restaurants';

const INITIAL_RESTAURANTS = [];

const App = () => {
  const [restaurants, setRestaurants] = useState(INITIAL_RESTAURANTS);

  useEffect(() => {
    axios
      .get('http://localhost:5000/restaurants/')
      .then((response) => {
        setRestaurants(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Restaurants restaurants={restaurants} />} />
          <Route
            path='restaurants'
            element={<Restaurants restaurants={restaurants} />}
          />
          <Route path='map' element={<Map />} />
          <Route path='about-us' element={<AboutUs />} />
        </Routes>
      </Router>
      {/* <Header />
      <Routes>
        <Route path='/'>
          <Foods foods={foods} />
        </Route>
        <Route path='/map'>
          <Map />
        </Route>
      </Routes> */}
    </div>
  );
};

export default App;
