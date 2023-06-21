import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { CartProvider } from './context/CartProvider';
import { ProductsProvider } from './context/ProductsProvider.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProductsProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ProductsProvider>
);
