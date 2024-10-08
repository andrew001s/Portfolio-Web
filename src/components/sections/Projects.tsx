import { useEffect, useState } from "react";
import { ProjectCard } from "../common/ProjectCard"
import { getPrujects } from "../../services/proyectHandler";
import { PaginationComponent } from "../common/PaginationComponent";
import { Loading } from "../common/Loading";


export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    getPrujects({ pageSize: 4, pageNumber: currentPage }).then((res:any) => {
      console.log(res.data);
      setProjects(res.data.items);
      setCurrentPage(res.data.currentPage);
      setTotalPages(res.data.totalPages);
      setIsLoading(false);
    });
  }, [currentPage]);
 
  const getTech = (techs:string) => {
    let techsArray = techs.split(",");
    return techsArray;
  }

  return (
    <div>
      {isLoading && <div className="flex justify-center items-center p-4"><Loading /></div>}
      <div className="grid lg:grid-rows-2 lg:grid-flow-col gap-4">
        {projects.map((project:any) => (
          <ProjectCard
            title={project.name}
            src={project.image}
            code={project.code}
            project={project.url}
            tech={getTech(project.tech)} 
            description={project.description}          />
        ))}
    </div>
    <div className="flex justify-center items-center p-2">
      <PaginationComponent total={totalPages} current={currentPage} onPageChange={setCurrentPage}/>
    </div>
    </div>
    
  )
}
