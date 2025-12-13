// src/utils/cartUtils.js

// Add a product to cart
export const addToCart = (product) => {
  // Get existing cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if product already exists
  const existingIndex = cart.findIndex((item) => item.id === product.id);

  if (existingIndex !== -1) {
    // Optional: Increase quantity if needed
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  // Save updated cart
  localStorage.setItem("cart", JSON.stringify(cart));
  return cart;
};

// Get cart items
export const getCartItems = () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
};

// Clear cart (optional)
export const clearCart = () => {
  localStorage.removeItem("cart");
};
