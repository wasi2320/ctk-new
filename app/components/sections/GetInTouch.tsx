import Link from "next/link";
import Image from "next/image";
import { getContactSocialLinks } from "@/utils/data/socialMedia";

interface GetInTouchProps {
  heading?: string;
}

const GetInTouch = ({ heading }: GetInTouchProps) => {
  const socialLinks = getContactSocialLinks();

  return (
    <section
      className="px-4 sm:px-8 md:px-12 lg:px-24 py-12 bg-center bg-no-repeat bg-cover text-dark relative"
      style={{ backgroundImage: "url('/Images/america-map.png')" }}
    >
      <div className="relative flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12">
        {/* Left Side: Form Card */}
        <div className="bg-[#f9f8f8] p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl w-full lg:w-2/3">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8 font-medium font-Nunito">
            Get in Touch
          </h2>

          <form className="space-y-4 md:space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full border-b border-gray-800 outline-none py-3 pl-5 placeholder-black font-semibold font-Nunito"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full border-b border-gray-800 outline-none py-3 pl-5 placeholder-black font-semibold font-Nunito"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-800 outline-none py-3 pl-5 placeholder-black font-semibold font-Nunito"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border-b border-gray-800 outline-none py-3 pl-5 placeholder-black font-semibold font-Nunito"
              ></textarea>
            </div>

            {/* Upload & Send */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <Image
                  src="/Images/upload-icon.png"
                  alt="Upload"
                  className="w-4 h-4"
                  width={16}
                  height={16}
                />
                <span className="text-gray-800 font-semibold font-Nunito">
                  Upload file
                </span>
                <input type="file" className="hidden" />
              </label>

              <button
                type="submit"
                className="bg-gray-800 text-white px-8 sm:px-14 py-2 rounded-full shadow-md hover:bg-gray-700 transition-colors text-sm font-Nunito w-full sm:w-auto"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Right Side: Contact Info */}
        <div className="w-full lg:w-1/3 text-left flex flex-col gap-6 md:gap-8 font-Nunito lg:border-l-2 lg:border-gray-700 lg:pl-6">
          <div>
            <h4 className="font-semibold text-xl md:text-2xl mb-2">
              Location:
            </h4>
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
            <h4 className="font-semibold text-xl md:text-2xl mb-2">Email:</h4>
            <p className="text-sm font-semibold">sales@codetokloud.com</p>
          </div>

          <div>
            <h4 className="font-semibold text-xl md:text-2xl mb-2">
              Phone Number:
            </h4>
            <p className="text-sm font-semibold">+1 (480) 572-7818</p>
          </div>

          {/* Social Icons */}
          <div>
            <h4 className="font-semibold text-xl md:text-2xl mb-4">
              Follow us at:
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  aria-label={social.ariaLabel}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    className="w-10 h-10 object-contain"
                    width={40}
                    height={40}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
