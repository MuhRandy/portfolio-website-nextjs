import { Section, SectionTitle } from "./ui/section";
import CardProject from "./ui/card-project";

function MyWorks() {
  const projects = [
    {
      projectName: "MTs Miftahul Ulum Website",
      imgSrc: "/projects/school-website.jpg",
    },
    {
      projectName: "Quiz Qur'an",
      imgSrc: "/projects/quiz-sambung-ayat.jpg",
    },
    {
      projectName: "Markdown Preview",
      imgSrc: "/projects/react-markdown-preview.jpg",
    },
    {
      projectName: "Personal Portfolio Website",
      imgSrc: "/projects/personal-portofolio-website.jpg",
    },
    {
      projectName: "Random Quote Machine",
      imgSrc: "/projects/random-quote-machine.jpg",
    },
  ];
  return (
    <Section className="gap-7" bgColor="slate">
      <SectionTitle className="self-center">My Works</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {projects.map(
          (
            project: {
              projectName: string;
              imgSrc: string;
            },
            index: number
          ) => {
            return (
              <CardProject
                key={index}
                name={project.projectName}
                imgSrc={project.imgSrc}
              />
            );
          }
        )}
      </div>
    </Section>
  );
}

export default MyWorks;
