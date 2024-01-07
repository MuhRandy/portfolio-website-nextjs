import { Section, SectionTitle } from "./ui/section";
import CardBlog from "./ui/card-blog";

function MyBlog() {
  return (
    <Section className="gap-7">
      <SectionTitle className="self-center">My Blog</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        <CardBlog
          title="Lorem, ipsum dolor."
          date="40 Januari, 2029"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              neque explicabo optio unde esse similique, reiciendis assumenda
              impedit dolorem nisi repellat? Accusantium officiis, facilis
              soluta alias molestias consequuntur eveniet, dolorum quos
              doloribus culpa dignissimos temporibus mollitia aliquam eligendi?
              Facere, veritatis?"
          imgSrc="/projects/school-website.jpg"
        />
        <CardBlog
          title="Lorem, ipsum dolor."
          date="40 Januari, 2029"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              neque explicabo optio unde esse similique, reiciendis assumenda
              impedit dolorem nisi repellat? Accusantium officiis, facilis
              soluta alias molestias consequuntur eveniet, dolorum quos
              doloribus culpa dignissimos temporibus mollitia aliquam eligendi?
              Facere, veritatis?"
          imgSrc="/projects/school-website.jpg"
        />
        <CardBlog
          title="Lorem, ipsum dolor."
          date="40 Januari, 2029"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              neque explicabo optio unde esse similique, reiciendis assumenda
              impedit dolorem nisi repellat? Accusantium officiis, facilis
              soluta alias molestias consequuntur eveniet, dolorum quos
              doloribus culpa dignissimos temporibus mollitia aliquam eligendi?
              Facere, veritatis?"
          imgSrc="/projects/school-website.jpg"
        />
      </div>
    </Section>
  );
}

export default MyBlog;
