import { ClipLoader } from "react-spinners";

const Spinner = () => {
  return (
    <section className="h-full w-full flex justify-center items-center">
      <ClipLoader size={50} />
    </section>
  );
};

export default Spinner;
