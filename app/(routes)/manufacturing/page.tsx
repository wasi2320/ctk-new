import IndustryPage from "@/app/components/sections/industry/IndustryPage";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { industryServiceSchemas } from "@/lib/structured-data";
import { industryPages } from "@/utils/data/industryPages";

export const metadata = pageMetadata("/manufacturing");
const CloudMigration = () => {
  return (
    <>
      <JsonLd data={industryServiceSchemas["/manufacturing"]} />
      <IndustryPage content={industryPages.manufacturing} />
    </>
  );
};

export default CloudMigration;
