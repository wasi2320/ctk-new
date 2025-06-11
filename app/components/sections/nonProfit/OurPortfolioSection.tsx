import Image from "next/image"
import Link from "next/link"

export default function OurPortfolioSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-center text-slate-800 mb-16">We Strive For Innovation</h1>

      <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
        <div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">Our Portfolio</h2>
          <p className="text-xl text-slate-600">Real-World cases in Fintech</p>
        </div>

        <div className="mt-6 lg:mt-0">
          <Link
            href="#"
            className="inline-block px-6 py-3 text-xl text-slate-800 border-2 border-slate-800  hover:bg-slate-100 transition-colors"
            style={{
                borderRadius: "1rem",
            }}
          >
            Real-World cases in Fintech
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cost Optimization Card */}
        <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-slate-800 mb-2">Cost Optimization</h3>
          <p className="text-xl text-slate-600 mb-6">Real-World cases in Fintech</p>
          <div className="flex justify-center">
            <Image
              src="/Images/nonprofit/Portfolio_1.svg"
              alt="Cost Optimization Illustration"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Security Compliance Card */}
        <div className="bg-gray-50 rounded-3xl p-8 shadow-lg">
          <h3 className="text-3xl font-bold text-slate-800 mb-2">Security Compliance</h3>
          <p className="text-xl text-slate-600 mb-6">Real-World cases in Fintech</p>
          <div className="flex justify-center">
            <Image
              src="/Images/nonprofit/Portfolio_2.svg"
              alt="Security Compliance Illustration"
              width={400}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
