import React from "react";
import blog1 from "../../assets/images/blog1.png";
import blog2 from "../../assets/images/blog2.png";
import blog3 from "../../assets/images/blog3.png";
import blog4 from "../../assets/images/blog4.png";
import blog5 from "../../assets/images/blog5.png";
import human from "../../assets/images/human.svg";
import blogarrow from "../../assets/images/blogarrow.svg";
import Card from "./Card";

const Articles = () => {
  return (
    <div className="p-4 lg:px-16 py-6">
      <div className="my-4 font-bold text-xl text-darkGreen">Best Articles</div>
      <div className="bg-white rounded-xl md:flex md:items-center">
        <div className="relative md:w-1/2">
          <img
            src={blog1}
            className="rounded-xl max-h-[322px] w-full object-cover relative"
            alt=""
          />
          <div className="absolute top-0 z-10 text-xxs text-white p-3 py-2 m-5 bg-[#00000065] rounded-md">
            2 hours ago
          </div>
        </div>
        <div className="p-3 space-y-2 md:p-6 md:w-1/2">
          <div className="flex items-center text-xs text-darkGreen font-normal">
            <img src={human} className="h-3" alt="" />
            <div className="pl-2 pt-1">Stephanie Faris</div>
          </div>
          <div className="font-bold lg:text-xl text-dark">
            Our members save an average of $327 annually from our partner brands
          </div>
          <div className="text-xs text-selfGray">
            Our members save an average of $327 annually from our partner
            brands. Our members save an average of $327 annually from our
            partner brands. Our members save an average of $327 annually from
            our partner brands.
          </div>
          <div className="flex items-center text-xs text-darkGreen font-medium uppercase lg:text-sm">
            <div className="pt-1">Read more</div>
            <img src={blogarrow} className="h-2 pl-2" alt="" />
          </div>
        </div>
      </div>

      <div className="my-3 space-y-4 md:flex md:space-x-3 md:space-y-0">
        <div className="md:w-3/12">
          <Card
            author={"Stephanie Faris"}
            name={"Top Sale Products In 2023"}
            time={"December 20, 2023"}
            img={blog2}
          />
        </div>
        <div className="md:w-3/12">
          <Card
            author={"Stephanie Faris"}
            name={"Top Sale Products In 2023"}
            time={"December 20, 2023"}
            img={blog3}
          />
        </div>
        <div className="md:w-3/12">
          <Card
            author={"Stephanie Faris"}
            name={"Top Sale Products In 2023"}
            time={"December 20, 2023"}
            img={blog4}
          />
        </div>
        <div className="md:w-3/12">
          <Card
            author={"Stephanie Faris"}
            name={"Top Sale Products In 2023"}
            time={"December 20, 2023"}
            img={blog5}
          />
        </div>
      </div>
      <div className="md:flex md:space-x-3">
        <div className="md:w-4/12 mt-10">
          <div className="my-4 font-bold text-xl text-darkGreen">
            Recommended Articles
          </div>
          <div className="space-y-4">
            <Card
              author={"Stephanie Faris"}
              name={"Top Sale Products In 2023"}
              time={"December 20, 2023"}
              img={blog2}
            />
            <Card
              author={"Stephanie Faris"}
              name={"Top Sale Products In 2023"}
              time={"December 20, 2023"}
              img={blog3}
            />
            <Card
              author={"Stephanie Faris"}
              name={"Top Sale Products In 2023"}
              time={"December 20, 2023"}
              img={blog4}
            />
            <Card
              author={"Stephanie Faris"}
              name={"Top Sale Products In 2023"}
              time={"December 20, 2023"}
              img={blog5}
            />
          </div>
        </div>
        <div className="md:w-4/12 mt-10">
          <div className="my-4 font-bold text-xl text-darkGreen">
            About LMN Letters
          </div>
          <div className=" space-y-4">
            <Card
              author={"Stephanie Faris"}
              name={"Top Sale Products In 2023"}
              time={"December 20, 2023"}
              img={blog2}
            />
            <Card
              author={"Stephanie Faris"}
              name={"Top Sale Products In 2023"}
              time={"December 20, 2023"}
              img={blog3}
            />
            <Card
              author={"Stephanie Faris"}
              name={"Top Sale Products In 2023"}
              time={"December 20, 2023"}
              img={blog4}
            />
            <Card
              author={"Stephanie Faris"}
              name={"Top Sale Products In 2023"}
              time={"December 20, 2023"}
              img={blog5}
            />
          </div>
        </div>

        <div className="md:w-4/12 mt-10">
          <div className="my-4 font-bold text-xl text-darkGreen">
            Most Popular Articles
          </div>
          <div className=" space-y-4">
            <Card
              author={"Stephanie Faris"}
              name={"Top Sale Products In 2023"}
              time={"December 20, 2023"}
              img={blog2}
            />
            <Card
              author={"Stephanie Faris"}
              name={"Top Sale Products In 2023"}
              time={"December 20, 2023"}
              img={blog3}
            />
            <Card
              author={"Stephanie Faris"}
              name={"Top Sale Products In 2023"}
              time={"December 20, 2023"}
              img={blog4}
            />
            <Card
              author={"Stephanie Faris"}
              name={"Top Sale Products In 2023"}
              time={"December 20, 2023"}
              img={blog5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
