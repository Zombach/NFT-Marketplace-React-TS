export function getFormattedPrice(price: number | null | undefined) {
  if (typeof price == 'number') {
    return '$' + price.toFixed(2);
  }
  return '';
}
