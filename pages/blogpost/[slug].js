import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const slug = () => {
  const [blog, setBlog] = useState();
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    const { slug } = router.query;
    fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        setBlog(parsed);
      });
  }, [router.isReady]);
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

export default slug;
