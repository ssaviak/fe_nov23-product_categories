import { Product } from '../Product/Product';

export const ProductList = ({ data }) => (
  <tbody>
    {
      data.products.map((product, idx) => (
        <Product
          key={product.id}
          users={data.users}
          categories={data.categories}
          product={product}
          id={idx}
          data={data}
        />
      ))
    }
  </tbody>
);
