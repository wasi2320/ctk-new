import Image from "next/image";

export default function ContactUsSection() {
  return (
    <section
      className="w-full py-12 px-2 md:px-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/Images/ConactUs.svg')" }} // Change to your map bg if needed
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
        {/* Form Card */}
        <div className="bg-white/95 rounded-2xl shadow-xl p-8 flex-1 min-w-[320px] max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-base font-medium mb-1">Name</label>
              <input type="text" className="w-full border-b border-gray-400 outline-none py-2 bg-transparent" />
            </div>
            <div>
              <label className="block text-base font-medium mb-1">Company Name</label>
              <input type="text" className="w-full border-b border-gray-400 outline-none py-2 bg-transparent" />
            </div>
            <div>
              <label className="block text-base font-medium mb-1">Email</label>
              <input type="email" className="w-full border-b border-gray-400 outline-none py-2 bg-transparent" />
            </div>
            <div>
              <label className="block text-base font-medium mb-1">Message</label>
              <textarea className="w-full border-b border-gray-400 outline-none py-2 bg-transparent" rows={2} />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Image src="/Images/upload-icon.png" alt="Upload" width={18} height={18} />
              <span className="text-gray-700 text-sm">Upload file</span>
              <input type="file" className="hidden" />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-[#000] text-white px-7 py-2 rounded-full shadow hover:bg-[#193728]/90 transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* Contact Info */}
        <div className="flex-1 flex flex-col items-start mt-8 md:mt-0 md:pl-8 border-l border-black ">
          <div className="mb-6">
            <div className="font-semibold text-lg mb-1">Location:</div>
            <div className="text-gray-800 text-sm">
              432 Cherry DR, Troy, Michigan<br />
              48083 United States ((248) 823-3200 )
            </div>
          </div>
          <div className="mb-6">
            <div className="font-semibold text-lg mb-1">Email:</div>
            <a href="mailto:C2K@gmail.com" className="text-[#193728] underline text-sm">C2K@gmail.com</a>
          </div>
          <div className="mb-6">
            <div className="font-semibold text-lg mb-1">Phone Number:</div>
            <a href="tel:+736383838912" className="text-[#193728] text-sm">+736383838912</a>
          </div>
          <div>
            <div className="font-semibold text-lg mb-2">Follow us at:</div>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook">
                {/* <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-300"> */}
                  <Image src="/Images/fb-link.png" alt="Facebook" width={28} height={28} />
                {/* </span> */}
              </a>
              <a href="#" aria-label="Instagram">
                {/* <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-300"> */}
                  <Image src="/Images/insta-link.png" alt="Instagram" width={28} height={28} />
                {/* </span> */}
              </a>
              <a href="#" aria-label="LinkedIn">
                {/* <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-gray-300"> */}
                  <Image src="/Images/link-link.png" alt="LinkedIn" width={28} height={28} />
                {/* </span> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}