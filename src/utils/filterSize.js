export const filterSize = (products, filter) =>
  filter.size.length
    ? products.filter(
        (product) =>
          filter.size.filter((item) => product.size.includes(item)).length
      )
    : [...products];
