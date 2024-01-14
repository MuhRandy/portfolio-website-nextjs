import Image from "next/image";
import { Card, CardTitle } from "./card";
import { CardAnimation } from "./animation";
import { Button } from "./button";
import { IconBrandGithub } from "@tabler/icons-react";

function CardProject({
  name,
  imgSrc,
  siteLink,
  githubLink,
}: {
  name: string;
  imgSrc: string;
  siteLink: string;
  githubLink: string;
}) {
  return (
    <CardAnimation>
      <Card className="overflow-hidden relative group">
        <div className="w-full h-full bg-black/50 backdrop-blur-sm text-white absolute hidden group-hover:block">
          <div className="w-full h-full flex flex-col justify-center items-center gap-4">
            <CardTitle className="text-center text-lg sm:text-2xl">
              {name}
            </CardTitle>
            <div className="flex items-center gap-3">
              <a href={siteLink}>
                <Button variant={"outlineSecondary"}>Live Site</Button>
              </a>
              <a href={githubLink}>
                <Button variant={"primary"} className="border-black">
                  <IconBrandGithub /> Github
                </Button>
              </a>
            </div>
          </div>
        </div>
        <Image src={imgSrc} alt={name} width={1300} height={600} />
      </Card>
    </CardAnimation>
  );
}

export default CardProject;
