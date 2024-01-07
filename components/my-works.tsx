import { Section, SectionTitle } from "./ui/section";
import CardProject from "./ui/card-project";

function MyWorks() {
  return (
    <Section className="gap-7" bgColor="slate">
      <SectionTitle className="self-center">My Works</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <CardProject
          name="MTs Miftahul Ulum Website"
          imgSrc="/projects/school-website.jpg"
        />
        <CardProject
          name="MTs Miftahul Ulum Website"
          imgSrc="/projects/school-website.jpg"
        />
        <CardProject
          name="MTs Miftahul Ulum Website"
          imgSrc="/projects/school-website.jpg"
        />
        <CardProject
          name="MTs Miftahul Ulum Website"
          imgSrc="/projects/school-website.jpg"
        />
      </div>
    </Section>
  );
}

export default MyWorks;
