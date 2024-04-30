"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Home from "@/components/home";
import MyBlog from "@/components/my-blog";
import MyWorks from "@/components/my-works";
import Navbar from "@/components/navbar";
import SkillAndExperience from "@/components/skill-and-experience";
import { Data } from "@/lib/type";
import { cn, getDataJSON } from "@/lib/utils";
import { useEffect, useState } from "react";
import { globalContext } from "@/lib/context";

export default function Page() {
  const [data, setData] = useState<Data>([]);

  useEffect(() => {
    getDataJSON(setData);
  }, []);

  console.log(data);

  return (
    <globalContext.Provider value={{ data }}>
      <header
        className={cn(
          "sticky top-0 left-0 right-0 z-20",
          "text-lg lg:text-2xl"
        )}
      >
        <Navbar />
      </header>
      <main className="overflow-x-clip">
        <Home />
        <About />
        <SkillAndExperience />
        <MyWorks />
        <MyBlog />
        <Contact />
      </main>
      <Footer />
    </globalContext.Provider>
  );
}
