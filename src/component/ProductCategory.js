import { Fragment } from "react"
import { useHistory } from "react-router"
import { useParams } from "react-router-dom";

const ProductCategory = () => {
    const history = useHistory();
    const params = useParams()

    const handleRedirection = () => {
        history.goBack();
    }

    return (
        <Fragment>
            <h1>Product Category {params.category}</h1>
            {
                params.subcategory && <h2>Sub Category is: {params.subcategory}</h2>
            }
            <button onClick={handleRedirection}>Go Back to Product Page</button>
        </Fragment>
    )
}

export default ProductCategory