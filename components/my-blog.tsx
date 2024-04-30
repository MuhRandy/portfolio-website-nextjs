import { Section, SectionTitle } from "./ui/section";
import CardBlog from "./ui/card-blog";

function MyBlog() {
  const posts = [
    {
      title: "Membuat Tooltip dengan HTML & CSS",
      date: "Apr 20, 2024",
      text: "Sebelum kita membuat tooltip, sebaiknya kita mengetahui apa sih itu tooltip dan bagaimana contohnya. Melansir dari W3School, tooltip adalah...",
      url: 'https://medium.com/@muhammadrandy0027/membuat-tooltip-dengan-html-css-f758971c94f1?source=user_profile---------0----------------------------'
    },
    {
      title: "Membuat Web Resep Sederhana dengan Frontend Mentor",
      date: "Apr 6, 2024",
      text: "Akhir-akhir ini saya sedang seru-serunya belajar membuat web atau situs sederhana. Namun belajar dengan membaca konsep-konsep saja sering...",
      url: 'https://medium.com/@muhammadrandy0027/belajar-membuat-web-resep-sederhana-dengan-frontend-mentor-c73a54afcd74?source=user_profile---------1----------------------------'
    },
    {
      title:
        "Analisis Data Genre Netflix Original Shows yang Paling Banyak Dibatalkan (2014–2023)",
      date: "Sep 20, 2023",
      text: "Data diambil dari Kaggle dimana dataset ini berisi tentang Original Shows Netflix yang berakhir dari tahun 2014 hingga 2023. Untuk tahapan…",
      url: 'https://medium.com/@muhammadrandy0027/genre-netflix-original-shows-yang-paling-banyak-dibatalkan-2014-2023-8f9dfbd50fc?source=user_profile---------2----------------------------'
    },
  ];
  return (
    <Section id="my-blog" className="gap-7">
      <SectionTitle className="self-center">My Blog</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {posts.map(
          (
            post: {
              title: string;
              date: string;
              text: string;
              url: string;
            },
            index: number
          ) => {
            return (
              <CardBlog
                key={index}
                title={post.title}
                text={post.text}
                date={post.date}
                url={post.url}
              />
            );
          }
        )}
      </div>
    </Section>
  );
}

export default MyBlog;
