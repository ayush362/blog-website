import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
const blog = (props) => {
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <section className="container mx-auto flex flex-col gap-10 mt-10 ">
      <div className="container mx-auto text-2xl flex  gap-10 justify-center items-center">
        {blogs.map((blogitem) => {
          return (
            <div
              key={blogitem.author}
              className="flex flex-wrap border-green-800 border-2 items-center justify-center"
            >
              <Link href={`career/${blogitem.slug}`}>
                <div className="text-center font-bold">
                  <Image
                  className="h-60"
                    src={blogitem.image}
                    alt={blogitem.fullName}
                    width={1000}
                    height={1000}
                  />
                  <p>{blogitem.fullName}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/cricblogs");
  let allBlogs = await data.json();
  return {
    props: { allBlogs },
  };
}

export default blog;
