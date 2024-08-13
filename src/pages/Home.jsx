import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className="text-white font-ubuntu">
    {/* HOMEPAGE */}
    <div id="home"
        className="bg-[url('./newbg1.png')] bg-cover bg-center h-screen flex flex-col items-center p-2 relative"
    >
    
    </div>
    {/*END HOMEPAGE */}

    {/* SECOND PAGE */}
    <div id="aboutus" className="WHO WE ARE flex flex-col justify-center items-center text-black py-10 p-2">
        <div className="flex flex-wrap mt-20 md:gap-14 items-center justify-center">
            <div className="img">
                <img src="./who.png" alt="" />
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
    <div id="blog" className="WHO WE ARE flex flex-col justify-center items-center text-black py-10 p-2">
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
                <img src="./third.png" alt="" />
            </div>
        </div>
    </div>
    {/* END OF THIRDPAGE */}

    {/* FOURTH PAGE */}
    <div id="contactus" className="WHO WE ARE flex flex-col justify-center items-center text-center text-black py-10">
        <h1 className="text-[#FF863C] font-bold md:text-2xl">FOLLOW US ON SOCIAL MEDIA</h1>
        <h1 className="md:text-4xl text-xl font-bold mt-3">Stay Connected and Up-to-Date</h1>
        <div className="flex mt-8 md:gap-10 flex-wrap justify-center">
            <img src="./cion1.png" alt="" />
            <img src="./icon2.png" alt="" />
            <img src="./icon3.png" alt="" />
            <img src="./icon4.png" alt="" />
            <img src="./icon5.png" alt="" />
        </div>
    </div>
    {/* END OF FOURTHPAGE */}

    <Footer />

</div>
  )
}
