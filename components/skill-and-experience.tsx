import Section from "./ui/section";

function SkillAndExperience() {
  return (
    <Section className="flex-row items-start justify-start gap-5">
      <div className="max-w-[70%]">
        <Section.H1 className="flex flex-col">
          <span>Skill &</span>
          <span>Experience</span>
        </Section.H1>
        <Section.Text>
          Having pursued a self-directed learning path in web development since
          graduating with my bachelor&apos;s degree, I&apos;ve actively engaged
          with online resources such as YouTube and platforms like FreeCodeCamp.
          Through dedication and practical application, I&apos;ve successfully
          developed several personal projects that showcase my skills and
          passion for web development. These projects not only reflect my
          technical abilities but also demonstrate my commitment to continuous
          learning and innovation. I am excited to contribute my knowledge and
          expertise to real-world projects and further expand my capabilities as
          a web developer.
        </Section.Text>
      </div>
      <div className="max-w-[50%]">
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>ReactJs</li>
          <li>Firebase</li>
          <li>NextJs</li>
        </ul>
      </div>
    </Section>
  );
}

export default SkillAndExperience;
