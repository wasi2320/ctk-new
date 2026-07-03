export interface Testimonial {
  quote: string;
  name: string;
  /** Role + company, e.g. "CEO, WorkOtter" */
  title: string;
  /** Optional avatar image path under /public (falls back to initials). */
  avatar?: string;
  /** Optional company logo path under /public. */
  companyLogo?: string;
}

/**
 * Real CodetoKloud client testimonials. Add entries here — the reviews section
 * and Review structured data pick them up automatically. When this array is
 * empty, the reviews section is hidden.
 *
 * Only add reviews that are about CodetoKloud (the company), so the Review
 * structured data (itemReviewed: CodetoKloud) stays accurate.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "The CodetoKloud team demonstrated excellent collaboration, strong technical expertise, and clear communication throughout the project. Their professionalism made the entire engagement smooth and efficient.",
    name: "Shadab Husain",
    title: "President, eTechLogix Inc.",
  },
  {
    quote:
      "CodetoKloud paid close attention to every detail and consistently delivered high-quality work. Their thorough approach and commitment to excellence were evident throughout the project.",
    name: "Daniel Pegues",
    title: "Owner, Vertical Square, LLC",
  },
  {
    quote:
      "Working with CodetoKloud has been an outstanding experience. Their team is knowledgeable, dependable, and delivers exactly what they promise. I highly recommend them to any organization seeking a reliable technology partner.",
    name: "Jason Bales",
    title: "CEO & Founder, PhoneFilter",
  },
  {
    quote:
      "CodetoKloud exceeded our expectations by delivering a high-quality solution on time and with great attention to detail. Their technical expertise and commitment to client satisfaction made the project a success.",
    name: "Edem E. Elessessi",
    title: "CEO, NexGenGood",
  },
  {
    quote:
      "The team delivered exceptional value by completing the project efficiently while staying within budget. Their responsiveness and ability to execute quickly made them a pleasure to work with.",
    name: "Ryan Meredith",
    title: "Managing Director, Bright Solutions AI",
  },
  {
    quote:
      "CodetoKloud quickly identified and resolved critical infrastructure challenges, including security, performance optimization, and cloud cost management. Their expertise significantly improved the stability and efficiency of our environment.",
    name: "Anonymous",
    title: "VP, TopsysIT",
  },
  {
    quote:
      "Their combination of deep technical expertise, structured execution, and consistent communication made them a valuable partner throughout the engagement. The collaboration was efficient, organized, and results-driven.",
    name: "Anonymous",
    title: "CEO, Media Company",
  },
  {
    quote:
      "CodetoKloud consistently delivered high-quality results and proved to be a trusted technology partner. We look forward to continuing our collaboration on future projects.",
    name: "Anonymous",
    title: "CEO, IT Services Company",
  },
  {
    quote:
      "The team is highly responsive, communicates proactively, and addresses issues quickly. Their professionalism and reliability made working together seamless.",
    name: "Anonymous",
    title: "PMO, Scheduling Services Company",
  },
];
