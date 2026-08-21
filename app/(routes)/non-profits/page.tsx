import IndustryPage from "@/app/components/sections/industry/IndustryPage";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { industryServiceSchemas } from "@/lib/structured-data";
import { industryPages } from "@/utils/data/industryPages";

export const metadata = pageMetadata("/non-profits");
export default function NonProfitsPage() {
  return (
    <>
      <JsonLd data={industryServiceSchemas["/non-profits"]} />
      <IndustryPage content={industryPages.nonprofits} />
    </>
  );
}
