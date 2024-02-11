function calculateTotalcartValue() {
  totalcart = 0;
  for (let i = 0; i < arguments.length; i++) {
    totalcart += arguments[i];
  }
  console.log(`Total cart value is ${totalcart}`);
  return totalcart;
}
calculateTotalcartValue(100, 100, 100);
