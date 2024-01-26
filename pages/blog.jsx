import { Navbar } from "@/components/navbar";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <section className="container mx-auto flex flex-col gap-10 mt-10">
      <div className="container mx-auto text-2xl flex flex-col gap-10 justify-center items-center">
        {blogs.map((blogitem) => {
          return (
            <div key={blogitem.author}>
              <Link href={`blogpost/${blogitem.slug}`}>
                <p>{blogitem.author}</p>
              </Link>
              <p>{blogitem.age}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: { allBlogs },
  };
}

export default blog;
