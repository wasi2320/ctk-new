import React from "react";
import { Upload, Facebook, Instagram, Linkedin } from "lucide-react";

export default function page() {
  return (
    <div>
      <header className="w-full h-[300px] md:h-[350px] lg:h-[400px] bg-[url('/Images/contact/contactHeader.png')] bg-cover bg-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center lg:justify-end px-5 md:px-[5%] lg:px-[10%] xl:px-[15%]">
          <div className="absolute z-[2] w-full max-w-full md:max-w-[600px] lg:w-[60%] lg:max-w-none text-white text-center lg:text-start px-[15px] lg:right-0 lg:mr-[5%]">
            <h1 className="text-[2rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[3.5rem] font-semibold mb-4 md:mb-5 lg:mb-6 leading-[1.2]">
              Reach out to us to schedule a meeting
            </h1>
            <p className="text-base md:text-[1.1rem] lg:text-[1.2rem] leading-[1.5] opacity-90">
              Connect with our team to discuss solutions tailored to your
              business needs and accelerate your digital growth.
            </p>
          </div>
        </div>
      </header>

      <section className="py-10 px-5 md:py-15 md:px-8 lg:py-20 lg:px-10 bg-[url('/Images/contact/America-map.png')] bg-cover bg-center relative">
        <div className="max-w-[1000px] mx-auto rounded-[20px] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-[#fafafa] p-5 md:p-10 lg:p-[40px] rounded-[20px] mb-8 lg:mb-0">
              <h2 className="text-[1.8rem] md:text-[2rem] text-[#333] mb-5">Get in Touch</h2>
              <form className="flex flex-col gap-6">
                <div className="mb-5">
                  <input 
                    type="text" 
                    placeholder="Name" 
                    required 
                    className="w-full px-4 py-3 bg-transparent border-b border-black rounded-none focus:outline-none focus:border-b-2 focus:border-black text-black placeholder-black/70"
                  />
                </div>
                <div className="mb-5">
                  <input 
                    type="text" 
                    placeholder="Company Name" 
                    required 
                    className="w-full px-4 py-3 bg-transparent border-b border-black rounded-none focus:outline-none focus:border-b-2 focus:border-black text-black placeholder-black/70"
                  />
                </div>
                <div className="mb-5">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    className="w-full px-4 py-3 bg-transparent border-b border-black rounded-none focus:outline-none focus:border-b-2 focus:border-black text-black placeholder-black/70"
                  />
                </div>
                <div className="mb-5">
                  <input 
                    placeholder="Message" 
                    required 
                    className="w-full px-4 py-3 bg-transparent border-b border-black rounded-none focus:outline-none focus:border-b-2 focus:border-black text-black placeholder-black/70  resize-none"
                  />
                </div>
                <div className="flex items-center justify-between mt-[20px]">
                  <div className="relative">
                    <input type="file" id="file-input" className="hidden" />
                    <label 
                      htmlFor="file-input" 
                      className="flex items-center gap-2.5 px-5 py-1.5 text-black cursor-pointer hover:opacity-80 transition-all duration-300"
                    >
                      <Upload className="text-[#949494] w-5 h-5" />
                      <span>Upload file</span>
                    </label>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-black text-white px-5 py-1.5 rounded-[70px] text-sm md:text-base hover:bg-[#333] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            <div className="p-8 md:p-10 flex items-center justify-center lg:border-l lg:border-black my-[22%] mx-[15%]">
              <div className="w-full max-w-md">
                <div className="mb-6">
                  <h3 className="text-[1.2rem] text-[#333] mb-2.5">Location:</h3>
                  <p className="text-[#666] my-1">44 Cherry DR, Troy,</p>
                  <p className="text-[#666] my-1">Michigan</p>
                  <p className="text-[#666] my-1">48083 United States (748)</p>
                  <p className="text-[#666] my-1">823-32001</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-[1.2rem] text-[#333] mb-2.5">Email:</h3>
                  <p className="text-[#666] my-1">C2B@gmail.com</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-[1.2rem] text-[#333] mb-2.5">Phone Number:</h3>
                  <p className="text-[#666] my-1">+736383839912</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-[1.2rem] text-[#333] mb-2.5">Follow us at:</h3>
                  <div className="flex gap-4 mt-2.5">
                    <a href="#" className="text-[#333] text-2xl hover:text-black transition-colors duration-300">
                      <Facebook />
                    </a>
                    <a href="#" className="text-[#333] text-2xl hover:text-black transition-colors duration-300">
                      <Instagram />
                    </a>
                    <a href="#" className="text-[#333] text-2xl hover:text-black transition-colors duration-300">
                      <Linkedin />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      
    </div>
  );
}
