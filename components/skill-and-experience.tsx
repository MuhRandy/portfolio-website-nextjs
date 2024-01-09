import { IconBrandTailwind } from "@tabler/icons-react";
import CardExperience from "./ui/card-experience";
import { Section, SectionText, SectionTitle } from "./ui/section";
import {
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
} from "@tabler/icons-react";

function SkillAndExperience() {
  const skillIconSize = 30;
  const experiences = [
    {
      jobTitle: "Frontend Internship",
      company: "PT. Lorem Ipsum",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestia's possimus incidunt minima voluptas corporis ipsa aliquam ut fuga illum laborum?",
    },
    {
      jobTitle: "Backend Internship",
      company: "PT. Lorem Ipsum 2",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestia's possimus incidunt minima voluptas corporis ipsa aliquam ut fuga illum laborum?",
    },
    {
      jobTitle: "Fullstack Internship",
      company: "PT. Lorem Ipsum 3",
      jobDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestia's possimus incidunt minima voluptas corporis ipsa aliquam ut fuga illum laborum?",
    },
  ];
  return (
    <Section className="gap-7">
      <div className="flex flex-col md:flex-row items-start justify-start gap-7">
        <div className="md:max-w-[70%] flex flex-col gap-7">
          <SectionTitle className="flex flex-col">
            <span>Skill &</span>
            <span>Experience</span>
          </SectionTitle>
          <SectionText>
            Having pursued a self-directed learning path in web development
            since graduating with my bachelor&apos;s degree, I&apos;ve actively
            engaged with online resources such as YouTube and platforms like
            FreeCodeCamp. Through dedication and practical application,
            I&apos;ve successfully developed several personal projects that
            showcase my skills and passion for web development. These projects
            not only reflect my technical abilities but also demonstrate my
            commitment to continuous learning and innovation. I am excited to
            contribute my knowledge and expertise to real-world projects and
            further expand my capabilities as a web developer.
          </SectionText>
        </div>
        <div className="w-[100%] md:max-w-[50%] text-xl">
          <ul className="md:flex md:flex-col gap-2 grid grid-cols-2 sm:grid-cols-3">
            <li>
              <IconBrandHtml5
                size={skillIconSize}
                className="text-orange-600 inline"
              />
              HTML
            </li>
            <li>
              <IconBrandCss3
                size={skillIconSize}
                className="text-blue-600 inline"
              />
              CSS
            </li>
            <li>
              <IconBrandJavascript
                size={skillIconSize}
                className="text-yellow-500 inline"
              />
              Javascript
            </li>
            <li>
              <IconBrandTypescript
                size={skillIconSize}
                className="text-blue-500 inline"
              />
              Typescript
            </li>
            <li>
              <IconBrandTailwind
                size={skillIconSize}
                className="text-teal-500 inline"
              />
              TailwindCSS
            </li>
            <li>
              <IconBrandReact
                size={skillIconSize}
                className="text-blue-400 inline"
              />
              ReactJs
            </li>
            <li>
              <IconBrandFirebase
                size={skillIconSize}
                className="text-orange-400 inline"
              />
              Firebase
            </li>
            <li>
              <IconBrandNextjs size={skillIconSize} className="inline" />
              Next.js
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {experiences.map(
          (
            experience: {
              jobTitle: string;
              company: string;
              jobDescription: string;
            },
            index: number
          ) => {
            return (
              <CardExperience
                key={index}
                jobTitle={experience.jobTitle}
                company={experience.company}
                jobDescription={experience.jobDescription}
              />
            );
          }
        )}
      </div>
    </Section>
  );
}

export default SkillAndExperience;
