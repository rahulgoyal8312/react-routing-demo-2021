import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import ProductItem from "./component/ProductItem";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/product/1">
            <ProductItem/>
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
