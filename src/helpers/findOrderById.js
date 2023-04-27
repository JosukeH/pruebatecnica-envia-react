import Products from '../mockup/orders.json';

const findOrderById = (id) => {
  // eslint-disable-next-line eqeqeq
  const orderFinded = Products.orders.filter((order) => order.id === String(id));

  if (!orderFinded) {
    return { error: true };
  }

  return orderFinded[0];
};

export default findOrderById;
