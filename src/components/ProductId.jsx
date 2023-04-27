import findOrderById from '../helpers/findOrderById';

function ProductId({ id }) {
  const order = findOrderById(id);

  return (
    <div className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200   lg:h-60 shadow-lg">
      <h3 className="text-black font-bold text-center mt-3">
        Orden:
        {' '}
        {order.id}
      </h3>
      <h4 className="text-black text-center mt-3">Lista de productos:</h4>
      <ol>
        {order.items.map((item) => (
          <li className="text-black text-center" key={item.id}>
            <span>
              <img src={`${item.imageUrl}`} alt="" />
              Item:
              {' '}
              {item.name}
              <hr />
              {`SKU: ${item.sku}`}
              <hr />
              {`Quantity: ${item.quantity}`}
              <hr />
              {`Price: ${item.price}`}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ProductId;
