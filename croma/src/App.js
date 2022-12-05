import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import './App.css';
import Products from './components/products/products';

const store = createStore(() => ({
  mobiles: [{
    id: 'APPIPH14+',
    brand: 'Apple',
    model: 'iPhone 14 Plus',
    display: '6.7 inches (16.95 cm) OLED Display',
    memory: 128,
    processor: 'A15 Bionic Chip, Hexa Core',
    camera: '12 MP + 12 MP Dual Rear & 12 MP Front Camera',
    battery: 'Qi Wireless Charging Up to 7.5W'
  }],
  televisions: [{
    id: 'SONBRA43',
    brand: 'Sony',
    model: 'Bravia 108 cm (43 inches) Full HD LED Smart Android TV',
    display: 'Full HD LED, 1920 x 1080 pixels, 60Hz Refresh Rate',
    os: 'Android',
    sound: '20 W Speaker, Dolby Audio',
    features: 'Dolby Audio & Alexa Compatibility'
  }],
  laptops: [{
    id: 'APPMACAIR2020',
    brand: 'Apple',
    model: 'MacBook Air 2020',
    processor: 'Apple M1',
    display: '33.78 cms (13.3 inches) LED-Backlit',
    memory: 256,
    os: 'macOS Big Sur'
  }]
}))

export default function App() {
  return (<div className="App">
    <header className="App-header">Croma</header>
    <Provider store={store}>
      <Products />
    </Provider>
  </div>)
}