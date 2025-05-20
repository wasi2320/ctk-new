import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CaseStudyLessonsProps {
  lessons: string;
  secondLesson?: {
    title: string;
    content: string;
  };
}

const CaseStudyLessons: React.FC<CaseStudyLessonsProps> = ({
  lessons,
  secondLesson,
}) => (
  <section className="py-12 px-4 md:px-6 lg:px-8 relative flex flex-col md:flex-row gap-8">
    <Card
      className={`text-center min-h-[550px] bg-[url('/graph_bg.png')] h-full bg-cover bg-center bg-no-repeat backdrop-blur-sm shadow-lg ${
        !secondLesson?.title ? "w-full" : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="py-8 text-4xl text-center">
          Lessons Learned
        </CardTitle>
      </CardHeader>
      <CardContent className="max-w-6xl self-center text-2xl w-[80%]">
        {lessons}
      </CardContent>
    </Card>
    {secondLesson?.title ? (
      <Card className="text-center min-h-[550px] bg-[url('/graph_bg.png')] h-full bg-cover bg-center bg-no-repeat backdrop-blur-sm shadow-lg">
        <CardHeader>
          <CardTitle className="py-8 text-4xl text-center">
            {secondLesson?.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="max-w-6xl self-center text-2xl w-[80%]">
          {secondLesson?.content}
        </CardContent>
      </Card>
    ) : null}
  </section>
);

export default CaseStudyLessons;
