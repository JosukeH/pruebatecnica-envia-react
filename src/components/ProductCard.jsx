import { Link } from 'react-router-dom';

function ProductCard({ order }) {
  const { items } = order;
  return (
    <div className="" key={order.id}>

      <Link to={`orden/${order.id}`}>

        <div className="min-h-60 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200   lg:h-60 shadow-lg">
          <h3 className="text-black font-bold text-center mt-3">
            Orden:
            {' '}
            {order.id}
          </h3>
          <h4 className="text-black text-center mt-3">Lista de productos:</h4>
          <ol>
            {items.map((item) => (
              <li className="text-black text-center" key={item.id}>
                <span>
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
      </Link>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <span aria-hidden="true" className="" />
            {order.name}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{order.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{order.price}</p>
      </div>
    </div>
  );
}
export default ProductCard;
