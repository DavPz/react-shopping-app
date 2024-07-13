import React, { useEffect, useState } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <Layout>
      Home
      <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
