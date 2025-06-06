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
          {products.map((product) => {
            <tr key={product.id}>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>;
          })}
          {/* TODO render products in basket */}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}
