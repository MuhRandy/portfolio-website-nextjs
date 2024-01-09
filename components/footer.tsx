import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Section } from "./ui/section";
import { IconBrandTwitterFilled } from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";

function Footer() {
  return (
    <footer>
      <Section
        bgColor="slate"
        className="gap-2 text-base sm:text-xl text-center"
      >
        <div className="flex gap-3 pt-24">
          <IconBrandLinkedin size={35} className="text-blue-500" />
          <IconBrandFacebookFilled size={35} className="text-blue-700" />
          <IconBrandInstagram size={35} className="text-red-500" />
          <IconBrandTwitterFilled size={35} className="text-blue-500" />
          <IconBrandGithubFilled size={35} />
          <IconBrandYoutubeFilled size={35} className="text-red-600" />
        </div>
        <p>Copyright © 2024 - Created by Muhammad Randy</p>
        <p>Made with ❤ using Next.js</p>
      </Section>
    </footer>
  );
}

export default Footer;
