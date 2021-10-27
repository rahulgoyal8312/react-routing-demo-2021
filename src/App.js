import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import ProductItem from "./component/ProductItem";
import ProductCategory from "./component/ProductCategory"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/product/:id([0-9]+)">
            <ProductItem/>
          </Route>
          <Route path="/product/:category([a-zA-Z]+)/:subcategory?">
            <ProductCategory/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route>
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
