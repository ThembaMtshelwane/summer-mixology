import { useMatch } from "react-router-dom";

const ProductsHero = () => {
  // const { name } = useParams();
  const match = useMatch("/products/");
  return (
    <section
      className="bg-blue-900 h-[70vh] flex flex-col justify-center items-center"
      style={{
        backgroundImage: "url('hero/products/1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <section className="top-0 w-full h-[70%] flex flex-col items-center justify-center p-5">
        {match ? (
          <h1 className="uppercase text-5xl text-[#173e59] font-semibold sm:text-7xl">
            The collection
          </h1>
        ) : (
          ""
        )}
      </section>
    </section>
  );
};

export default ProductsHero;
