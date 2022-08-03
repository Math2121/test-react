import React from "react";
import CreateProductForm from "../components/CreateProductForm";

import Layout from "../components/Layout";

function Home() {
  return (
    <>
      <Layout title="Cadastrar Produto">
        <CreateProductForm />
      </Layout>
    </>
  );
}

export default Home;

