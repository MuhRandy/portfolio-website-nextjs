import { Section, SectionText, SectionTitle } from "./ui/section";
import { Button } from "./ui/button";

function About() {
  return (
    <Section bgColor="slate" className="gap-5 sm:max-w-[60vw] lg:max-w-[60vw]">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        As a recent 2022 Mathematics graduate from Lambung Mangkurat University,
        I am actively engaged in self-learning web programming. With a strong
        passion for web development, I am committed to enhancing my skills in
        crafting dynamic and responsive websites. Eager to bring creativity and
        technical expertise to innovative projects, I am excited to embark on a
        fulfilling career in the dynamic field of web development.
      </SectionText>
      <Button variant={"primary"}>Read More -&gt;</Button>
    </Section>
  );
}

export default About;
