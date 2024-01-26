import React from "react";
import Link from "next/link";

export const Navbar = ({ style }) => {
  console.log(style);
  return (
    <section className={style}>
      <div className="container mx-auto">
        <ul className="flex justify-between text-4xl">
          <link rel="stylesheet" href="" />
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">about</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
