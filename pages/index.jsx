import { HeroSection } from "@/sections/HeroSection";
import Layout from "../components/layout";
import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
    </Layout>
  );
}
