import { useFilter, useProducts } from "../../context";

const Filters = () => {
  const { products } = useProducts();
  const getBrands = (products) => [
    ...new Set(products.map((product) => product.brand)),
  ];
  const { filter, dispatch } = useFilter();
  const brands = getBrands(products);
  return (
    <aside className="cols-span-1 shadow-2xl bg-white mt-2 ml-2">
      <section className="flex flex-col h-full m-2 p-1 gap-1">
        <div className="flex align-center">
          <h2 className="text-3xl font-semibold">Filters</h2>
          <button
            onClick={() => dispatch({ type: "RESET" })}
            className="ml-auto px-2 py-1 bg-rose-500 text-white rounded-md">
            Reset
          </button>
        </div>

        <div className=" p-2">
          <h3 className="text-xl font-semibold">Gender</h3>
          <div className="flex flex-col ml-2 mt-2">
            <label>
              <input
                type="radio"
                className="mr-2"
                name="gender"
                checked={filter.gender === "MEN"}
                onChange={() => dispatch({ type: "GENDER", payload: "MEN" })}
              />
              Men
            </label>
            <label>
              <input
                type="radio"
                className="mr-2"
                name="gender"
                checked={filter.gender === "WOMEN"}
                onChange={() => dispatch({ type: "GENDER", payload: "WOMEN" })}
              />
              Women
            </label>
          </div>
        </div>
        <div className="p-2">
          <h3 className="text-xl font-semibold">Brand</h3>
          <div className="flex flex-col ml-2 mt-2">
            {brands.map((brand) => (
              <label key={brand}>
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={filter.brand.includes(brand)}
                  onChange={() => dispatch({ type: "BRAND", payload: brand })}
                />
                {brand}
              </label>
            ))}
          </div>
        </div>
        <div className="p-2">
          <h3 className="text-xl font-semibold">Size</h3>
          <div className="flex flex-col ml-2 mt-2">
            <label>
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.size.includes("S")}
                onChange={() => dispatch({ type: "SIZE", payload: "S" })}
              />
              S
            </label>
            <label>
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.size.includes("M")}
                onChange={() => dispatch({ type: "SIZE", payload: "M" })}
              />
              M
            </label>{" "}
            <label>
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.size.includes("L")}
                onChange={() => dispatch({ type: "SIZE", payload: "L" })}
              />
              L
            </label>
            <label>
              <input
                type="checkbox"
                className="mr-2"
                checked={filter.size.includes("XL")}
                onChange={() => dispatch({ type: "SIZE", payload: "XL" })}
              />
              XL
            </label>
          </div>
        </div>
        <div className="p-2">
          <h3 className="text-xl font-semibold">Sort By</h3>
          <div className="flex flex-col ml-2 mt-2">
            <label>
              <input
                type="radio"
                name="sort-by"
                className="mr-2"
                checked={filter.sortBy === "HIGH_TO_LOW"}
                onChange={() => dispatch({ type: "HIGH_TO_LOW" })}
              />
              High to low
            </label>
            <label>
              <input
                type="radio"
                name="sort-by"
                className="mr-2"
                checked={filter.sortBy === "LOW_TO_HIGH"}
                onChange={() => dispatch({ type: "LOW_TO_HIGH" })}
              />
              Low to high
            </label>
          </div>
        </div>
      </section>
    </aside>
  );
};

export { Filters };
