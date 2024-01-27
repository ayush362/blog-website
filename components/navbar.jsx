import React from "react";
import Link from "next/link";

export const Navbar = ({ style }) => {
  console.log(style);
  return (
    <section className="bg-green-500 py-5">
      <div className="container mx-auto">
        <ul className="flex justify-between text-4xl">
          <link rel="stylesheet" href="" />
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/cricket">Cricket</Link>
          </li>

          <li>
            <Link href="/tech">Tech</Link>
          </li>
          <li>
            <Link href="/finance">Finance</Link>
          </li>
          <li>
            <Link href="/self-care">Self care</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
