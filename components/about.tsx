import Section from "./ui/section";
import { Button } from "./ui/button";

function About() {
  return (
    <Section bgColor="slate" className="gap-5 sm:max-w-[60vw] lg:max-w-[60vw]">
      <Section.H1>About Me</Section.H1>
      <Section.Text>
        As a recent 2022 Mathematics graduate from Lambung Mangkurat University,
        I am actively engaged in self-learning web programming. With a strong
        passion for web development, I am committed to enhancing my skills in
        crafting dynamic and responsive websites. Eager to bring creativity and
        technical expertise to innovative projects, I am excited to embark on a
        fulfilling career in the dynamic field of web development.
      </Section.Text>
      <Button variant={"primary"}>Read More -&gt;</Button>
    </Section>
  );
}

export default About;
