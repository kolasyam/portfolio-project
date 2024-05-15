import Image from "next/image";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Main from "./Components/Main";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import ScrollToTop from "./Components/ScrollToTop";
export default function Home() {
  return (
    <>
    <Navbar></Navbar>
    <Main></Main>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <ScrollToTop></ScrollToTop>
    </>
  );
}
