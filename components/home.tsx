import Image from "next/image";
import { Button } from "./ui/button";
import { Section, SectionText, SectionTitle } from "./ui/section";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { defaultAnimation } from "@/lib/animationVariants";
import { cn } from "@/lib/utils";

function Home() {
  return (
    <Section id="home" className="md:flex-row md:justify-around">
      {/* Home Text */}
      <div
        className={cn(
          "max-w-full md:max-w-[60%]",
          "flex flex-col justify-between gap-5"
        )}
      >
        <SectionTitle>
          <TypeAnimation
            sequence={[
              "Hello, I'm Muhammad Randy",
              3000,
              "Hello, I'm an Aspiring Web Developer",
              3000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </SectionTitle>

        <SectionText>
          I am an aspiring Web Developer. Now I live in Banjar, South
          Kalimantan. If you are interested in working with me, you can contact
          me to hire me.
        </SectionText>

        <motion.div
          variants={defaultAnimation}
          whileInView="visible"
          initial="fromRight"
          className="self-center"
        >
          <Image
            src={"/profil.jpg"}
            alt="Muhammad Randy's Profil Picture"
            width={1051}
            height={1500}
            className="w-[40vw] h-auto md:hidden"
            priority={true}
          />
        </motion.div>

        <div className="flex gap-2 self-center md:self-auto">
          <motion.div
            variants={defaultAnimation}
            initial="fromBottom"
            whileInView="visible"
          >
            <Button variant={"primary"}>Download CV</Button>
          </motion.div>

          <motion.div
            variants={defaultAnimation}
            initial="fromTop"
            whileInView="visible"
          >
            <Link to="contact" spy={true} smooth={true} duration={500}>
              <Button variant={"outlineSecondary"}>Contact Me</Button>
            </Link>
          </motion.div>
        </div>
      </div>
      {/* --- */}

      <motion.div
        whileInView={{ rotate: 5 }}
        initial={{ rotate: 0 }}
        transition={{ duration: 1, type: "spring" }}
      >
        <Image
          src={"/profil.jpg"}
          alt="Muhammad Randy's Profil Picture"
          width={1051}
          height={1500}
          className="w-[200px] h-auto hidden md:block rounded-xl"
          priority={true}
        />
      </motion.div>
    </Section>
  );
}

export default Home;
