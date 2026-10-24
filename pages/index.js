import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainSection from "../components/templates/home/MainSection";
import StoriesSection from "../components/templates/home/StoriesSection";
import ProjectsSection from "../components/templates/home/ProjectsSection";
import RecognitionsSection from "../components/templates/home/RecognitionsSection";
import AboutSection from "../components/templates/home/AboutSection";
import ContactSection from "../components/templates/home/ContactSection";

export default function Home() {
  return (
    <>
      <MainSection recommendations={[]} users={[]} />
      <StoriesSection />
      <RecognitionsSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection recommendations={[]} users={[]} />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
