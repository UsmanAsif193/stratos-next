import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center text-xl font-normal justify-between pt-8 px-24">
      <h1 className="tracking-[.7rem] uppercase font-extralight">Stratos</h1>
      <div>
        <ul className="flex">
          <li className="mx-6 cursor-pointer">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="mx-6 cursor-pointer">
            <Link href={"/"}>About Stratos</Link>
          </li>
          <li className="mx-6 cursor-pointer">
            <Link href={"/"}>The Social Club</Link>
          </li>
        </ul>
      </div>
      <div>Contact Us</div>
    </div>
  );
};

export default Navbar;
