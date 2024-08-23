import { Card } from "../common/Card";
import { CardLarge } from "../common/CardLarge";

export const Skills = () => {
  return (
    <div  className="lg:-space-y-48 space-y-4 lg:space-x-7">
      <div className="grid lg:grid-cols-3 grid-flow-row gap-4">
        <Card
          title="⌨️ Lenguages"
          src="https://skillicons.dev/icons?i=cs,java,python,js&perline=4"
          text="C#, Java, Python, JavaScript"
        />
        <Card
          title="🖥️ Front-End"
          src="https://skillicons.dev/icons?i=css,html,react,bootstrap,tailwind&perline=5"
          text="CSS, HTML, React, Bootstrap, Tailwind"
        />
        <Card
          title="🚧 Back-End"
          src="https://skillicons.dev/icons?i=dotnet,spring&perline=4"
          text=".NET, Spring"
        />
        <Card
          title="🛢️ Databases"
          src="https://skillicons.dev/icons?i=mongodb,mysql,postgres&perline=4"
          text="MongoDB, MySQL, Postgres"
        />
      </div>
      <div className="lg:relative lg:left-96 lg:block hidden">
        <CardLarge
          title="🚧 Extras"
          src="https://skillicons.dev/icons?i=git,github,bash,blender,docker,linux,ps,postman,windows&perline=13"
          text="Git, GitHub, Bash, Blender, Docker, Linux, Photoshop, Postman, Windows"
        />
        
      </div>
      <div className="lg:relative lg:left-96 lg:hidden block">
        <CardLarge
          title="🚧 Extras"
          src="https://skillicons.dev/icons?i=git,github,bash,blender,docker,linux,ps,postman,windows&perline=5"
          text="Git, GitHub, Bash, Blender, Docker, Linux, Photoshop, Postman, Windows"
        />
        
      </div>
    </div>
  );
};
