import { ProjectCard } from "../common/ProjectCard"

export const Projects = () => {
  return (
    <div className="grid grid-rows-2 grid-flow-col gap-4">
        <ProjectCard tech={["CSS","HTML"]} title="🔗Social Media Links🔗" src="https://i.imgur.com/jJR24Wc.png" />
        <ProjectCard tech={["JS",".Net","MongoDB"]} title="Artist Portfolio" src="https://i.imgur.com/XQ6pIEp.png" />
        <ProjectCard tech={["JS",".Net","MongoDB"]} title="Artist Portfolio" src="https://i.imgur.com/XQ6pIEp.png" />
    </div>
  )
}
