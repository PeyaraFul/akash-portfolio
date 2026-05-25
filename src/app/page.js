import CoddingJourney from "@/components/AboutMeSection/CoddingJourney";
import EnjoyTopics from "@/components/AboutMeSection/EnjoyTopics";
import MailForm from "@/components/contactSection/MailForm";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/Hero";
import DriveNest from "@/components/projects/DriveNest";
import SummerStore from "@/components/projects/SummerStore";

import SkillsSection from "@/components/skills/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <CoddingJourney></CoddingJourney>
      <SkillsSection></SkillsSection>
      <DriveNest></DriveNest>
      <SummerStore></SummerStore>
      <MailForm></MailForm>
      <Footer></Footer>
    </>
  );
}
