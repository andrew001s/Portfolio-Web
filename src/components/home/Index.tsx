import { Separator } from "../common/Separator"
import { Contact } from "../sections/Contact"
import { Experience } from "../sections/Experience"
import { Home } from "../sections/Home"
import { Projects } from "../sections/Projects"
import { Skills } from "../sections/Skills"

export const Index = () => {
  return (
    <div >
        <Home/>
        <Separator text="Skills"/>
        <Skills/>
        <Separator text="Projects"/>
        <Projects/>
        <Separator text="Experience"/>
        <Experience/>
        <Separator text="Contact Me"/>
        <Contact/>
    </div>
  )
}
