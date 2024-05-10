import React, { useEffect, useState } from "react";
import Product from "../Product/Product";

interface ProductType {
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

const Products = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then((data: { products: ProductType[] }) => {
                setProducts(data.products);
            });
    }, []);

    console.log(products);

    return (
        <div>
            {products && products.map((product: ProductType) => (
                <Product
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    discountPercentage={product.discountPercentage}
                    rating={product.rating}
                    stock={product.stock}
                    brand={product.brand}
                    category={product.category}
                    thumbnail={product.thumbnail}
                    images={product.images}
                />
            ))}
        </div>
    );
};

export default Products;
