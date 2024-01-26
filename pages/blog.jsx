import { Navbar } from "@/components/navbar";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("useEffect is running");
    fetch("http://localhost:3000/api/blogs")
      .then((response) => response.json())
      .then((parsed) => {
        console.log(parsed);
        setBlogs(parsed);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // <-- Added an empty dependency array to make it run only once on mount

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

export default blog;
