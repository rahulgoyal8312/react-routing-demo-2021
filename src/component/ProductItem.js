import { Fragment } from "react"
import { useHistory, useLocation, useParams } from "react-router"

const ProductItem = () => {
    const history = useHistory();
    const location = useLocation()
    const params = useParams()

    const handleRedirection = () => {
        // console.log(history)
        history.goBack();
        // history.push('/product');
        // history.replace('/product');
        // console.log(location)
    }

    return (
        <Fragment>
            <h1>Product Item {params.id}</h1>
            <button onClick={handleRedirection}>Go Back to Product Page</button>
        </Fragment>
    )
}

export default ProductItem