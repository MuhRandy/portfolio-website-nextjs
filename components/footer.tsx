import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { Section } from "./ui/section";
import { IconBrandTwitterFilled } from "@tabler/icons-react";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import Link from "next/link";

function Footer() {
  return (
    <footer>
      <Section
        id="footer"
        bgColor="slate"
        className="gap-2 text-base sm:text-xl text-center"
      >
        <div className="flex gap-3 pt-24">
          <Link href="https://www.linkedin.com/in/muhammad-randy/">
            <IconBrandLinkedin size={35} className="text-blue-500" />
          </Link>

          <Link href="#">
            <IconBrandFacebookFilled size={35} className="text-blue-700" />
          </Link>

          <Link href="#">
            <IconBrandInstagram size={35} className="text-red-500" />
          </Link>

          <Link href="https://twitter.com/RandyThz">
            <IconBrandTwitterFilled size={35} className="text-blue-500" />
          </Link>

          <Link href="https://github.com/MuhRandy">
            <IconBrandGithubFilled size={35} />
          </Link>

          <Link href="#">
            <IconBrandYoutubeFilled size={35} className="text-red-600" />
          </Link>
        </div>

        <p>Copyright © 2024 - Created by Muhammad Randy</p>

        <p>Made with ❤ using Next.js</p>
      </Section>
    </footer>
  );
}

export default Footer;
