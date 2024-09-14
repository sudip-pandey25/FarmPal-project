import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import ProductCard from "../Route/ProductCard/ProductCard";
import { calculateTfidfVector, cosineSimilarity } from "../../utils/tfidf";

const SimilarProducts = ({ data }) => {
  const { allProducts } = useSelector((state) => state.products);
  const [productData, setProductData] = useState();

  useEffect(() => {
    if (data && allProducts?.length) {
      // Exclude the current product from the list of products
      const otherProducts = allProducts.filter(
        (product) => product._id !== data._id
      );

      // Get descriptions for all other products
      const allDescriptions = otherProducts.map(
        (product) => product.description
      );

      // Calculate TF-IDF vector for the current product's description
      const dataVector = calculateTfidfVector(
        data.description,
        allDescriptions
      );

      // Calculate similarity scores for each other product
      const similarityScores = otherProducts.map((otherProduct) => {
        const otherProductVector = calculateTfidfVector(
          otherProduct.description,
          allDescriptions
        );
        const similarity = cosineSimilarity(dataVector, otherProductVector);
        return { product: otherProduct, similarity };
      });

      // Sort products by similarity in descending order and take top 3
      const sortedSimilarProducts = similarityScores.sort(
        (a, b) => b.similarity - a.similarity
      );

      // Set the sorted product data to the state
      setProductData(sortedSimilarProducts.slice(0, 3));
    }
  }, [data, allProducts]);

  return (
    <div>
      {data ? (
        <div className={`p-4 ${styles.section}`}>
          <h2
            className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}
          >
            Similar Product
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
          {productData &&
              productData.map(({ product }, index) => (
                <ProductCard data={product} key={index} />
              ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SimilarProducts;
