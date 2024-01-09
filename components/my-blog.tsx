import { Section, SectionTitle } from "./ui/section";
import CardBlog from "./ui/card-blog";

function MyBlog() {
  const posts = [
    {
      title: "Lorem, ipsum dolor",
      date: "20 Januari, 2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque explicabo optio unde esse similique, reiciendis assumenda impedit dolorem nisi repellat? Accusantium officiis, facilis soluta alias molestias consequuntur eveniet, dolorum quos doloribus culpa dignissimos temporibus mollitia aliquam eligendi? Facere, veritatis?",
      imgSrc: "/projects/school-website.jpg",
    },
    {
      title: "Lorem, ipsum dolor",
      date: "20 Januari, 2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque explicabo optio unde esse similique, reiciendis assumenda impedit dolorem nisi repellat? Accusantium officiis, facilis soluta alias molestias consequuntur eveniet, dolorum quos doloribus culpa dignissimos temporibus mollitia aliquam eligendi? Facere, veritatis?",
      imgSrc: "/projects/school-website.jpg",
    },
    {
      title: "Lorem, ipsum dolor",
      date: "20 Januari, 2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque explicabo optio unde esse similique, reiciendis assumenda impedit dolorem nisi repellat? Accusantium officiis, facilis soluta alias molestias consequuntur eveniet, dolorum quos doloribus culpa dignissimos temporibus mollitia aliquam eligendi? Facere, veritatis?",
      imgSrc: "/projects/school-website.jpg",
    },
    {
      title: "Lorem, ipsum dolor",
      date: "20 Januari, 2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque explicabo optio unde esse similique, reiciendis assumenda impedit dolorem nisi repellat? Accusantium officiis, facilis soluta alias molestias consequuntur eveniet, dolorum quos doloribus culpa dignissimos temporibus mollitia aliquam eligendi? Facere, veritatis?",
      imgSrc: "/projects/school-website.jpg",
    },
    {
      title: "Lorem, ipsum dolor",
      date: "20 Januari, 2024",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores neque explicabo optio unde esse similique, reiciendis assumenda impedit dolorem nisi repellat? Accusantium officiis, facilis soluta alias molestias consequuntur eveniet, dolorum quos doloribus culpa dignissimos temporibus mollitia aliquam eligendi? Facere, veritatis?",
      imgSrc: "/projects/school-website.jpg",
    },
  ];
  return (
    <Section className="gap-7">
      <SectionTitle className="self-center">My Blog</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {posts.map(
          (
            post: {
              title: string;
              date: string;
              text: string;
              imgSrc: string;
            },
            index: number
          ) => {
            return (
              <CardBlog
                key={index}
                title={post.title}
                text={post.text}
                date={post.date}
                imgSrc={post.imgSrc}
              />
            );
          }
        )}
      </div>
    </Section>
  );
}

export default MyBlog;
