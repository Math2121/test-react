import axios from "axios";
import { GetStaticProps } from "next";
import React from "react";
import Layout from "../components/Layout";
import ProductsList from "../components/ProductsList";
interface IProductList {
  products: {
    id: number;
    name: string;
    price: number;
    amount: number;
  }[];
}

function Products({ products }:IProductList) {

  return (
    <Layout title="Visualizar Produtos">
      <ProductsList products={products}/>
    </Layout>
  );
}

export default Products;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get("http://127.0.0.1:8000/api/products");

  return {
    props: {
      products: data.products,
    },
    revalidate: 60 * 60, // 1 minuto
  };
};
