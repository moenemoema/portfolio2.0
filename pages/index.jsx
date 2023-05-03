import ContactSection from "@/components/ContactSection/ContactSection";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import Layouts from "@/components/Layouts/Layouts";
import Projects from "@/components/Projects/Projects";
import Info from "@/components/Info/Info";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tilek Zhyrgalbekov</title>
        <meta name="description" content="Created by keraemoe" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Layouts>
        <Hero />
        <Info />
        <Features />
        <Projects />
        <ContactSection />
      </Layouts>
    </>
  );
}
