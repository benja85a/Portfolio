import Image from "next/image";
import React from "react";
interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlDemo: string;
  };
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image } = data;
  return (
    <div key={id} className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl">{title}</h3>
      <Image
        src={image}
        alt="Image product"
        width={200}
        height={200}
        className="w-full md:w-[200px] rounded-2xl h-auto"
      />
      {/* <div className="flex gap-5 mt-5 ">
        <Link
          href={urlDemo}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg
         bg-amber-700 hover:bg-amber-700/80 "
        >
          Github
        </Link>
      </div> */}
    </div>
  );
};

export default PortfolioBox;
