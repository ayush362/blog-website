import React, { useEffect, useState } from "react";
import Image from "next/image";
const slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <section className="bg-gray-400">
      <div className="container mx-auto bg-white h-screen flex flex-col justify-center">
        <div className="flex">
          <Image
            src={blog.image}
            width={500}
            height={500}
            className="rounded-full mt-10"
          />
          <div className="self-end mb-20 ml-20">
            <p className="font-bold text-4xl">{blog.fullName}</p>
            <span className="font-semibold text-2xl text-gray-500">
              {blog.cityBorn}
            </span>
          </div>
        </div>
        <div className="flex mt-10">
          <div className="w-1/3 bg-gray-200 mr-5 flex flex-col items-center">
            <h3 className="font-bold text-3xl">Personal information</h3>
            <div className="flex gap-20">
              <p className="font-semibold text-xl">Born:</p>
              <p>
                {blog.cityBorn} ({blog.age}){" "}
              </p>
            </div>
            <div className="flex gap-20">
              <p className="font-semibold text-xl">Batting Style:</p>
              <p>{blog.battingStyle}</p>
            </div>
            <div className="flex gap-20">
              <p className="font-semibold text-xl">Odi debut year:</p>
              <p>{blog.odiDebutYear}</p>
            </div>
            <div className="flex gap-20">
              <p className="font-semibold text-xl">t20 debut year:</p>
              <p>{blog.t20DebutYear}</p>
            </div>
            <div className="flex gap-20">
              <p className="font-semibold text-xl">IPL debut year:</p>
              <p>{blog.iplDebutYear}</p>
            </div>
          </div>
          <div className="w-2/3 flex justify-between mr-5">
            <div >
              <div className="flex flex-col items-center">
                <p className="font-bold">Total matches</p>
                <p>{blog.matchesPlayed.total}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold">IPL matches</p>
                <p>{blog.matchesPlayed.ipl}</p>
              </div>{" "}
              <div className="flex flex-col items-center">
                <p className="font-bold">T20 matches</p>
                <p>{blog.matchesPlayed.t20}</p>
              </div>{" "}
              <div className="flex flex-col items-center">
                <p className="font-bold">ODI matches</p>
                <p>{blog.matchesPlayed.odi}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <p className="font-bold">Total runs</p>
                <p>{blog.runsScored.total}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold">IPL matches</p>
                <p>{blog.runsScored.ipl}</p>
              </div>{" "}
              <div className="flex flex-col items-center">
                <p className="font-bold">T20 matches</p>
                <p>{blog.runsScored.t20}</p>
              </div>{" "}
              <div className="flex flex-col items-center">
                <p className="font-bold">ODI matches</p>
                <p>{blog.runsScored.odi}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <p className="font-bold">Total balls faced</p>
                <p>
                  {blog.ballsFaced.ipl +
                    blog.ballsFaced.t20 +
                    blog.ballsFaced.odi}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold">IPL matches</p>
                <p>{blog.ballsFaced.ipl}</p>
              </div>{" "}
              <div className="flex flex-col items-center">
                <p className="font-bold">T20 matches</p>
                <p>{blog.ballsFaced.t20}</p>
              </div>{" "}
              <div className="flex flex-col items-center">
                <p className="font-bold">ODI matches</p>
                <p>{blog.ballsFaced.odi}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <p className="font-bold">Total centuries</p>
                <p>{blog.careerStats.centuries.total}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold">IPL matches</p>
                <p>{blog.careerStats.centuries.ipl}</p>
              </div>{" "}
              <div className="flex flex-col items-center">
                <p className="font-bold">T20 matches</p>
                <p>{blog.careerStats.centuries.t20}</p>
              </div>{" "}
              <div className="flex flex-col items-center">
                <p className="font-bold">ODI matches</p>
                <p>{blog.careerStats.centuries.odi}</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center">
                <p className="font-bold">Total fifties</p>
                <p>{blog.careerStats.fifties.total}</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold">IPL matches</p>
                <p>{blog.careerStats.fifties.ipl}</p>
              </div>{" "}
              <div className="flex flex-col items-center">
                <p className="font-bold">T20 matches</p>
                <p>{blog.careerStats.fifties.t20}</p>
              </div>{" "}
              <div className="flex flex-col items-center">
                <p className="font-bold">ODI matches</p>
                <p>{blog.careerStats.fifties.odi}</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data = await fetch(`http://localhost:3000/api/getcricblog?slug=${slug}`);
  let myBlog = await data.json();
  return {
    props: { myBlog },
  };
}
export default slug;
