import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import '../styles/Layout.css';
import Banner from './Banner';
import Cart from './Cart';
import Footer from './Footer';
import ShoppingList from './ShoppingList';

function App() {


  const savedCart = localStorage.getItem('cartContent');
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(
    () => {
      localStorage.setItem('cartContent', JSON.stringify(cart))
    }, [cart]
  );

  return (
    <div>
      <Banner>
        <img src={logo} alt='Trees house' className='th-logo' />
        <h1 className='th-title'>Trees' house</h1>
      </Banner>
      <div className='th-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} />
        <ShoppingList 
          cart={cart}
          updateCart={updateCart}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
