import DefinitionPage, {
  type DefinitionData,
} from "@/app/components/sections/DefinitionPage";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata("/cloud-migration-cost");

const data: DefinitionData = {
  path: "/cloud-migration-cost",
  heroTitle: "How Much Does AWS Cloud Migration Cost?",
  intro:
    "What drives the cost of an AWS cloud migration, how projects are scoped, and how to estimate yours. From CodetoKloud, an AWS Advanced Tier Partner.",
  heroImage: "/Images/Cloud_Hero.png",
  capsuleQuestion: "How much does AWS cloud migration cost?",
  capsuleAnswer:
    "AWS cloud migration cost depends on the number and complexity of workloads, the migration strategy, and how much re-architecting is involved, not a single rate. A lift-and-shift of a few servers is very different from re-platforming a legacy monolith onto containers. Costs usually break into project fees to plan and execute the move and the ongoing AWS bill afterward. As an AWS Advanced Tier Partner, CodetoKloud scopes each migration and quotes it before any work begins.",
  sections: [
    {
      title: "What drives the cost",
      body: "The biggest factors are the number of applications and their complexity, the chosen strategy (rehost, replatform, or refactor), data volume and how much can move with minimal downtime, and integration and dependency mapping. Compliance requirements like HIPAA, SOC 2, or PCI DSS add controls and validation. A monolith with tangled dependencies costs more to move than a set of stateless services.",
    },
    {
      title: "Migration strategy shapes the price",
      body: "The 'R' you choose changes the effort. Rehosting (lift and shift) is fastest and cheapest to execute but leaves optimization on the table. Replatforming makes targeted improvements, like moving a database to Amazon RDS, during the move. Refactoring re-architects for the cloud, for example onto containers on EKS, which costs more up front but usually lowers the ongoing AWS bill and improves reliability.",
    },
    {
      title: "Project cost vs running cost",
      body: "Separate the one-time migration project from the recurring AWS spend after you land. A good migration plan forecasts the post-migration bill and includes rightsizing and, where it fits, commitment discounts, so you are not surprised. We often pair a migration with FinOps practices so the running cost is optimized from day one rather than cleaned up later.",
    },
    {
      title: "How to get an accurate number",
      body: "The fastest path to a real number is a short discovery. We inventory your workloads, pick a strategy per application, and send a scoped quote with no obligation. See our cloud migration service and engagement models for how we structure the work.",
    },
  ],
  faq: [
    {
      question: "How is a migration project priced?",
      answer:
        "Most migrations are fixed-scope projects priced against a defined plan, often preceded by a short discovery or assessment. Larger, phased migrations may run as a series of scoped stages. We agree on the model before work starts.",
    },
    {
      question: "Will migrating raise or lower our monthly bill?",
      answer:
        "It depends on the strategy. A pure lift and shift can keep costs similar, while replatforming and rightsizing during the move often reduce ongoing spend. We forecast the post-migration bill as part of planning so there are no surprises.",
    },
    {
      question: "How do I get a quote?",
      answer:
        "Book a free consultation. CodetoKloud reviews your current environment and goals, recommends a migration strategy, and sends a scoped quote, with no obligation.",
    },
  ],
  crossLinks: [
    { name: "Cloud Migration", href: "/cloud-migration" },
    { name: "Engagement Models", href: "/engagement-models" },
    { name: "Cloud Infrastructure (AWS)", href: "/cloud-service" },
  ],
  ctaHeading: "Get a scoped quote",
};

export default function Page() {
  return <DefinitionPage data={data} />;
}
