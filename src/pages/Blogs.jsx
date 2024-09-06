import { FaArrowRight } from "react-icons/fa6";

export default function Blogs() {
  const blogs = [
    {
      image: "./who.png",
      date: "January 25, 2021",
      title: "Transforming Lives",
      description:
        "We're committed to transforming the way people learn about cloud computing and cloud security by making these complex topics accessible to everyone",
    },
    {
        image: "./who.png",
        date: "January 25, 2021",
        title: "Transforming Lives",
        description:
          "We're committed to transforming the way people learn about cloud computing and cloud security by making these complex topics accessible to everyone",
      },
      {
        image: "./who.png",
        date: "January 25, 2021",
        title: "Transforming Lives",
        description:
          "We're committed to transforming the way people learn about cloud computing and cloud security by making these complex topics accessible to everyone",
      },
      {
        image: "./who.png",
        date: "January 25, 2021",
        title: "Transforming Lives",
        description:
          "We're committed to transforming the way people learn about cloud computing and cloud security by making these complex topics accessible to everyone",
      },
      {
        image: "./who.png",
        date: "January 25, 2021",
        title: "Transforming Lives",
        description:
          "We're committed to transforming the way people learn about cloud computing and cloud security by making these complex topics accessible to everyone",
      },
      {
        image: "./who.png",
        date: "January 25, 2021",
        title: "Transforming Lives",
        description:
          "We're committed to transforming the way people learn about cloud computing and cloud security by making these complex topics accessible to everyone",
      },
      {
        image: "./who.png",
        date: "January 25, 2021",
        title: "Transforming Lives",
        description:
          "We're committed to transforming the way people learn about cloud computing and cloud security by making these complex topics accessible to everyone",
      },

      {
        image: "./who.png",
        date: "January 25, 2021",
        title: "Transforming Lives",
        description:
          "We're committed to transforming the way people learn about cloud computing and cloud security by making these complex topics accessible to everyone",
      },
  ];
  return (
    <div className="font-ubuntu">
      <div className="2xl:h-screen h-full bg-gray-950 flex items-center text-white ">
        <div className="flex xl:flex-nowrap flex-wrap justify-center xl:gap-14 xl:pl-44 pl-0 2xl:mt-10 mt-44 2xl:mb-0 mb-20">
          <div className="p-4">
          <img src="./who.png" alt="" className="max-w-[30rem] w-full" />
          </div>
          <div className="details p-4">
            <h1 className="text-2xl">Featured Blog</h1>
            <h1 className="text-[#FF863C] md:mt-14 md:text-4xl text-3xl font-bold mt-2">
              Transforming Lives
            </h1>
            <h1 className="text-[#FF863C]  md:text-4xl text-3xl font-bold">
              Through Education and Training
            </h1>
            <p className="md:mt-10 mt-5 max-w-xl w-full">
              We're committed to transforming the way people learn about cloud
              computing and cloud security by making these complex topics
              accessible to everyone, whether you're just starting out or
              looking to advance your skills. Our team of dedicated
              professionals, passionate about technology and education, is hard
              at work developing comprehensive training programs to provide you
              with the best possible learning experience.{" "}
            </p>
            <div className="flex gap-4 py-10">
              <h1 className="font-semibold text-xl">Technology</h1>
              <div className="flex gap-2 items-center mt-1">
                <div className="bg-slate-300 w-3 h-3 rounded-full"></div>
                <p>4 mins read</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondpage py-10 flex flex-col justify-center items-center">
        <div className="max-w-[83%] w-full">
          <div className="flex justify-between pr-10">
            <h1 className="text-[#FF863C] text-3xl font-bold">Latest News</h1>
            <div className="gap-3 text-2xl font-bold text-[#FF863C] md:flex hidden">
                <h1>See all</h1>
                <FaArrowRight className="mt-1"/>
            </div>
          </div>
          <div className="blogs mt-7 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {blogs.map((blog, index)=>(
              <div key={index} className="flex flex-col max-w-80 md:mt-0 mt-14">
              <img src={blog.image} alt="" className=" " />
              <div className="date py-6 font-semibold text-gray-400">
                {blog.date}
              </div>
              <h1 className="text-[#FF863C] font-bold text-2xl mb-2">
               {blog.title}
              </h1>
              <p>
              {blog.description}
              </p>
            </div>
          ))}
          </div>
          <div className="gap-3 text-2xl font-bold text-[#FF863C] md:hidden flex mt-10">
                <h1>See all</h1>
                <FaArrowRight className="mt-1"/>
            </div>
        </div>
      </div>
    </div>
  );
}
