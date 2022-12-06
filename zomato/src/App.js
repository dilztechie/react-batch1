import './App.css';
import React from 'react';
import Restaurants from './components/restaurants/restaurants';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

export default function App() {
  const restaurants = createStore(() => ({
    idli: [{
      id: 1001,
      name: 'Ideal Cafe',
      cuisines: ['South Indian', 'Ice Cream', 'North Indian', 'Cafe', 'Desserts', 'Juices'],
      address: 'Hampankatta, Mangalore',
      menu: '/assets/ideal-cafe'
    }, {
      id: 1002,
      name: 'Hotel Janatha Deluxe Veg - Pathumudi Soudha',
      cuisines: ['South Indian', 'North Indian', 'Fast Food', 'Street Food', 'Beverages', 'Desserts'],
      address: 'Lalbagh, Mangalore',
      menu: '/assets/janata-delux'
    }],
    vada: [{
      id: 2001,
      name: 'Hotel Sai Palace - Udipi Cafe Veg',
      cuisines: ['South Indian', 'Beverages', 'Street Food', 'Chinese', 'North Indian', 'Mithai', 'Desserts', 'Shakes'],
      address: 'Hampankatta, Mangalore',
      menu: '/assets/sai-palace'
    }],
    dosa: [{
      id: 3001,
      name: 'Hotel Sai Palace - Udipi Cafe Veg',
      cuisines: ['South Indian', 'Beverages', 'Street Food', 'Chinese', 'North Indian', 'Mithai', 'Desserts', 'Shakes'],
      address: 'Hampankatta, Mangalore',
      menu: '/assets/sai-palace'
    }]
  }))

  return <div className="App" >
    <header className="App-header">Zomato</header>
    <Provider store={restaurants}>
      <Restaurants />
    </Provider>
  </div>
}