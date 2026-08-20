import type { Metadata } from "next";
import HomeRedesign from "./components/home/HomeRedesign";

export const metadata: Metadata = {
  alternates: { canonical: "https://codetokloud.com/" },
};

export default function Home() {
  return <HomeRedesign />;
}
