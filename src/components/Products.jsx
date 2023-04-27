import useProducts from '../hooks/useProducts';
import Loader from './Loader';
import ProductList from './ProductList';

export default function Products() {
  const { data, loading } = useProducts('https://eshop-deve.herokuapp.com/api/v2/orders');
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold  text-center tracking-tight text-gray-900">Órdenes</h2>
        { loading ? <Loader /> : <ProductList products={data.orders} />}

      </div>
    </div>
  );
}
