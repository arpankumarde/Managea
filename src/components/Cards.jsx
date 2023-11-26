import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const Cards = ({ val }) => {
  let { title, desc, date, url, formlink } = val;
  //   let date = Date.parse(datetime);
  //   console.log(date);

  return (
    <div className="m-2 flex w-full flex-col gap-4 rounded-lg bg-white bg-opacity-70 p-4 shadow-lg drop-shadow-lg transition-all ease-in-out hover:scale-105 hover:drop-shadow-2xl lg:w-[31rem] lg:flex-row">
      <img
        src={url ? url : "/src/assets/noimage.png"}
        alt={title}
        className="aspect-video h-40 rounded-lg object-cover"
      />
      <div className="flex w-full flex-col justify-between gap-4">
        <div>
          <h3>{title}</h3>
          <h4>{date}</h4>
          <p>{desc}</p>
        </div>
        <div>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 rounded-lg bg-black py-1 pl-4 pr-3 text-white"
          >
            Register
            <MdArrowOutward className="inline" />
          </Link>
        </div>
      </div>
      <></>
    </div>
  );
};

export default Cards;
