const Card = ({ product }) => {
  return (
    <a
      className="drop-shadow-2xl shadow-md border border-slate-300 p-2 h-[32rem] flex gap-1 flex-col"
      href={product.link}
      target="_blank"
      rel="noreferrer">
      <figure className="w-full h-96">
        <img src={product.url} alt="thumbnail" className="h-full w-full" />
      </figure>
      <p className="truncate  ... text-xl font-semibold">{product.name}</p>
      <span className="block text-md font-semibold text-slate-400">
        {product.brand}
      </span>
      <span className="block text-md font-semibold">₹ {product.price}</span>
      <span className="block text-md font-semibold">
        Size: {product.size.map((size, i) => (i !== 0 ? "," + size : size))}
      </span>
    </a>
  );
};

export { Card };
