import { useParams } from 'react-router-dom';
import ProductId from '../components/ProductId';

function Orden() {
  const { id } = useParams();

  return (
    <div className="mx-auto max-w-2xl h-screen px-4 py-16 bg-white sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <ProductId id={id} />
    </div>
  );
}
export default Orden;
