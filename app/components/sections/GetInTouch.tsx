import Link from "next/link";
import Image from "next/image";

interface FutureHealthcareProps {
  heading?: string;
}

const FutureHealthcare = ({ heading }: FutureHealthcareProps) => {
  return (
    <section
      className="md:px-36 px-4 md:pt-12 pt-8 pb-18 bg-center bg-no-repeat bg-cover text-dark relative"
      style={{ backgroundImage: "url('/Images/america-map.png')" }}
    >
      <div className="relative flex flex-col md:flex-row justify-between items-center md:gap-50 gap-20">
        {/* Left Side: Form Card */}
        <div className="bg-[#f9f8f8] md:p-20 p-12 rounded-xl shadow-2xl w-full md:w-3/4">
          <h2 className="md:text-5xl text-4xl mb-12 font-medium font-Nunito">
            Get in Touch
          </h2>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b-1 border-gray-800 outline-none py-3 mb-4 pl-5 placeholder-black font-semibold font-Nunito"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border-b-1 border-gray-800 outline-none py-3 mb-4 pl-5 placeholder-black font-semibold font-Nunito"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b-1 border-gray-800 outline-none py-3 mb-4 pl-5 placeholder-black font-semibold font-Nunito"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                className="w-full border-b-1 border-gray-800 outline-none py-3 mb-8 pl-5 placeholder-black font-semibold font-Nunito"
              ></textarea>
            </div>

            {/* Upload & Send */}
            <div className="flex items-center justify-between pt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <img
                  src="/Images/upload-icon.png"
                  alt="Upload"
                  className="w-4 h-4"
                />
                <span className="text-gray-800 font-semibold font-Nunito">
                  Upload file
                </span>
                <input type="file" className="hidden" />
              </label>

              <button
                type="submit"
                className="bg-dark text-white bg-gray-800 px-14 py-1 rounded-full shadow-md hover:bg-gray-800 text-sm font-Nunito"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full md:w-1/4 text-center md:text-left flex flex-col gap-8 font-Nunito border-l-2 border-gray-700 pl-6">
          <div>
            <h4 className="font-semibold text-2xl mb-2">Location:</h4>
            <p className="text-sm font-semibold">
              Codetokloud Inc,
              <br />
              PO Box 9165,
              <br />
              Naperville, IL 60567
              <br />
              United States
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-2xl mb-2">Email:</h4>
            <p className="text-sm font-semibold">sales@codetokloud.com</p>
          </div>

          <div>
            <h4 className="font-semibold text-2xl mb-2">Phone Number:</h4>
            <p className="text-sm font-semibold">+1 (480) 572-7818</p>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="font-semibold text-2xl mb-4">Follow us at:</h4>
            <div className="flex md:align-start md:justify-start align-center justify-center gap-4">
              <a href="#">
                <img
                  src="/Images/fb-link.png"
                  alt="Facebook"
                  className="w-12 h-12 object-contain"
                />
              </a>
              <a href="#">
                <img
                  src="/Images/insta-link.png"
                  alt="Instagram"
                  className="w-12 h-12 object-contain"
                />
              </a>
              <a href="#">
                <img
                  src="/Images/link-link.png"
                  alt="LinkedIn"
                  className="w-12 h-12 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureHealthcare;
