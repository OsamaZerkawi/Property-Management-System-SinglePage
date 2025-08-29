// ✅ moved formatPrice directly here
export const formatPrice = (price) => {
  if (!price) return "0";

  let num = Number(price);
  if (isNaN(num)) return price;
  num = num.toFixed(0);

  if (num >= 1000000) return num / 1000000 + "M";
  if (num >= 1000) return num / 1000 + "K";
  return num.toLocaleString();
};
