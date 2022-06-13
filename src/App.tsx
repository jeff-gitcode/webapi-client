import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import store from "./store";
import { ThankYou } from "./components/ThankYou";
import ErrorBoundary from "./components/ErrorBoundary";
import { Cart } from "./components/Cart/Cart";
import ProductList from "./components/Product/ProductList";


function App() {
  console.log(process.env);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <ErrorBoundary>
            <Routes>
              <Route path="/" element={<ProductList />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
