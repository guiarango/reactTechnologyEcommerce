import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

//Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import ProductList from "./components/Products/ProductList/ProductList";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
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
              element={<ProductList />}
            ></Route>
            <Route
              path="/detail/:productId"
              element={<ProductDetail />}
            ></Route>
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
