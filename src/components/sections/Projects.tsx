import { useEffect, useState } from "react";
import { ProjectCard } from "../common/ProjectCard"
import { getPrujects } from "../../services/proyectHandler";
import { PaginationComponent } from "../common/PaginationComponent";


export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    getPrujects({ pageSize: 4, pageNumber: currentPage }).then((res:any) => {
      console.log(res.data);
      setProjects(res.data.items);
      setCurrentPage(res.data.currentPage);
      setTotalPages(res.data.totalPages);
    });
  }, [currentPage]);
 
  const getTech = (techs:string) => {
    let techsArray = techs.split(",");
    return techsArray;
  }

  return (
    <div>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        {projects.map((project:any) => (
          <ProjectCard
            title={project.name}
            src={project.image}
            tech={getTech(project.tech)}
          />
        ))}
    </div>
    <div className="flex justify-center p-2">
      <PaginationComponent total={totalPages} current={currentPage} onPageChange={setCurrentPage}/>
    </div>
    </div>
    
  )
}
