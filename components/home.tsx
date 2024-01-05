import Image from "next/image";
import { Button } from "./ui/button";

function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-around max-w-[90vw] lg:max-w-[80vw] py-10">
        {/* Home Text */}
        <div className="max-w-full md:max-w-[60%] flex flex-col justify-between gap-5">
          <div className="text-4xl">
            <div className="font-bold">Hello, I&apos;m Muhammad Randy.</div>
            <div>Aspiring Web Developer</div>
          </div>
          <div>
            I am an aspiring Web Developer. Now I live in Banjar, South
            Kalimantan. If you are interested in working with me, you can
            contact me to hire me.
          </div>
          <Image
            src={"/profil.jpg"}
            alt="Muhammad Randy's Profil Picture"
            width={1051}
            height={1500}
            className="w-[40vw] h-auto md:hidden self-center"
          />
          <div className="flex gap-2 self-center md:self-auto">
            <Button className="hover:bg-white hover:font-bold hover:text-primary border-2 hover:border-primary">
              Download CV
            </Button>
            <Button className="bg-white text-primary border-2 border-primary font-bold hover:font-normal hover:bg-primary hover:text-white">
              Contact Me
            </Button>
          </div>
        </div>
        {/* --- */}

        <Image
          src={"/profil.jpg"}
          alt="Muhammad Randy's Profil Picture"
          width={1051}
          height={1500}
          className="w-[200px] h-auto hidden md:block"
        />
      </div>
    </div>
  );
}

export default Home;
