"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Home from "@/components/home";
import MyBlog from "@/components/my-blog";
import MyWorks from "@/components/my-works";
import Navbar from "@/components/navbar";
import SkillAndExperience from "@/components/skill-and-experience";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <SkillAndExperience />
      <MyWorks />
      <MyBlog />
      <Contact />
      <Footer />
    </main>
  );
}
