import { LocationProvider, Route, Router } from 'preact-iso'
import ProductList from './components/ProductList/ProductList'
import ProductDetail from './components/ProductDetail/ProductDetail'

import './app.css'

export function App() {
  const appDiv = document.getElementById("app");
  const aemProps = appDiv.aemProps;

  if (aemProps && aemProps.length > 0) {
    console.log("aemProps", appDiv.aemProps);
    const routes = aemProps[1].split(',');
    console.log('routes', routes);
  }

  return (
    <LocationProvider>
      <Router>
        <ProductList path="/store" category="snowboard" />
        <ProductDetail path="/store/product/:id" />
      </Router>
    </LocationProvider>
  )
}
