import IndustryPage from "@/app/components/sections/industry/IndustryPage";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { industryServiceSchemas } from "@/lib/structured-data";
import { industryPages } from "@/utils/data/industryPages";

export const metadata = pageMetadata("/saas-isv");
const SaaSISVPage = () => {
  return (
    <>
      <JsonLd data={industryServiceSchemas["/saas-isv"]} />
      <IndustryPage content={industryPages.saas} />
    </>
  );
};

export default SaaSISVPage;
