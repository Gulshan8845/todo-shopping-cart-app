import React, { useState, createContext, useContext } from 'react';

const CartContext = createContext();

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  // Generate random cart items
  const generateRandomCartItem = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const product = `Product ${randomId}`;
    const price = Math.floor(Math.random() * 50) + 1; // Random price between 1 and 50
    return {
      product,
      price,
    };
  };

  // Add a random item to the shopping cart
  const addToCart = () => {
    const newItem = generateRandomCartItem();
    setCartItems([...cartItems, newItem]);
    setTotalItems(totalItems + 1);
    setSubtotal(subtotal + newItem.price);
  };

  // Remove the last item from the shopping cart
  const removeFromCart = () => {
    if (cartItems.length === 0) return;
    const itemToRemove = cartItems[cartItems.length - 1];
    setCartItems(cartItems.slice(0, cartItems.length - 1));
    setTotalItems(totalItems - 1);
    setSubtotal(subtotal - itemToRemove.price);
  };

  // Handle form submission to add a custom item to the cart
  const handleAddCustomItem = (event) => {
    event.preventDefault();
    const productName = event.target.productName.value;
    const productPrice = parseFloat(event.target.productPrice.value);
    if (!isNaN(productPrice) && productPrice > 0 && productName.trim() !== '') {
      const newItem = {
        product: productName,
        price: productPrice,
      };
      setCartItems([...cartItems, newItem]);
      setTotalItems(totalItems + 1);
      setSubtotal(subtotal + productPrice);
      event.target.reset();
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, totalItems, subtotal }}
    >
      <div className="shopping-cart-container">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.product} className="cart-item">
              <span>{item.product}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart()}>Remove</button>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <p>Total Items: {totalItems}</p>
          <p>Subtotal: ${subtotal}</p>
        </div>
        <form onSubmit={handleAddCustomItem}>
          <input type="text" name="productName" placeholder="Product Name" required />
          <input type="number" name="productPrice" placeholder="Product Price" required />
          <button type="submit">Add Custom Item</button>
        </form>
      </div>
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);
  if (!cartContext) {
    throw new Error('useCartContext must be used within a CartContextProvider');
  }
  return cartContext;
};

export default ShoppingCart;
