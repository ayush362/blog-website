import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{blog.age}</h1>
      <hr />
      <div>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myBlog = await data.json();
  return {
    props: { myBlog },
  };
}
export default slug;
