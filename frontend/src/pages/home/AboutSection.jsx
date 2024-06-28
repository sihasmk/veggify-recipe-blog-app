import React from "react";

const AboutSection = () => {
  return (
    <div className="flex flex-col overflow-hidden md:flex-row sm:my-20 my-4 md:gap-20 justify-center items-center gap-12 px-5 lg:px-10">
      <div className="text-start sm:w-1/2">
        <h1 className="text-4xl font-bold sm:leading-relaxed mb-2">
          Vegan Foodie who loves to experiment with recipes
        </h1>
        <p className="leading-7 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium,
          tempora! Unde dolore quisquam voluptas ut at odio rem itaque
          exercitationem architecto. Accusamus laboriosam molestiae soluta velit
          quam cumque, recusandae quia aperiam. Consequatur hic ratione quisquam
          cum. Nulla quod cumque animi itaque neque. <br />
          <br />
          Nam consequuntur a quidem doloribus sapiente dolore repudiandae beatae
          eaque expedita incidunt enim, at perspiciatis. Illum, aut nam vero vel
          unde quia perspiciatis laborum voluptatibus nihil autem, ab molestias,
          reiciendis natus! Atque dignissimos molestias quidem.
        </p>
        <button className="text-white bg-btnColour border-none hover:bg-btnHover px-4 py-2 rounded font-semibold transition ease-in">
          View Recipe
        </button>
      </div>
      <div>
        <img
          className="rounded-md h-[600px]"
          src="https://qph.cf2.quoracdn.net/main-qimg-b6d7677eaee22bbfa5fd2b6b0be9021c"
          alt=""
        />
      </div>
    </div>
  );
};

export default AboutSection;
