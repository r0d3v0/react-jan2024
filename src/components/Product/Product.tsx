
import {FC} from "react";
interface IProductProps {
    id?: number,
    title?: string,
    description?: string,
    price?: number,
    discountPercentage?: number,
    rating?: number,
    stock?: number,
    brand?: number,
    category?: number,
    thumbnail?: string[],
    images: string[];
}
 type IProductTypeProps = IProductProps & { children?: React.ReactNode };


const Product: FC<IProductTypeProps> = ({
                                            id,
                                            brand,
                                            title ,
                                            description,
                                            price,
                                            rating,
                                            images
                                         }) => {
    console.log(typeof images )
    return (
        <div>
            <h2>{title}</h2>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating}</p>
            <p>Brand: {brand}</p>
            <img src={images[0]} alt={title}/>
        </div>
    );
};

export default Product;