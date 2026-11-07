import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainSection from "../components/templates/home/MainSection";
import AboutSection from "../components/templates/home/AboutSection";
import ServicesSection from "../components/templates/home/ServicesSection";
import MethodSection from "../components/templates/home/MethodSection";
import VenturesSection from "../components/templates/home/VenturesSection";
import ContentSection from "../components/templates/home/ContentSection";
import CoursesTeaser from "../components/templates/home/CoursesTeaser";
import ImpactTeaser from "../components/templates/home/ImpactTeaser";
import ProjectsSection from "../components/templates/home/ProjectsSection";
import ContactSection from "../components/templates/home/ContactSection";

export default function Home() {
  return (
    <>
      <MainSection recommendations={[]} users={[]} />
      <AboutSection />
      <ServicesSection />
      <MethodSection />
      <VenturesSection />
      <ContentSection />
      <CoursesTeaser />
      <ImpactTeaser />
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
