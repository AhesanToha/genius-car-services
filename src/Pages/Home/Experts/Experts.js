import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Expert from "../Expert/Expert";

const experts = [
  { name: "will smith", id: 1, img: expert1 },
  { name: "Ricky Ponting", id: 2, img: expert2 },
  { name: "Henry Adam", id: 3, img: expert3 },
  { name: "Nicholas jumps", id: 4, img: expert4 },
  { name: "Alex Carry", id: 5, img: expert5 },
  { name: "Chise Rocks", id: 6, img: expert6 },
];

const Experts = () => {
  return (
    <div id="experts" className="container">

      <h2 className="text-secondary text-center mt-4 ">Our Experts</h2>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
