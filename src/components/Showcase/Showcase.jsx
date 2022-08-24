import { useFilter, useProducts } from "../../context";
import { Card } from "../";
import { getFilteredData } from "../../utils/";

const Showcase = () => {
  const { products } = useProducts();
  const { filter } = useFilter();
  const filteredProducts = getFilteredData(products, filter);

  return (
    <div className="col-span-5 shadow-2xl bg-white mt-2 p-2">
      <div className="grid grid-cols-5 gap-2 my-2">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export { Showcase };
