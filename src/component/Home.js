import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <h1>Default Message</h1>
            {/* <a href="/product">Product</a> */}
            <Link to={"/product"}>Product</Link>
        </>
    )
}

export default Home