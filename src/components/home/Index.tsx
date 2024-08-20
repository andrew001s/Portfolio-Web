import { Separator } from "../common/Separator"
import { Contact } from "../sections/Contact"
import { Experience } from "../sections/Experience"
import { Home } from "../sections/Home"
import { Projects } from "../sections/Projects"
import { Skills } from "../sections/Skills"

export const Index = () => {
  return (
    <div className="pt-9">
        <Home/>
        <Separator id="skills" text="Skills"/>
        <Skills/>
        <Separator id="proyects" text="Projects"/>
        <Projects/>
        <Separator id="experience" text="Experience"/>
        <Experience/>
        <Separator id="contact" text="Contact Me"/>
        <Contact/>
    </div>
  )
}
