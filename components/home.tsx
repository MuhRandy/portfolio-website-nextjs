import Image from "next/image";
import { Button } from "./ui/button";
import { Section, SectionText, SectionTitle } from "./ui/section";

function Home() {
  return (
    <Section className="md:flex-row md:justify-around">
      {/* Home Text */}
      <div className="max-w-full md:max-w-[60%] flex flex-col justify-between gap-5">
        <div>
          <SectionTitle>Hello, I&apos;m Muhammad Randy.</SectionTitle>
          <div className="text-4xl">Aspiring Web Developer</div>
        </div>
        <SectionText>
          I am an aspiring Web Developer. Now I live in Banjar, South
          Kalimantan. If you are interested in working with me, you can contact
          me to hire me.
        </SectionText>
        <Image
          src={"/profil.jpg"}
          alt="Muhammad Randy's Profil Picture"
          width={1051}
          height={1500}
          className="w-[40vw] h-auto md:hidden self-center"
        />
        <div className="flex gap-2 self-center md:self-auto">
          <Button variant={"primary"}>Download CV</Button>
          <Button variant={"outlineSecondary"}>Contact Me</Button>
        </div>
      </div>
      {/* --- */}

      <Image
        src={"/profil.jpg"}
        alt="Muhammad Randy's Profil Picture"
        width={1051}
        height={1500}
        className="w-[200px] h-auto hidden md:block"
      />
    </Section>
  );
}

export default Home;
