
export default function Dashboard() {
    return (
        <div className="text-white font-ubuntu">
            {/* HOMEPAGE */}
            <div id="home"
             style={{ 
              backgroundImage: "url('./newbg2.png')", 
              backgroundSize: "cover", 
              backgroundPosition: "center", 
            }}
                className=" bg-cover bg-center h-screen flex flex-col items-center p-2 relative"
            >
        <div className="text-center md:mt-36 mt-28 flex flex-col justify-center items-center">
            <img src="./logow.png" className="md:max-w-44 max-w-28 w-full" alt="" />
        <h1
        className="md:text-[140px] text-5xl font-extrabold text-white tracking-wider mt-3 md:flex hidden font-mocherat"
        style={{
          textShadow: `
            calc(40px * cos(80deg)) calc(-82px * sin(180deg)) 0px #ce6b15,   /* Yellow shadow */
            calc(80px * cos(80deg)) calc(-50px * sin(180deg)) 0px #502b09 /* Orange shadow */
          `,
        }}
      >
        THE CLOUDS GURU
      </h1>

      <h1
        className="md:text-[120px] text-5xl font-extrabold font-mocherat text-white tracking-wider mt-3 md:hidden flex"
        style={{
          textShadow: `
            calc(20px * cos(80deg)) calc(-82px * sin(180deg)) 0px #ce6b15,   /* Yellow shadow */
            calc(50px * cos(80deg)) calc(-50px * sin(180deg)) 0px #502b09 /* Orange shadow */
          `,
        }}
      >
        THE CLOUDS GURU
      </h1>
        
        <h1 className="md:text-3xl text-lg font-thin md:tracking-[10px] tracking-[3px] mt-4">I LOVE IT: THIS IS MY JOB AND HOBBY</h1>
        <div className="flex flex-wrap gap-2 justify-center mt-8 text-4xl absolute bottom-5">
        <img src="./youtube.png" className="" alt="" />
        <img src="./facebook.png" className="" alt="" />
        <img src="./tiktok.png" alt="" />
        <h1 className="font-thin text-3xl">/thecloudsguru.com</h1>
        </div>
        </div>
            </div>
            {/*END HOMEPAGE */}

            {/* SECOND PAGE */}
            <div id="aboutus" className="WHO WE ARE flex flex-col justify-center items-center text-black py-10 p-2">
                <div className="flex flex-wrap mt-20 md:gap-14 items-center justify-center">
                    <div className="img">
                        <img src="./who.png" className="max-w-3xl w-full rounded-xl" alt="" />
                    </div>
                    <div className="details">
                        <h1 className="text-xl text-[#FF863C] font-bold mt-2">WHO WE ARE</h1>
                        <h2 className="md:text-5xl text-2xl font-bold max-w-[35rem] mt-4">Transforming Lives
                            Through Education and
                            Training</h2>
                            <p className="text-lg max-w-[35rem] w-full mt-5 font-thin">
                            We're committed to transforming the way people learn about cloud computing and cloud security by making these complex topics accessible to everyone, whether you're just starting out or looking to advance your skills. Our team of dedicated professionals, passionate about technology and education, is hard at work developing comprehensive training programs to provide you with the best possible learning experience. 
                            </p>
                    </div>
                </div>
            </div>
            {/* END OF SECONDPAGE */}


                 {/* THIRD PAGE */}
                 <div id="blog" className="WHO WE ARE flex flex-col justify-center items-center text-black py-10 p-2 mb-10">
                <div className="flex flex-wrap-reverse mt-20 md:gap-14 justify-center items-center">
                    <div className="details">
                        <h1 className="text-xl text-[#FF863C] font-bold mt-2">OUR VIDEOS</h1>
                        <h2 className="md:text-5xl text-3xl font-bold max-w-[40rem] mt-4">
                        Explore, Learn, and Grow with Our Expert Video
                        </h2>
                            <p className="text-lg max-w-[35rem] w-full mt-5 font-thin">
                            While our full training offerings are still in the works, we're excited to share the wealth of knowledge we've already curated on our YouTube channel, where you'll find a wide range of videos covering essential topics in cloud computing, cybersecurity, and AI—perfect for anyone eager to begin their cloud journey or deepen their understanding of these critical areas.
                            </p>
                    </div>
                    <div className="img">
                        <img src="./third.png" className="max-w-3xl w-full rounded-xl" alt="" />
                    </div>
                </div>
            </div>
            {/* END OF THIRDPAGE */}

  

        </div>
    );
}
