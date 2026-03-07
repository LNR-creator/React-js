
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [products, setProduct] = useState([]);
  const [page, setPage] = useState(1);
  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=2000');
    const data = await res.json();

    if (data && data.products) {
      setProduct(data.products);
    }


  };

  useEffect(() => {
    fetchProducts();
  }, [])

  return <>
    {
      products.length > 0 && <div className='products'>
        {
          products.slice(page * 10 - 10, 9).map((prod) => {
            return (
              <div className='product__single' key={prod.id}>

                <img src={prod.thumbnail} id='img' />
                <center><div class='prod-title'>{prod.title}</div></center>
                <br></br>
                <div className='btn'>
                  <button id='sub-btn' type='submit'>Add to cart</button>
                </div>
              </div>
            )
          })
        }
      </div>
    }

    {products.length > 0 && <div className='pagination'>
      <span class='page'><button class='page-btn'>1</button></span>
      <span class='page'><button class='page-btn'>2</button></span>
      <span class='page'><button class='page-btn'>3</button></span>
      <span class='page'><button class='page-btn'>4</button></span>
    </div>}
  </>
}

export default App;
