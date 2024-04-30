import { Section, SectionTitle } from "./ui/section";
import CardBlog from "./ui/card-blog";
import { useGlobalContext } from "@/lib/context";
import { PostData, PostsData } from "@/lib/type";
import { useEffect, useState } from "react";

function MyBlog() {
  const { data } = useGlobalContext();

  const [posts, setPosts] = useState<PostsData>([]);

  useEffect(() => {
    if (data.length > 0) {
      setPosts(data[0].posts);
    }
  }, [data]);

  return (
    <Section id="my-blog" className="gap-7">
      <SectionTitle className="self-center">My Blog</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {posts?.map((post: PostData, index: number) => {
          return (
            <CardBlog
              key={index}
              title={post.title}
              text={post.text}
              date={post.date}
              url={post.url}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default MyBlog;
