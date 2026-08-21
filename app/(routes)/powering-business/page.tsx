import IndustryPage from "@/app/components/sections/industry/IndustryPage";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { industryServiceSchemas } from "@/lib/structured-data";
import { industryPages } from "@/utils/data/industryPages";

export const metadata = pageMetadata("/powering-business");
const CloudMigration = () => {
  return (
    <>
      <JsonLd data={industryServiceSchemas["/powering-business"]} />
      <IndustryPage content={industryPages.professionalServices} />
    </>
  );
};

export default CloudMigration;
