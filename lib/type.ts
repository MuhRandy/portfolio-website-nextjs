type BuildWith = (
  | "html"
  | "css"
  | "javascript"
  | "typescript"
  | "tailwindcss"
  | "reactjs"
  | "firebase"
  | "nextjs"
)[];

type ProjectData = {
  projectName: string;
  imgSrc: string;
  siteLink: string;
  githubLink: string;
  desc: string;
  buildWith: BuildWith;
};

type Data =
  | {
      navs: NavsData;
      posts: PostsData;
      projects: ProjectsData;
      experiences: ExperiencesData;
    }[]
  | [];

type NavData =
  | {
      link: string;
      name: string;
      offset: number;
    }[]
  | [];

type NavsData = {
  link: string;
  name: string;
  offset: number;
}[];

type PostData = {
  title: string;
  date: string;
  text: string;
  url: string;
};

type PostsData =
  | {
      title: string;
      date: string;
      text: string;
      url: string;
    }[]
  | [];

type ProjectsData = ProjectData[];

type ExperiencesData = {
  jobTitle: string;
  company: string;
  jobDescription: string;
}[];

type GlobalContext = {
  data: Data;
};

export type {
  BuildWith,
  ProjectData,
  Data,
  NavData,
  NavsData,
  PostData,
  PostsData,
  ProjectsData,
  ExperiencesData,
  GlobalContext,
};
