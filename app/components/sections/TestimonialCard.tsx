import Image from "next/image";
import type { Testimonial } from "@/utils/data/testimonials";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const { quote, name, title, avatar, companyLogo } = testimonial;
  // Anonymous reviewers get initials from their role/company instead of "A".
  const initials = getInitials(name === "Anonymous" ? title : name);

  return (
    <figure className="bg-white rounded-2xl shadow-xl p-8 flex flex-col w-full h-full text-left">
      <div className="flex items-start justify-between mb-6">
        {avatar ? (
          <Image
            src={avatar}
            alt={name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-[#0d1526] text-white flex items-center justify-center text-xl font-semibold">
            {initials}
          </div>
        )}

        {companyLogo && (
          <Image
            src={companyLogo}
            alt={`${name} company logo`}
            width={48}
            height={48}
            className="w-12 h-12 object-contain"
          />
        )}
      </div>

      <blockquote className="text-gray-500 text-lg leading-relaxed mb-6 flex-grow">
        {quote}
      </blockquote>

      <figcaption>
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-gray-500">{title}</p>
      </figcaption>
    </figure>
  );
}
