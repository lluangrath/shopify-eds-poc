import { LocationProvider, Route, Router } from 'preact-iso'
import ProductList from './components/ProductList/ProductList'
import ProductDetail from './components/ProductDetail/ProductDetail'

import './app.css'

export function App() {
  return (
    <LocationProvider>
      <Router>
        <ProductList path="/store" category="snowboard" />
        <ProductDetail path="/store/product/:id" />
      </Router>
    </LocationProvider>
  )
}
