import { IconBrandGmail, IconBrandWhatsapp } from "@tabler/icons-react";
import { Card } from "./ui/card";
import { Section, SectionTitle } from "./ui/section";

function Contact() {
  const contactIconSize = 25;
  return (
    <Section height={0} className="relative top-28">
      <Card className="flex flex-col lg:flex-row items-center text-white bg-black gap-3 lg:gap-10 px-6 py-10 sm:text-xl w-screen sm:w-[80vw]">
        <SectionTitle className="self-center lg:self-start text-center">
          Contact Me
        </SectionTitle>
        <div className="flex flex-col items-center md:flex-row gap-2 md:gap-5">
          <p className="flex items-center">
            <IconBrandGmail
              size={contactIconSize}
              className="text-red-500 inline"
            />
            muhammadrandy0027@gmail.com
          </p>
          <p className="flex items-center">
            <IconBrandWhatsapp
              size={contactIconSize}
              className="text-green-600 inline"
            />
            +6285822283507
          </p>
        </div>
      </Card>
    </Section>
  );
}

export default Contact;
