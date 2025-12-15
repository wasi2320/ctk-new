import HeroSection from "@/app/components/HeroSection";
import Image from "next/image";
import Link from "next/link";
import { createServerClient } from "@/lib/supabase";

export const dynamic = "force-dynamic";

type Role = {
  id: string;
  title: string;
  employment_type: string;
  location: string;
  summary: string;
  apply_url?: string | null;
  due_date?: string | null;
  is_active?: boolean;
  created_at?: string;
};

const highlights = [
  {
    title: "Build cloud-first solutions",
    description:
      "Design resilient, secure systems across healthcare, fintech, SaaS, and more—built to handle real-world demands.",
  },
  {
    title: "Own meaningful work",
    description:
      "Lead delivery end-to-end with architects and ship production-ready features you see launch.",
  },
  {
    title: "Grow with the team",
    description:
      "Learn alongside AWS, DevOps, AI, and product experts with hands-on mentorship and clear growth paths.",
  },
  {
    title: "Work with modern tech",
    description:
      "Build with AWS, Kubernetes, CI/CD, and AI-driven automation to stay close to the latest tooling.",
  },
];

const benefits = [
  {
    title: "Remote-first flexibility",
    description:
      "Work from wherever you're most productive with async-friendly collaboration.",
  },
  {
    title: "Career growth opportunities",
    description:
      "Clear paths, regular feedback, and chances to take on new challenges.",
  },
  {
    title: "Team connections",
    description:
      "Virtual standups, project syncs, and knowledge-sharing to keep us energized.",
  },
  {
    title: "Wellness support",
    description:
      "Flexible time off and wellness-friendly policies so you can recharge.",
  },
];

const hiringSteps = [
  {
    title: "Intro chat",
    detail:
      "Brief conversation to align on your goals, experience, and how we work as a team.",
  },
  {
    title: "Skills deep dive",
    detail:
      "Role-focused discussion plus a practical scenario that mirrors client work.",
  },
  {
    title: "Team loop",
    detail:
      "Meet future teammates, talk through architecture or product decisions, and how we collaborate.",
  },
  {
    title: "Offer & onboarding",
    detail:
      "If it fits, we set clear objectives, map an onboarding plan, and pair you with a mentor.",
  },
];

async function getOpenRoles(): Promise<Role[]> {
  try {
    const supabase = createServerClient();
    const { data, error } = await supabase
      .from("roles")
      .select(
        "id, title, employment_type, location, summary, apply_url, due_date, is_active, created_at"
      )
      .eq("is_active", true)
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching roles for careers page:", error);
    return [];
  }
}

const formatDate = (dateString?: string | null) => {
  if (!dateString) return null;
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default async function CareersPage() {
  const openRoles = await getOpenRoles();

  return (
    <div className="bg-white">
      <HeroSection
        title="Careers at CodeToKloud"
        description="At CodeToKloud, we're all about teamwork and building cloud solutions that are reliable, scalable, and really useful. We believe the best products come from teams that communicate openly, move quickly, and truly care about their work. If you love learning, enjoy tackling challenges, and want to make a real impact, you'll fit right in with us!"
        imageSrc="/Images/Team_Img.svg"
        buttonText="View open roles"
        buttonLink="#open-roles"
      />

      <section className="md:px-28 px-4 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Why CodeToKloud
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0f13]">
              Build with ownership, pace, and purpose
            </h2>
            <p className="text-lg text-gray-700">
              We pair cloud craftsmanship with product thinking. Expect to ship
              meaningful work, refine platforms for scale, and collaborate with
              a team that values clarity, curiosity, and momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-100 bg-gradient-to-br from-white via-white to-[#f2f6f5] p-6 shadow-sm"
              >
                <div className="h-12 w-12 rounded-full bg-[#081617] text-white flex items-center justify-center text-lg font-semibold mb-4">
                  <span>•</span>
                </div>
                <h3 className="text-xl font-semibold text-[#0a0f13] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#081617] text-white py-16 px-4 md:px-28">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="md:flex md:items-center md:justify-between md:gap-10 space-y-4 md:space-y-0">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/60">
                Benefits
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">
                Support to do your best work
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="open-roles"
        className="md:px-28 px-4 py-16 bg-gradient-to-b from-[#f7f9fb] to-white scroll-mt-14"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="space-y-3 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
              Open roles
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0f13]">
              Opportunities we are hiring for
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These listings are sample descriptions. Update them with your live
              openings, locations, and application links.
            </p>
          </div>

          {openRoles.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-8 text-center">
              <p className="text-xl font-semibold text-[#0a0f13]">
                No open roles right now.
              </p>
              <p className="text-gray-600 mt-2">
                We’re always meeting great people—check back soon or drop us a
                note to stay in touch.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {openRoles.map((role) => (
                <Link
                  key={role.id || role.title}
                  href={`/careers/roles/${role.id}`}
                  className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow block"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-[#e8f2ef] text-[#0f241f]">
                      {role.employment_type || "Role"}
                    </span>
                    <span className="text-sm text-gray-600">
                      {role.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a0f13] mb-2">
                    {role.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {role.summary}
                  </p>
                  {formatDate(role.due_date) && (
                    <p className="text-sm text-gray-600">
                      Apply by {formatDate(role.due_date)}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="md:px-28 px-4 py-16">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-[#0f241f] to-[#1f3e35] text-white p-10 md:p-12">
          <div className="md:flex md:items-start md:justify-between md:gap-12 space-y-8 md:space-y-0">
            <div className="md:w-1/2 space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                Hiring process
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">
                What to expect
              </h2>
              <p className="text-white/80 text-lg leading-relaxed">
                We keep the hiring process open, easy, and collaborative. Expect
                real conversations about how you think, build, communicate, and
                work with clients.
              </p>
              <p className="text-white/80 leading-relaxed">
                No tricks. No unnecessary steps. Just time for us to get to know
                each other.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hiringSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="p-5 rounded-2xl bg-white/10 border border-white/15"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-semibold">
                      {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-28 px-4 pb-20">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#0a0f13]">
            Ready to build with us?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Tell us about the work you love, the problems you want to solve, and
            the impact you are after. We review every note and reply quickly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:careers@codetokloud.com"
              className="rounded-full px-8 py-3 border border-gray-300 text-[#0a0f13] font-semibold hover:border-[#081617] transition-colors"
            >
              Email careers@codetokloud.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
