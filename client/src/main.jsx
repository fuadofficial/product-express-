import ReactDOM from 'react-dom/client';
import App from './App';
import { ProductsProvider } from './context/ProductsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ProductsProvider>
        <App />
    </ProductsProvider>
);
