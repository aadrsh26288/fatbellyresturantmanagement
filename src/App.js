// import { extendTheme, ChakraProvider, Box, Text } from '@chakra-ui/react'
import {Switch,Route,BrowserRouter} from 'react-router-dom'
// import Menu from './page/Menu';
import Header from './components/Header'
import Cart from './components/Cart'
import Menu from './components/Menu'
import {menuList} from './data/MenuList'
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  
} from "react-router-dom";



function App() {



  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const deleteProd = (varietalCount) => {
    const newItems = cartItems.filter((item) => item.id !== varietalCount.id)
    setCartItems(newItems);
  };





  return (
  
  //  <Router>
  //   <Header/>
  //   <Routes>
  //   <Route exact path="/" element={<Menu />} />
     
  //   </Routes>
  //  </Router>
  // <Menu/>





  
  <Router>
    <Header countCartItems={cartItems.length}/>
<Routes>
<Route exact path="/" element={ <Menu  data={menuList} onAdd={onAdd}/>} />
<Route path="/cart" element={ <Cart cartItems={cartItems} onRemove={onRemove}   onAdd={onAdd} remove={deleteProd} />} />

</Routes>
  </Router>


  );
}

export default App;
