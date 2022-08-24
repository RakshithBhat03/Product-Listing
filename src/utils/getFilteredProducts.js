import { filterSortBy, filterGender, filterBrand, filterSize } from "./";

const getFilteredData = (products, filter) =>
  [filterSortBy, filterGender, filterBrand, filterSize].reduce(
    (prev, curr) => curr(prev, filter),
    products
  );

export { getFilteredData };
