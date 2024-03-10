import banner from "../assets/woman/w1.jpg";
import arrow from "../assets/Demo/arrow_right_alt-24px.svg";
import demoImg from "../assets/Demo/Btg.svg";
import videoBac from "../assets/Rectangle.svg";
import video1 from "../assets/video1.mp4";

export const Banner = () => {
  return (
    <>
    
      <div
      id="first"
        className="borde bg-[#262BDB] h-[937px] -mt-16"
      >
        <div className=" w-[100%]  flex justify-between items-center absolute mt-56 px-20">
          <div className="md:w-[300px] xl:w-[500px]">
            <h1 className="text-4xl text-white">
              We Create Learning Experience With Excellent Technology.
            </h1>
            <p className=" mt-4 text-sm w-[25.7em] text-white">
              Unlimited Access To 100+ World-Class Courses, Hands-On Projects,
              And Job-Ready Certificate Programs— All Included In Your
              Subscription
            </p>
            <div className="mt-10 flex justify-between w-[20em]">
              <img className="w-[8em]" src={demoImg} alt="" />
              <div className="flex w-[10em] items-center ">
                <a className="text-sm text-white font-semibold" href="#">
                  Explore More
                </a>
                <img className="w-[1.2em]" src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div
              className="w-[30em] px-2 py-3 rounded-md"
              style={{
                backgroundImage: `url(${videoBac})`,
              }}
            >
              <video
              className="border rounded-xl" controls>
                <source src={video1} />
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
