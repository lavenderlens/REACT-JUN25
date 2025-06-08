export function Basket({ products }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        {console.log(products)}
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.description}</td>
              <td>{`€${product.price}`}</td>
            </tr>
          ))}
          ;{/* TODO render products in basket */}
          {/* FIX: in <tbody> above the JSX was grouped with {} */}
          {/* FIX: should be () */}
          {console.log(products)}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}
