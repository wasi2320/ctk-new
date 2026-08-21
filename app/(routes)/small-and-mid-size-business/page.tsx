import IndustryPage from "@/app/components/sections/industry/IndustryPage";
import JsonLd from "@/app/components/JsonLd";
import { pageMetadata } from "@/lib/page-metadata";
import { industryServiceSchemas } from "@/lib/structured-data";
import { industryPages } from "@/utils/data/industryPages";

export const metadata = pageMetadata("/small-and-mid-size-business");
const SMBPage = () => {
  return (
    <>
      <JsonLd data={industryServiceSchemas["/small-and-mid-size-business"]} />
      <IndustryPage content={industryPages.smb} />
    </>
  );
};

export default SMBPage;
