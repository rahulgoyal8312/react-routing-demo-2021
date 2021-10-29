import { Fragment } from "react"
import { 
    Link, 
    NavLink, 
    Switch, 
    Route, 
    useRouteMatch, 
    generatePath, 
    Redirect, 
    useLocation
} from "react-router-dom"
import ProductItem from "./ProductItem"
import ProductCategory from "./ProductCategory"
import NotFound from "./NotFound"

const Product = () => {
    const { url, path } = useRouteMatch()
    const { search } = useLocation()
    const queryParams = new URLSearchParams(search)
    const enteredSearch = queryParams.get("search")

    return (
        <Fragment>
            <Switch>
                <Route path={`${path}/:id([0-9]+)`}>
                    <ProductItem/>
                </Route>
                <Route path={`${path}/:category([a-zA-Z]+)/:subcategory?`}>
                    <ProductCategory/>
                </Route>
                <Route path={path} exact>
                    <h1>Product Component</h1>
                    { enteredSearch && <h2>Searched Query: {enteredSearch}</h2> }
                    <ul>
                        <li>
                            {/* <a href="/product/1">Product Item 1</a> */}
                            {/* <Link to={"/product/1"}>Product Item 1</Link> */}
                            <NavLink activeClassName="active" to={url + "/abc"}>Product Category 1</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={url + "/abcd"}>Product Category 2</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={url + "/abcde"}>Product Category 3</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={generatePath(`${url}/:category/:subcategory?`, {
                                category: "category",
                                subcategory: "subcategory"
                            })}>Product Category 4</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            {/* <a href="/product/1">Product Item 1</a> */}
                            {/* <Link to={"/product/1"}>Product Item 1</Link> */}
                            <NavLink activeClassName="active" to={url + "/1"}>Product Item 1</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={url + "/2"}>Product Item 2</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={url + "/3"}>Product Item 3</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={url + "/4"}>Product Item 4</NavLink>
                        </li>
                    </ul>
                </Route>
                {/* <Redirect to={"/"} from="/product/123abc"/>
                <Redirect to={"/product"}/> */}
                {/* <Route>
                    <NotFound/>
                </Route> */}
                <Redirect to={"/404"}/>
            </Switch>
        </Fragment>
    )
}

export default Product