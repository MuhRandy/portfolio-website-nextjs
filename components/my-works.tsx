import { Section, SectionTitle } from "./ui/section";
import CardProject from "./ui/card-project";

type Projects = {
  projectName: string;
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
};

function MyWorks() {
  const projects: Projects[] = [
    {
      projectName: "MTs Miftahul Ulum Website",
      imgSrc: "/projects/school-website.jpg",
      siteLink: "https://mts-miftahul-ulum.web.app/",
      githubLink: "https://github.com/MuhRandy/mts-school-web",
      desc: "MTs Miftahul Ulum that have auth, CRUD, and filter post category feature using Firebase as a Backend",
      buildWith: ["reactjs", "firebase", "tailwindcss", "typescript"],
    },
    {
      projectName: "Qur'an Memorize Quiz",
      imgSrc: "/projects/quran-memorize-quiz.png",
      siteLink: "https://muhrandy.github.io/quran-memorize-quiz/",
      githubLink: "https://github.com/MuhRandy/quran-memorize-quiz",
      desc: "A simple quran memorize quiz. User can select the Surah and how many question will generate, when user select the answer, there will indicate which answer is right and wrong, and also user score at the end.",
      buildWith: ["reactjs", "tailwindcss", "typescript"],
    },
    {
      projectName: "Markdown Preview",
      imgSrc: "/projects/react-markdown-preview.jpg",
      siteLink: "https://muhrandy.github.io/react-markdown-preview-fcc/",
      githubLink: "https://github.com/MuhRandy/react-markdown-preview-fcc",
      desc: "A simple responsive markdown preview with maximize and minimize button and user can choose layout between side by side or top and down.",
      buildWith: ["reactjs", "tailwindcss"],
    },
    {
      projectName: "Random Quote Machine",
      imgSrc: "/projects/random-quote-machine.jpg",
      siteLink: "https://muhrandy.github.io/random-quote-machine/",
      githubLink: "https://github.com/MuhRandy/random-quote-machine",
      desc: "A simple responsive random quote web that using free api and user can share quote to twitter with single click.",
      buildWith: ["reactjs", "tailwindcss"],
    },
    {
      projectName: "Bookshelf App",
      imgSrc: "/projects/bookshelf-app.jpg",
      siteLink: "https://muhrandy.github.io/bookshelf-app-vanilla-js/",
      githubLink: "https://github.com/MuhRandy/bookshelf-app-vanilla-js",
      desc: "A simple responsive random quote web that using free api and user can share quote to twitter with single click.",
      buildWith: ["html", "css", "javascript"],
    },
  ];
  return (
    <Section id="my-work" className="gap-7" bgColor="slate">
      <SectionTitle className="self-center">My Works</SectionTitle>
      <div className="flex flex-col gap-4 sm:px-10">
        {projects.map((project: Projects, index: number) => {
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
