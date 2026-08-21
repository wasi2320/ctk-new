import IndustryPage from "@/app/components/sections/industry/IndustryPage";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { industryServiceSchemas } from "@/lib/structured-data";
import { industryPages } from "@/utils/data/industryPages";

export const metadata = pageMetadata("/real-estate");
const RealEstatePage = () => {
  return (
    <>
      <JsonLd data={industryServiceSchemas["/real-estate"]} />
      <IndustryPage content={industryPages.realEstate} />
    </>
  );
};

export default RealEstatePage;
