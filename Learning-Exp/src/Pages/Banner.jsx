// import banner from "../assets/woman/w1.jpg";
import arrow from "../assets/Demo/arrow_right_alt-24px.svg";
import video1 from "../assets/video1.mp4";
import poster from "../assets/Group/Group3.png"

export const Banner = () => {
  return (
    <>
       <div
      id="first"
        className="borde  h-[937px] -mt-16"
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
            <div className="mt-10 flex justify-between w-[20em] gap-2">
              <button className="border text-sm font-semibold bg-[#FFEC05] rounded-full h-[2.5em] w-[12em]">Book Demo Class</button>
              <div id="hover1" className="flex w-[10em] items-center">
                <a className="text-sm text-white font-semibold" href="#">
                  Explore More
                </a>
                <img id="img1" className="w-[1.2em]" src={arrow} alt="" />
              </div>
            </div>
          </div>
          <div>
            <div
              className="w-[30em] px-2 py-3 rounded-md"
            >
              <video
              className="rounded-xl" controls poster={poster}>
                <source src={video1} />
              </video>
            </div>
          </div>
        </div>
      </div>
    
     
    </>
  );
};
