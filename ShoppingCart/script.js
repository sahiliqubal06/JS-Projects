document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Product1", price: 19.99 },
    { id: 2, name: "Product2", price: 29.99 },
    { id: 3, name: "Product3", price: 39.99 },
    { id: 4, name: "Product4", price: 49.99 },
  ];

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const storedCart = localStorage.getItem("cart");

  // const cart = storedCart ? JSON.parse(storedCart) : [];

  // localStorage.setItem("cart", JSON.stringify(cart));

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMsg = document.getElementById("empty-cart");
  const cartTotalMsg = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `<span>${product.name} - $${product.price.toFixed(
      2
    )}</span>
    <button data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  cartItems.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const index = parseInt(e.target.getAttribute("data-index"));
      removeFromCart(index);
    }
  });

  function addToCart(product) {
    cart.push(product);
    saveCartToLocalStorage();
    renderCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    saveCartToLocalStorage();
    renderCart();
  }

  function saveCartToLocalStorage() {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function renderCart() {
    cartItems.innerText = "";
    let totalPrice = 0;

    if (cart.length > 0) {
      emptyCartMsg.classList.add("hidden");
      cartTotalMsg.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.innerHTML = `<span>${item.name} - $${item.price.toFixed(
          2
        )} </span>
       <button data-index=${index} class="remove-btn">Remove</button>`;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
      });
    } else {
      emptyCartMsg.classList.remove("hidden");
      totalPriceDisplay.textContent = `$0.00`;
    }
  }

  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    localStorage.removeItem("cart");
    alert("Checkout successfully.");
    renderCart();
  });
  renderCart();
});
