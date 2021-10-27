import { Fragment } from "react"
import { Link, NavLink } from "react-router-dom"

const Product = () => {
    return (
        <Fragment>
            <h1>Product Component</h1>
            <ul>
                <li>
                    {/* <a href="/product/1">Product Item 1</a> */}
                    {/* <Link to={"/product/1"}>Product Item 1</Link> */}
                    <NavLink activeClassName="active" to={"/product/abc"}>Product Category 1</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={"/product/abcd"}>Product Category 2</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={"/product/abcde"}>Product Category 3</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={"/product/abcdef"}>Product Category 4</NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    {/* <a href="/product/1">Product Item 1</a> */}
                    {/* <Link to={"/product/1"}>Product Item 1</Link> */}
                    <NavLink activeClassName="active" to={"/product/1"}>Product Item 1</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={"/product/2"}>Product Item 2</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={"/product/3"}>Product Item 3</NavLink>
                </li>
                <li>
                    <NavLink activeClassName="active" to={"/product/4"}>Product Item 4</NavLink>
                </li>
            </ul>
        </Fragment>
    )
}

export default Product