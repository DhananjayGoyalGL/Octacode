let quantity = 1;
const unitPrice = 800.0;
const gst = 85.71;
const deliveryFee = 30.0;

function updatePrices() {
  const itemsPrice = (quantity * unitPrice).toFixed(2);
  const totalAmount = (quantity * unitPrice + gst + deliveryFee).toFixed(2);

  document.getElementById("quantity").innerText = quantity;
  document.getElementById("items-price").innerText = itemsPrice + " ₹";
  document.getElementById("item-total").innerText = itemsPrice + " ₹";
  document.getElementById("total-amount").innerText = totalAmount + " ₹";
}

function incrementQuantity() {
  quantity++;
  updatePrices();
}

function decrementQuantity() {
  if (quantity > 1) {
    quantity--;
    updatePrices();
  }
}

updatePrices();
