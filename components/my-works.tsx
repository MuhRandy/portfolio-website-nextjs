import { Section, SectionTitle } from "./ui/section";
import CardProject from "./ui/card-project";
import { ProjectData, ProjectsData } from "@/lib/type";
import { useGlobalContext } from "@/lib/context";
import { useEffect, useState } from "react";

function MyWorks() {
  const { data } = useGlobalContext();

  const [projects, setProjects] = useState<ProjectsData>([]);

  useEffect(() => {
    if (data.length > 0) {
      setProjects(data[0].projects);
    }
  }, [data]);

  return (
    <Section id="my-work" className="gap-7" bgColor="slate">
      <SectionTitle className="self-center">My Works</SectionTitle>
      <div className="flex flex-col gap-4 sm:px-10">
        {projects?.map((project: ProjectData, index: number) => {
          return (
            <CardProject
              key={index}
              name={project.projectName}
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
