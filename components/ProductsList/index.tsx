import React from "react";
interface IProductList {
    products: {
      id: number;
      name: string;
      price: number;
      amount: number;
    }[];
  }
function ProductsList({ products }: IProductList) {
 
  return (
    <table className="table-auto w-full m-auto">
      <thead className=" bg-gray-300">
        <tr>
          <th>Nome</th>
          <th>Preço</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product: any) => (
          <tr className="text-center">
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductsList;
