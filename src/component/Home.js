import { Link, useHistory, NavLink } from "react-router-dom"

const Home = () => {
    const history = useHistory()

    const handleRedirection = () => {
        history.push({
            pathname: "/product",
            search: "search=something"
        })
    }

    return (
        <>
            <h1>Default Message</h1>
            {/* <a href="/product">Product</a> */}
            <ul>
                <li><Link to={"/product"}>Product</Link></li>
                <li><Link to={"/product?search=something"}>Product with Search Something</Link></li>
                <li><Link to={{
                    pathname: "/product",
                    search: "search=mobile"
                }}>Product with Search Mobile</Link></li>
                <li>
                    <NavLink to={{
                        pathname: "/product",
                        search: "search=usingNavLink"
                    }}>Product with Query String</NavLink>
                </li>
                <li>
                    <button onClick={handleRedirection}>Product Redirection using Button</button>
                </li>
            </ul>
        </>
    )
}

export default Home