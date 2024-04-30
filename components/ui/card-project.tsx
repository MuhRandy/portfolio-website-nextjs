import Image from "next/image";
import { Card, CardTitle } from "./card";
import { CardAnimation } from "./animation";
import {
  IconBrandCss3,
  IconBrandFirebase,
  IconBrandGithubFilled,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";

function CardProject({
  name,
  imgSrc,
  siteLink,
  githubLink,
  desc,
  buildWith,
}: {
  name: string;
  imgSrc: string;
  siteLink: string;
  githubLink: string;
  desc: string;
  buildWith: (
    | "html"
    | "css"
    | "javascript"
    | "typescript"
    | "tailwindcss"
    | "reactjs"
    | "firebase"
    | "nextjs"
  )[];
}) {
  const generateBuildWithElement = (
    buildWith: string,
    key: string | number
  ) => {
    switch (buildWith) {
      case "html":
        return (
          <li key={key}>
            <IconBrandHtml5 className="text-orange-600 inline" />
            HTML
          </li>
        );

      case "css":
        return (
          <li key={key}>
            <IconBrandCss3 className="text-blue-600 inline" />
            CSS
          </li>
        );

      case "javascript":
        return (
          <li key={key}>
            <IconBrandJavascript className="text-yellow-500 inline" />
            Javascript
          </li>
        );

      case "typescript":
        return (
          <li key={key}>
            <IconBrandTypescript className="text-blue-500 inline" />
            Typescript
          </li>
        );

      case "tailwindcss":
        return (
          <li key={key}>
            <IconBrandTailwind className="text-teal-500 inline" />
            TailwindCSS
          </li>
        );

      case "reactjs":
        return (
          <li key={key}>
            <IconBrandReact className="text-blue-400 inline" />
            ReactJs
          </li>
        );

      case "firebase":
        return (
          <li key={key}>
            <IconBrandFirebase className="text-orange-400 inline" />
            Firebase
          </li>
        );

      case "nextjs":
        return (
          <li key={key}>
            <IconBrandNextjs className="inline" />
            Next.js
          </li>
        );

      default:
        break;
    }
  };

  return (
    <CardAnimation>
      <Card className="overflow-hidden relative group">
        <Image src={imgSrc} alt={name} width={1300} height={600} />
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 pb-4 px-4">
          <CardTitle className="text-center text-lg">{name}</CardTitle>
          <p className="text-center">{desc}</p>
          <div className="text-center">
            <p>Build with:</p>
            <ul className="flex flex-wrap justify-center gap-x-4">
              {buildWith?.map((item) => generateBuildWithElement(item, item))}
            </ul>
          </div>

          <div className="flex items-center gap-3">
            <a href={siteLink} className="underline">
              Live Site
            </a>
            <a href={githubLink} className="flex items-center underline">
              <IconBrandGithubFilled size={15} /> Github
            </a>
          </div>
        </div>
      </Card>
    </CardAnimation>
  );
}

export default CardProject;
