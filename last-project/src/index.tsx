import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../src/sass/style.css'
import '../src/sass/dark.css'
import { ProductProvider } from './context/ProductContext';
import AppRouter from './AppRouter';
import 'react-toastify/dist/ReactToastify.css';
import { WishlistProvider } from 'react-use-wishlist';
import configureStore from './redux/store/configureStore';
import { Provider } from 'react-redux';
import { ThemeProvider } from './context/ThemeContext';
import { LangProvider } from './context/LangContext';
const store: any = configureStore();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <ProductProvider>
  <WishlistProvider>
  <LangProvider>
  <ThemeProvider>
   <AppRouter />
   </ThemeProvider>
  </LangProvider>
  </WishlistProvider>
  </ProductProvider>
  </Provider>
  </React.StrictMode>
);
