function Purchase() {
  const products = [
    {
      name: 'Kettlebell / 5kg',
      oldPrice: '89,99$',
      newPrice: '59,99$',
      image: '/assets/purchase1.jpg'
    },
    {
      name: 'Treadmill',
      oldPrice: '899,99$',
      newPrice: '599,99$',
      image: '/assets/purchase2.jpg'
    },
    {
      name: 'Adjustable Dumbbell',
      oldPrice: '89,99$',
      newPrice: '59,99$',
      image: '/assets/purchase3.jpg'
    },
    {
      name: 'Kettlebell / 3kg',
      oldPrice: '89,99$',
      newPrice: '59,99$',
      image: '/assets/purchase4.jpg'
    }
  ];

  return (
    <section className="purchase">
      <PurchaseHeader />
      <ProductGrid products={products} />
    </section>
  );
}

function PurchaseHeader() {
  return (
    <div className="purchase-header">
      <h1>PURCHASE FROM US</h1>
      <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
    </div>
  );
}

function ProductGrid({ products }) {
  return (
    <div className="purchase-container">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>
          <span className="old-price">{product.oldPrice}</span> / <span className="new-price">{product.newPrice}</span>
        </p>
        <div className="add-to-cart">
          <img src="/assets/shopping-cart.png" alt="" width="15px" height="15px" />
          <span>Add To Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Purchase;