import React from "react";

const CaseStudyLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <main className="min-h-screen bg-white">{children}</main>;

export default CaseStudyLayout;
