export const filterGender = (products, filter) => {
  switch (filter.gender) {
    case "MEN":
      console.log(filter.gender);
      return products.filter((product) => product.gender === "male");
    case "WOMEN":
      return products.filter((product) => product.gender === "female");
    default:
      return [...products];
  }
};
