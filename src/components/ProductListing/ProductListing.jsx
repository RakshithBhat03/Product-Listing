import { Showcase, Filters } from "../";

const ProductListing = () => {
  return (
    <div className="grid grid-cols-6 gap-2 h-full">
      <Filters />
      <Showcase />
    </div>
  );
};

export { ProductListing };
