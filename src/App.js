import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import ProductItem from "./component/ProductItem";
import ProductCategory from "./component/ProductCategory"
import NotFound from "./component/NotFound"

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <Route path="/product/:id([0-9]+)">
            <ProductItem/>
          </Route>
          <Route path="/product/:category([a-zA-Z]+)/:subcategory?">
            <ProductCategory/>
          </Route> */}
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/404">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
