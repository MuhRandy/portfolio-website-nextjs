import CardExperience from './ui/card-experience';
import Section from './ui/section';
import {
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
} from '@tabler/icons-react';

function SkillAndExperience() {
  return (
    <Section className="gap-7">
      <div className="flex flex-row items-start justify-start gap-7">
        <div className="max-w-[70%]">
          <Section.H1 className="flex flex-col">
            <span>Skill &</span>
            <span>Experience</span>
          </Section.H1>
          <Section.Text>
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
          </Section.Text>
        </div>
        <div className="max-w-[50%] text-xl font-bold">
          <ul className="flex flex-col gap-2">
            <li>
              <IconBrandHtml5 className="text-orange-600 inline" /> HTML
            </li>
            <li>
              <IconBrandCss3 className=" text-blue-600 inline" /> CSS
            </li>
            <li>
              <IconBrandJavascript className="text-yellow-500 inline" />{' '}
              Javascript
            </li>
            <li>
              <IconBrandTypescript className="text-blue-500 inline" />{' '}
              Typescript
            </li>
            <li>
              <IconBrandReact className="text-blue-400 inline" /> ReactJs
            </li>
            <li>
              <IconBrandFirebase className="text-orange-400 inline" /> Firebase
            </li>
            <li>
              <IconBrandNextjs className="inline" /> Next.js
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <CardExperience
          jobTitle="Frontend Web Developer"
          company="PT. Lorem Ipsum"
          jobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            possimus incidunt minima voluptas corporis ipsa aliquam ut fuga
            illum laborum?"
        />
        <CardExperience
          jobTitle="Frontend Web Developer"
          company="PT. Lorem Ipsum"
          jobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            possimus incidunt minima voluptas corporis ipsa aliquam ut fuga
            illum laborum?"
        />
        <CardExperience
          jobTitle="Frontend Web Developer"
          company="PT. Lorem Ipsum"
          jobDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            possimus incidunt minima voluptas corporis ipsa aliquam ut fuga
            illum laborum?"
        />
      </div>
    </Section>
  );
}

export default SkillAndExperience;
