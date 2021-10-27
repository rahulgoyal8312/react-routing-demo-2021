import { BrowserRouter, Route, Switch } from "react-router-dom";
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
        </Switch>
        <h1>Go to Product Page</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
