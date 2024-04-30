import { Section, SectionTitle } from "./ui/section";
import CardProject from "./ui/card-project";
import { ProjectData, ProjectsData } from "@/lib/type";
import data from "@/public/data.json";

function MyWorks() {
  const { projects }: { projects: ProjectsData } = data;

  return (
    <Section id="my-work" className="gap-7" bgColor="slate">
      <SectionTitle className="self-center">My Works</SectionTitle>
      <div className="flex flex-col gap-4 sm:px-10">
        {projects.map((project: ProjectData, index: number) => {
          return (
            <CardProject
              key={index}
              projectName={project.projectName}
              imgSrc={project.imgSrc}
              siteLink={project.siteLink}
              githubLink={project.githubLink}
              desc={project.desc}
              buildWith={project.buildWith}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default MyWorks;
