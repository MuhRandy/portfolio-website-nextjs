import Image from "next/image";
import { Button } from "./ui/button";
import { Section, SectionText, SectionTitle } from "./ui/section";
import { motion } from "framer-motion";
import { ButtonAnimation, CardAnimation } from "./ui/animation";
import { Link } from "react-scroll";

function Home() {
  return (
    <Section id="home" className="md:flex-row md:justify-around">
      {/* Home Text */}
      <div className="max-w-full md:max-w-[60%] flex flex-col justify-between gap-5">
        <motion.div
          initial={{ opacity: 0, bottom: "-20px" }}
          whileInView={{ opacity: 1, bottom: "0px" }}
          transition={{ duration: 2, type: "spring" }}
          className="relative"
        >
          <SectionTitle>Hello, I&apos;m Muhammad Randy.</SectionTitle>
          <div className="text-4xl">Aspiring Web Developer</div>
        </motion.div>
        <SectionText>
          I am an aspiring Web Developer. Now I live in Banjar, South
          Kalimantan. If you are interested in working with me, you can contact
          me to hire me.
        </SectionText>
        <CardAnimation className="self-center">
          <Image
            src={"/profil.jpg"}
            alt="Muhammad Randy's Profil Picture"
            width={1051}
            height={1500}
            className="w-[40vw] h-auto md:hidden"
          />
        </CardAnimation>
        <ButtonAnimation className="flex gap-2 self-center md:self-auto">
          <Button variant={"primary"}>Download CV</Button>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            <Button variant={"outlineSecondary"}>Contact Me</Button>
          </Link>
        </ButtonAnimation>
      </div>
      {/* --- */}
      <CardAnimation>
        <Image
          src={"/profil.jpg"}
          alt="Muhammad Randy's Profil Picture"
          width={1051}
          height={1500}
          className="w-[200px] h-auto hidden md:block"
        />
      </CardAnimation>
    </Section>
  );
}

export default Home;
