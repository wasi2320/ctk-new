import IndustryPage from "@/app/components/sections/industry/IndustryPage";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { industryServiceSchemas } from "@/lib/structured-data";
import { industryPages } from "@/utils/data/industryPages";

export const metadata = pageMetadata("/financial-services");
const FinancialServicesPage = () => {
  return (
    <>
      <JsonLd data={industryServiceSchemas["/financial-services"]} />
      <IndustryPage content={industryPages.financialServices} />
    </>
  );
};

export default FinancialServicesPage;
