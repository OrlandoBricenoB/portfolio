import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainSection from "../components/templates/home/MainSection";
import ProjectsSection from "../components/templates/home/ProjectsSection";
import AboutSection from "../components/templates/home/AboutSection";
import ContactSection from "../components/templates/home/ContactSection";

export default function Home() {

  return (
    <>
      <MainSection recommendations={[]} users={[]} />
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
