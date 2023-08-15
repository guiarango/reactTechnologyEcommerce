import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

//Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ProductsByCategory from "./components/Products/ProductByCategory/ProductsByCategory";
import SearchResult from "./components/SearchResult/SearchResult";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import Checkout from "./components/Checkout/Checkout";
import OrderResume from "./components/Orders/Orders";
import Error404 from "./components/Error/Error404";

//Styles
import classes from "./App.module.css";

//Store
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <main className={classes.main}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/category/:categoryId"
              element={<ProductsByCategory />}
            ></Route>
            <Route
              path="/detail/:productId"
              element={<ProductDetail />}
            ></Route>
            <Route path="/results" element={<SearchResult />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/orders/:orderId" element={<OrderResume />}></Route>
            <Route path="/error404" element={<Error404 />}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
