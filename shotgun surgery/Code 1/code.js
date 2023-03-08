function calculateTotalPrice(items) {
  let totalPrice = 0;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.price > 10) {
      item.tax = item.price * 0.1;
    } else {
      item.tax = item.price * 0.05;
    }
    totalPrice += item.price + item.tax;
  }
  return totalPrice;
}

function applyDiscount(items) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.price > 50) {
      item.discount = item.price * 0.1;
    } else {
      item.discount = item.price * 0.05;
    }
    item.price -= item.discount;
  }
}