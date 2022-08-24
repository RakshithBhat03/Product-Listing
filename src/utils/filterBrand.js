export const filterBrand = (products, filter) =>
  filter.brand.length
    ? products.filter((product) => filter.brand.includes(product.brand))
    : [...products];
