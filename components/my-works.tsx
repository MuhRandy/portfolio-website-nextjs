import { Section, SectionTitle } from "./ui/section";
import CardProject from "./ui/card-project";

function MyWorks() {
  const projects = [
    {
      projectName: "MTs Miftahul Ulum Website",
      imgSrc: "/projects/school-website.jpg",
      siteLink: "https://mts-miftahul-ulum.web.app/",
      githubLink: "https://github.com/MuhRandy/mts-school-web",
    },
    {
      projectName: "Quiz Qur'an",
      imgSrc: "/projects/quiz-sambung-ayat.jpg",
      siteLink: "https://muhrandy.github.io/quiz-hafalan-quran/",
      githubLink: "https://github.com/MuhRandy/quiz-hafalan-quran",
    },
    {
      projectName: "Markdown Preview",
      imgSrc: "/projects/react-markdown-preview.jpg",
      siteLink: "https://muhrandy.github.io/react-markdown-preview-fcc/",
      githubLink: "https://github.com/MuhRandy/react-markdown-preview-fcc",
    },
    {
      projectName: "Random Quote Machine",
      imgSrc: "/projects/random-quote-machine.jpg",
      siteLink: "https://muhrandy.github.io/random-quote-machine/",
      githubLink: "https://github.com/MuhRandy/random-quote-machine",
    },
  ];
  return (
    <Section id="my-work" className="gap-7" bgColor="slate">
      <SectionTitle className="self-center">My Works</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {projects.map(
          (
            project: {
              projectName: string;
              imgSrc: string;
              siteLink: string;
              githubLink: string;
            },
            index: number
          ) => {
            return (
              <CardProject
                key={index}
                name={project.projectName}
                imgSrc={project.imgSrc}
                siteLink={project.siteLink}
                githubLink={project.githubLink}
              />
            );
          }
        )}
      </div>
    </Section>
  );
}

export default MyWorks;
