
export default function Footer() {
    return (
     <div className="">
        
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
            <div className="flex flex-col items-center md:text-xl font-thin text-center p-3  justify-center bg-gradient-to-r from-[#FF9345] to-[#D15711] py-5 text-white">
            <h1>Empowering Your Cloud Journey Every Step of the Way</h1>
            <h1>© 2024 CloudGuru. All Rights Reserved</h1>
        </div>
     </div>
    )
}
