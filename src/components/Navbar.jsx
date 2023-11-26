import React from "react";
import { GrAdd } from "react-icons/gr";
import { Link } from "react-router-dom";
import { PiNotePencilFill } from "react-icons/pi";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="">
        <img src={logo} alt="Manegea" className="inline h-10" />
        <span className="pl-2 text-xl font-bold uppercase">Managea</span>
      </div>
      <div className="flex gap-4">
        <Link
          to="/add"
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-sky-200"
        >
          <GrAdd className="" />
          <span className="hidden lg:block">Add Events</span>
        </Link>
        <Link
          to="/manage"
          className="flex items-center gap-2 rounded-lg p-2 hover:bg-sky-200"
        >
          <PiNotePencilFill className="" />
          <span className="hidden lg:block">Manage Events</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
