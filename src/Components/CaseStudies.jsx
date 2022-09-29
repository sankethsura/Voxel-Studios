import React from "react"
import Footer from "./Footer";
const CaseStudies = (props) => {
  return (
    <div>
          <header className="h-[18vh] justify-center items-center flex bg-gradient-to-r from-[#53bcb3] to-[#055792] w-full text-3xl text-white font-semibold">CASE STUDIES</header>
          <section className="flex m-auto items-center justify-evenly my-10">
              <div className="w-[30vw] h-[60vh] bg-slate-50 rounded-xl">
                  <img alt="" src="https://img.freepik.com/free-photo/man-with-vr-headset_144627-42378.jpg?w=1800&t=st=1664445037~exp=1664445637~hmac=ece598807d71472a7594ee5cc3504e239c947b208d03cbdd1584a28fe5a45fb4" className="w-full h-[30vh] object-cover bg-black rounded-xl shadow-xl hover:scale-[108%] duration-300" />
                  <section className="flex flex-col justify-center items-start text-start my-5">
                      <h2 className="text-2xl font-semibold">Windows Application</h2>
                      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum aperiam accusantium corrupti modi ipsum, impedit, repellendus quis sequi, laborum repudiandae ipsa quibusdam porro molestiae?</p>
                      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum aperiam accusantium corrupti modi ipsum, impedit, repellendus quis sequi, laborum repudiandae ipsa quibusdam porro molestiae?</p>
                  </section>
              </div>
              <div className="w-[30vw] h-[60vh] bg-slate-50 rounded-xl">
                  <img alt="" src="https://img.freepik.com/free-photo/people-hangout-together-coffee-shop_53876-165280.jpg?w=1800&t=st=1664445088~exp=1664445688~hmac=b3489fbca30c72c2700c4a5cf1915f4bcf32067279ffb0fe2caf28d1f3658bf2" className="w-full h-[30vh] object-cover bg-black rounded-xl shadow-xl hover:scale-[108%] duration-300" />
                  <section className="flex flex-col justify-center items-start text-start my-5">
                      <h2 className="text-2xl font-semibold">Android Application</h2>
                      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum aperiam accusantium corrupti modi ipsum, impedit, repellendus quis sequi, laborum repudiandae ipsa quibusdam porro molestiae?</p>
                      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum aperiam accusantium corrupti modi ipsum, impedit, repellendus quis sequi, laborum repudiandae ipsa quibusdam porro molestiae?</p>
                  </section>
              </div>
              <div className="w-[30vw] h-[60vh] bg-slate-50 rounded-xl">
                  <img alt="" src="https://biorev.com/wp-content/uploads/2020/10/3D-Furniture-Rendering-Services.png" className="w-full h-[30vh] object-cover bg-black rounded-xl shadow-xl hover:scale-[108%] duration-300" />
                  <section className="flex flex-col justify-center items-start text-start my-5">
                      <h2 className="text-2xl font-semibold">Web Application</h2>
                      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum aperiam accusantium corrupti modi ipsum, impedit, repellendus quis sequi, laborum repudiandae ipsa quibusdam porro molestiae?</p>
                      <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum aperiam accusantium corrupti modi ipsum, impedit, repellendus quis sequi, laborum repudiandae ipsa quibusdam porro molestiae?</p>
                  </section>
              </div>
          </section>
          <Footer/>
    </div>
  )
};

export default CaseStudies;
